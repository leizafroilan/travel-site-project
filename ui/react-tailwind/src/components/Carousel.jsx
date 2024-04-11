import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignsPost } from '@fortawesome/free-solid-svg-icons'
import bgimage from '../files/turkey.jpg';
import '../App.css';
import Modal from './Modal';
import { MyContext } from './context/store';


function CarouselComponent() {
  const cities = ['New York', 'Paris', 'London', 'Tokyo', 'Sydney'];
  const [typedText, setTypedText] = useState('');
  const [trueValue, setTrueValue] = useState('');
  const [showCaret, setShowCaret] = useState(true);
  const [counter, setCounter] = useState(0);
  const [stop, setStop] = useState(false);
  const [animate, setAnimate] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  //Payload
  const { payload, setPayload } = useContext(MyContext);

  

  const handleChange = (event) => {
    setTrueValue(event.target.value);
  };

  const handleFocus = () => {
    if (animate) {
      setTypedText('');
      setShowCaret(false);
      setStop(true);
      setAnimate(false);
    }
  };

  const handleBlur = () => {
    if (!typedText) {
      setShowCaret(true);
      setStop(false);
      setAnimate(true);
    }
  };

  const handleClose = () => {
    setIsOpen(false)
    setPayload({})
  }
  
  useEffect(() => {
    let index = 0;
    const text = cities[counter];
    
    if (!stop && animate) {
      const intervalId = setInterval(() => {
        setTypedText(prevTypedText => {
          if (index < text.length) {
            index++;
            return prevTypedText + text[index - 1]; 
          }

          clearInterval(intervalId);

          if (index === text.length) {
            setTimeout(() => {
              if (counter === cities.length - 1) {
                setCounter(0);
              } else {
                setCounter(prevCounter => prevCounter + 1); 
              }
              setTypedText('');
            }, 1000); // Adjust delay before clearing typed text as needed

            return prevTypedText;
          }
        });
      }, 200);

      return () => clearInterval(intervalId);
    }
  }, [cities[counter], stop, animate, counter]);
      
  useEffect(() => {
    if (!stop) {
      const caretIntervalId = setInterval(() => {
        setShowCaret(prevShowCaret => !prevShowCaret);
      }, 500);
      
      return () => clearInterval(caretIntervalId);
    }
  }, [stop]);


  return (
    <>
      <div className="absolute inset-0 opacity-60 z-0 bg-cover bg-center bg-no-repeat lg:bg-cover border-b-2"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6), rgba(255, 192, 203, 0.5)), linear-gradient(to left, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url(${bgimage})`,
          filter: 'brightness(2)'
        }}
      />

      <div className="flex flex-col text-wrap z-0 absolute w-2/3 h-[500px] justify-center left-2 lg:left-10">
        <h2 className="font-bold text-pink-700 text-3xl sm:text-4xl font-serif">Lorem ipsum dolor sit amet consectetur</h2>
        <span className="text-white text-sm font-serif">
          <br/>Pellentesque quis vulputate sapien. Class aptent taciti sociosqu ad litora torquent per
          <br/>conubia nostra, per inceptos himenaeos risus lobortis venenatis tempor rhoncus
          <br/>Proin id magna at massa euismod eleifen
          <br/>
        </span>
        <div className="relative pt-8 w-fit">
          <input 
            type="text" 
            id="textField" 
            name="textField" 
            list="cities"
            className="text-field border-gray-300 text-gray-500 focus:outline-none ring-1 ring-pink-600 focus:ring-2 focus:ring-pink-700 placeholder-gray-400 
            py-2 pl-1 lg:px-2 rounded-md transition duration-300"
            value={trueValue ? trueValue : typedText + (showCaret ? '|' : '')}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <datalist id="cities">
            {cities.map((city, index) => (
              <option value={city} key={index}>
                {city}
              </option>
            ))}
          </datalist>
          <FontAwesomeIcon
            icon={faSignsPost}
            disabled={!trueValue}
            onClick={() => setIsOpen(true)}
            className={`absolute w-7 h-7 text-gray-400 ${!trueValue && 'cursor-not-allowed'} 
                ${trueValue && 'hover:text-pink-500 active:text-pink-900 transition duration-300'}
                inset-y-0 top-9 right-1 bg-white`}
            />

 
          
        </div>
      </div>
      <Modal open={isOpen} onClose={handleClose} city={trueValue} />
    </>
  );
}

export default CarouselComponent;
