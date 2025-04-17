import React from 'react'
import './Weather.css'
import search from '../assets/search.png'

const Weather = () => {
  return (
    <div className='weather'>
        <div className='search-bar'>
            <input type="text" placeholder='search for a city'/>
            <img src={search} alt="Search icon"/>
        </div>
    </div>
  )
}

export default Weather
