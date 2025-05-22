import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTemperatureHalf } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { FaAudioDescription } from "react-icons/fa6";
import { TbAirConditioning } from "react-icons/tb";
import { GrAtm } from "react-icons/gr";
import { FaWind } from "react-icons/fa6";

const Weatherdata = ({ weatherData }) => {
  return (
    <>
        <div className='col'>
            <div className="card mb-3 bg-info">
                <div className="card-body">
                    <div className='d-flex'>
                        <FaTemperatureHalf className='mx-3' size={60}/>
                        <p className="card-text">Temperature</p>
                    </div>
                    <h3 className="card-title text-center">{weatherData.main.temp}°C</h3>
                </div>
            </div>
            <div className="card mb-3 bg-info">
                <div className="card-body">
                    <div className='d-flex'>
                        <FaAudioDescription className='mx-3' size={60}/>
                        <p className="card-text">Description</p>
                    </div>
                    <h3 className="card-title text-center">{weatherData.weather[0].description}</h3>
                </div>
            </div>
            <div className="card bg-info">
                <div className="card-body">
                    <div className='d-flex'>
                        <TbAirConditioning className='mx-3' size={60}/>
                        <p className="card-text">Feels like</p>
                    </div>
                    <h3 className="card-title text-center">{weatherData.main.feels_like}°C</h3>
                </div>
            </div>
            
        </div>
        <div className='col'>
            <div className="card mb-3 bg-info">
                <div className="card-body">
                    <div className='d-flex'>
                        <WiHumidity className='mx-3' size={60}/> 
                        <p className="card-text">Humidity</p>
                    </div>
                    <h3 className="card-title text-center">{weatherData.main.humidity}%</h3>
                </div>
            </div>
            <div className="card mb-3 bg-info">
                <div className="card-body">
                    <div className='d-flex'>
                        <GrAtm className='mx-3' size={60}/> 
                        <p className="card-text">Pressure</p>
                    </div>
                    <h3 className="card-title text-center">{weatherData.main.pressure}</h3>
                </div>
            </div>
            <div className="card bg-info">
                <div className="card-body">
                    <div className='d-flex'>
                        <FaWind className='mx-3' size={60}/> 
                        <p className="card-text">Wind Speed</p>
                    </div>
                    <h3 className="card-title text-center">{weatherData.wind.speed}m/s</h3>
                </div>
            </div>
        </div>
    </>
  )
}

export default Weatherdata