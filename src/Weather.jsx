import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Searchcity from './Searchcity';
import { FaTemperatureHalf } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { FaAudioDescription } from "react-icons/fa6";
import { TbAirConditioning } from "react-icons/tb";
import { GrAtm } from "react-icons/gr";
import { FaWind } from "react-icons/fa6";

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
                    <div className='col'>
                        <div class="card">
                            <div className="card-body">
                                <div className='d-flex'>
                                    <FaTemperatureHalf size={60}/>
                                    <p className="card-text">Temperature</p>
                                </div>
                                <h3 className="card-title text-center">{weatherData.main.temp}°C</h3>
                            </div>
                        </div>
                        <div class="card">
                            <div className="card-body">
                                <div className='d-flex'>
                                    <FaAudioDescription size={60}/>
                                    <p className="card-text">Description</p>
                                </div>
                                <h3 className="card-title text-center">{weatherData.weather[0].description}</h3>
                            </div>
                        </div>
                        <div class="card">
                            <div className="card-body">
                                <div className='d-flex'>
                                    <TbAirConditioning size={60}/>
                                    <p className="card-text">Feels like</p>
                                </div>
                                <h3 className="card-title text-center">{weatherData.main.feels_like}°C</h3>
                            </div>
                        </div>
                        
                    </div>
                    <div className='col'>
                        <div class="card">
                            <div className="card-body">
                                <div className='d-flex'>
                                    <WiHumidity size={60}/> 
                                    <p className="card-text">Humidity</p>
                                </div>
                                <h3 className="card-title text-center">{weatherData.main.humidity}%</h3>
                            </div>
                        </div>
                        <div class="card">
                            <div className="card-body">
                                <div className='d-flex'>
                                    <GrAtm size={60}/> 
                                    <p className="card-text">Pressure</p>
                                </div>
                                <h3 className="card-title text-center">{weatherData.main.pressure}</h3>
                            </div>
                        </div>
                        <div class="card">
                            <div className="card-body">
                                <div className='d-flex'>
                                    <FaWind size={60}/> 
                                    <p className="card-text">Wind Speed</p>
                                </div>
                                <h3 className="card-title text-center">{weatherData.wind.speed}m/s</h3>
                            </div>
                        </div>
                    </div>
                </div>     
            </>
        ):(
            <p>Loading Weather Information...</p>
        )}
    </>
  )
}

export default Weather