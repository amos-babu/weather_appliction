import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Searchcity from './Searchcity';
import Weatherdata from './Weatherdata';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}
                &units=metric&appid=223dc3d72ec5e16125cce3b6e11192db`
            );
            setWeatherData(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    const handleInputChange = (e) => {
        setCity(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData();
    };

  return (
    <>
        <Searchcity 
            handleInputChange = { handleInputChange }
            city = { city } 
            handleSubmit = { handleSubmit }
        />
        {weatherData ? (
            <>
                <div className='row '>
                    <h2 className='text-center mb-4'>{weatherData.name}</h2>
                    <Weatherdata weatherData = { weatherData }/>
                </div>     
            </>
        ):(
            <p>Loading Weather Information...</p>
        )}
    </>
  )
}

export default Weather