import React from "react";
import { useState, useEffect } from "react";
import {useLocation} from 'react-router-dom';
import  api from './api/api'


function ItineraryResults({payload}) {


    // const [content, setContent] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [status, setStatus] = useState(null);
    // const [summary, setSummary] = useState(null);
    // const [error, setError] = useState(null);
    // const [show, setShow] = useState(false);

  
    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       setLoading(true)
    //       const response = await api.get('/generate_itinerary', {
    //         params: {
    //           city: location.state.city,
    //           days: location.state.days,
    //           mode: location.state.mode,
    //           view: location.state.scene
    //         },
    //         headers: {
    //           'accept': 'application/json'
    //         }
    //         });
    //         setContent(response.data.Message.itinerary);
    //         setStatus(response.data.Status)
    //         setSummary(response.data.Message.summary)
    //         setLoading(false);
    //     } catch (error) {
    //       setError(error);
    //       setLoading(false);
    //     } finally {
    //       setLoading(false);
    //     }
    //   };
    //   setLoading(false);
    //   fetchData();
    // }, []);
   

    return (
      <div>
        <h1>This is the page for itinerary results</h1>
        
      </div>
    );
    
    
}

export default ItineraryResults