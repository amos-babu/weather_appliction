import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Searchcity = ({ handleSubmit, city, handleInputChange }) => {
  return (
    <>
        <form onSubmit={handleSubmit}>
            <div className="d-flex mb-3">
            <input type="text" 
                className="form-control" 
                placeholder="Enter City Name" 
                value={city} 
                onChange={ handleInputChange }
            />
            <button 
                className="btn btn-info mx-3" 
                type="submit">Get Weather
            </button>
            </div>
        </form>
    </>
  )
}

export default Searchcity