import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import GenItinerary from './GenItinerary';
import ItineraryResults from './ItineraryResults';
import { MyContext } from './context/store';
import { useContext, useEffect } from 'react';


function CustomTabPanel(props) {

  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div className='px-1 py-4'>
          {children}
        </div>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({city}) {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //Payload
  const { payload, setPayload } = useContext(MyContext);

  useEffect(() => {
    console.log(payload);
  }, [payload]);

  return (
    <div className="w-full">
      <div className="">
        <Tabs value={value} onChange={handleChange}
            indicatorColor={null}
            >
          <Tab 
            label={<span 
                className={`font-serif ${value === 0 ? 'text-pink-600' : 'text-gray-600'}`}>Itinerary</span>}
            {...a11yProps(0)} />
          <Tab
            label={<span 
                className={`font-serif ${value === 1 ? 'text-pink-600' : 'text-gray-600'}`}>Hotels</span>}
            {...a11yProps(1)} />
          <Tab
          label={<span 
                className={`font-serif ${value === 2 ? 'text-pink-600' : 'text-gray-600'}`}>Restaurants</span>}
            {...a11yProps(2)} />
        </Tabs>
      </div>
      <CustomTabPanel value={value} index={0}>
        { Object.keys(payload).length === 0  ? <GenItinerary defaultCity={city} /> 
          : <ItineraryResults /> }  
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Coming Soon
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Coming Soon
      </CustomTabPanel>
    </div>
  );
}
