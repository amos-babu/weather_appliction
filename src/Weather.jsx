import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

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
        <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
            <input type="text" 
                className="form-control" 
                placeholder="Enter City Name" 
                value={city} 
                onChange={handleInputChange}
            />
            <button 
                className="btn btn-outline-secondary mx-3" 
                type="submit">Get Weather
            </button>
            </div>
        </form>
        {weatherData ? (
            <>
                <h2 className='text-center mb-4'>{weatherData.name}</h2>
                <p className='text-center mb-4'>Temperature: {weatherData.main.temp}°C</p>
                <p className='text-center mb-4'>Description: {weatherData.weather[0].description}</p>
                <p className='text-center mb-4'>Feels like : {weatherData.main.feels_like}°C</p>
                <p className='text-center mb-4'>Humidity : {weatherData.main.humidity}%</p>
                <p className='text-center mb-4'>Pressure : {weatherData.main.pressure}</p>
                <p className='text-center mb-4'>Wind Speed : {weatherData.wind.speed}m/s</p>
            </>
        ):(
            <p>Loading Weather data...</p>
        )}
    </>
  )
}

export default Weather