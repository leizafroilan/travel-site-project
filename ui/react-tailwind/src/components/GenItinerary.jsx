import React, { useState, useEffect, useRef } from "react";
import { useContext } from 'react';
import { addDays, differenceInDays } from "date-fns";
import { DateRange } from 'react-date-range';
import format from 'date-fns/format'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './styles.css';
import gen from '../files/gen.jpg'
import api from './api/api'
import { MyContext } from './context/store';

function GenItinerary ({ defaultCity }) {
  
  //api
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  //City
  const [city, setCity] = useState(defaultCity);
  const [cityError, setCityError] = useState('');

  //Travel Mode
  const [mode, setMode] = useState('');
  const [modeError, setModeError] = useState('');

  //Date Range
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [isCalendar, setIsCalendar] = useState(false)
  const [isStartChanged, setIsStartChanged] = useState(false);
  const [maxEndDate, setMaxEndDate] = useState(addDays(state[0].startDate, 365)); 
  const today = new Date();

  // get the target element to toggle 
  const refOne = useRef(null)

  //Scene
  const [sceneOptions, setSceneOptions] = useState(['Nature', 'Theme Parks', 'Beaches', 'Mountains'])
  const [selectedValues, setSelectedValues] = useState([]);
  const [checkedState, setCheckedState] = useState(
    new Array(sceneOptions.length+6).fill(false)
  );
  const [sceneError, setSceneError] = useState('')  

  //Payload
  const { payload, setPayload } = useContext(MyContext);

  // When page loads or changes on tracked variables
  useEffect(() => {
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true)
    document.addEventListener("click", hideOnClickOutside, true)
  }, [])

  useEffect(() => {
    if (state[0].startDate.getDate() !== state[0].endDate.getDate()) {
      setIsCalendar(false) 
    }
    if (isStartChanged) {
      setMaxEndDate(addDays(state[0].startDate, 7)); 
    }
  }, [state]);

  useEffect(() => {
    if (city) {
      fetchCityScene(city);
    }
  }, []);

  //End of useEffect

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    if( e.key === "Escape" ) {
      setIsCalendar(false)
      setMaxEndDate(addDays(state[0].startDate, 365))
      setIsStartChanged(false)
    }
  }

  // Hide on outside click
  const hideOnClickOutside = (e) => {
    if( refOne.current && !refOne.current.contains(e.target) ) {
      setIsCalendar(false)
      setMaxEndDate(addDays(state[0].startDate, 365))
      setIsStartChanged(false)
    }
  }

  const handleSelect = (ranges) => {
    setIsStartChanged(true)
    setState([ranges.selection]);    
  }

  const handleSubmit = () => {
    // Validate fields before submission
    if (!city.trim()) {
      setCityError('City is required');
      return;
    } else {
      setCityError('');
    }

    if (!mode) {
      setModeError('Travel mode is required');
      return;
    } else {
      setModeError('');
    }

    if (selectedValues.length === 0) {
      setSceneError('Scene is required')
      return;
    } else {
      setSceneError('')
    }
    
    setPayload({"city": city,
                "days": differenceInDays(state[0].endDate, state[0].startDate) + 1,
                "scene": selectedValues,
                "mode": mode,
                "datestr": `${format(state[0].startDate, "MM/dd/yy")} - ${format(state[0].endDate, "MM/dd/yy")}`
              })

  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleSceneChange = (index) => {
    const updatedCheckedState = checkedState.map((item, idx) =>
      idx === index ? !item : item
    );
    setCheckedState(updatedCheckedState);
  
    const selectedValues = sceneOptions.filter((option, idx) =>
      updatedCheckedState[idx]
    );
    setSelectedValues(selectedValues);
  
    console.log(selectedValues);
  };

  const handleCityBlur = () => {
    if (city.trim() !== '') {
      const falseArray = Array(checkedState.length+6).fill(false);
      setCheckedState(falseArray);
      fetchCityScene(city);
    }
  };

  const fetchCityScene = async () => {
    try {
      setLoading(true)
      const response = await api.get('/scenes/', {
        params: {
          city: city, 
        },
        headers: {
          'accept': 'application/json'
        }
      });
      setSceneOptions(response.data.Message)
      setLoading(false);
      setTried(false)
    } catch (error) {
      setError(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const handleModeChange = (e) => {
    setMode(e.target.value);
  };

  return (
    

        <div className="flex flex-row border-2 border-pink-500">
          <div className='w-2/3 h-auto' 
          style={{ 
            position: "relative", overflow: "hidden", filter: 'brightness(0.8)'
        }}>
            <img className="absolute top-0 left-0 w-full h-full object-cover" src={gen} alt="" />
          </div>
          <div className="w-full p-4">
            <h1 className="font-serif font-semibold text-pink-500 text-2xl">
              Get Ready for Your Next Adventure
            </h1>
            <div className='mb-4 pt-4'>
              <label htmlFor="city" className="text-xs block text-pink-500 font-serif pb-2">Where</label>
              <input
                type="text"
                id="city"
                value={city}            
                onChange={handleCity}
                onBlur={handleCityBlur}
                className={`text-gray-500 font-serif peer bg-transparent w-full py-2 px-3 placeholder-transparent ring-1 px-2 focus:ring-pink-500 focus:outline-none focus:border-none ${cityError ? 'ring-red-500' : 'ring-pink-500'}`}
              />
              {cityError && <p className="text-red-500 text-xs mt-1">{cityError}</p>}
            </div>
            <div className='mb-4 pt-4 relative'>
                <label htmlFor="dateRange" className="text-xs block text-pink-500 font-serif pb-2">When</label>
                <input
                  type="text"
                  value={`${format(state[0].startDate, "MM/dd/yy")} - ${format(state[0].endDate, "MM/dd/yy")}`}
                  readOnly
                  className="text-gray-500 font-serif peer bg-transparent w-full py-2 px-3 placeholder-transparent ring-1 px-2 focus:ring-pink-500 focus:outline-none focus:border-none ring-pink-500"
                />
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="h-6 w-6 absolute right-2 top-12 text-gray-400 cursor-pointer hover:text-pink-500 active:text-pink-900 transition duration-300"
                  onClick={() => setIsCalendar(!isCalendar)}
                />
            </div>
            <div className={isCalendar ? "w-full border-2 mb-2 z-0" : "z-0"}>
              {isCalendar &&
              <DateRange
                onChange={handleSelect}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                editableDateInputs={true}
                dragSelectionEnabled={false}
                ranges={state}
                months={1}
                direction="horizontal"
                minDate={today}
                maxDate={maxEndDate}
                rangeColors={['#FFC0CB']}
                color={"#FFC0CB"}
                staticRanges={[]}
                inputRanges={[]}
                className="flex justify-center"
              />
            }
            </div>
            <div className='mb-4 pt-4 z-10'>
              <label htmlFor="mode" className="text-xs block text-pink-500 font-serif pb-2">Who</label>
              <select
                id="mode"
                value={mode}            
                onChange={handleModeChange}
                className={`text-gray-500 font-serif peer bg-transparent w-full py-2 px-3 placeholder-transparent ring-1 px-2 focus:ring-pink-500 focus:outline-none focus:border-none ${modeError ? 'ring-red-500' : 'ring-pink-500'}`}
              >
                <option value="" disabled></option>
                <option value="Alone">Alone</option>
                <option value="Family">Family</option>
                <option value="Couple">Couple</option>
                <option value="Friends">Friends</option>
              </select>
              {modeError && <p className="text-red-500 text-xs mt-1">{modeError}</p>}
            </div>
            <div className='mb-4 pt-4 z-10'>
              <label htmlFor="scene" className="text-xs block text-pink-500 font-serif pb-2">What</label>
              <div>
                {sceneOptions.map((option, index) => (
                  <label key={index} htmlFor={option} className="inline-flex items-center">
                    <input
                      id={option}
                      type="checkbox"
                      value={option}
                      checked={checkedState[index]}
                      onChange={()=> handleSceneChange(index)}
                      className={`m-2 appearance-none w-4 h-4 rounded-sm border-2 border-gray-400 checked:bg-pink-500 checked:border-transparent focus:outline-none ${sceneError ? 'border-red-500' : ''}`}
                    />
                    {option}
                  </label>
              ))}
              </div>
              {sceneError && <p className="text-red-500 text-xs mt-1">{sceneError}</p>}
            </div>
          <div className='mb-4 pt-4'>
            <button onClick={handleSubmit} className="bg-pink-500 text-white py-2 px-4 rounded-lg">Submit</button>
          </div>
          </div>
        </div>
      

      )}
    
export default GenItinerary;
