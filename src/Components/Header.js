import React from 'react'
import './Header.css'


function Header({humudity, wind, city, cur_temp, cur_tempCond, country}) {
    const day = Date()
    
    return (
        <div className="header">
            <div className="weather">
                <div className='weather__temp'>
                    <div className='wrap-1'>
                        <h1 className='weather_temp'> {cur_temp} </h1>
                        <p className='weather_condition'>{cur_tempCond}</p>
                    </div>
                  
                    <div className='row-2'>
                        <div className='flex-col'>
                            <span className='weather__temp-title'>
                                HUMIDITY
                            </span>
                            <span className='weather__temp-value'>
                               {humudity} %
                            </span>
                        </div>
                        <div className='flex-col'>
                            <span className='weather__temp-title'>
                                WIND
                            </span>
                            <span className='weather__temp-value'>
                                {wind} K/M
                            </span>
                        </div>
                    </div>
                    
                </div>

                <div className='right'>
                    <div className="weather__country">
                        {city.toUpperCase()}, {country}
                    </div>
                    <p className='date mt_small'> {day}</p>
                </div>
            </div>
            <div className="bg_overlay"></div>
        </div>
    )
}

export default Header
