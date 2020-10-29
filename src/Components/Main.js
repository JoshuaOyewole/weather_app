import React, {useEffect, useState} from 'react'
import user_pix from '../Assets/user.jpg'
import "./Main.css";
import Header from './Header';
import axios from 'axios';

function Main() {

    const apiKey = '5440e3c8bc975f3bcc4b3fe3f2924eb4';
    const [datas, setData] = useState({})
    const [humidity, setHum] = useState('')
    const [wind, setWind] = useState('');
    const [city, setCity] = useState('');
    const [temp, setTemp] = useState('');
    const [weatherDes, setWeatherDes] = useState('')
    let [query, setQuery] = useState('');


   /*  res.weather.main = 'Clouds'
    res.weather.description = 'Overcast clouds'
    res.weather.icon = 04d
    res.main.temp = 306
    res.main.humidity = 47
    res.wind.deg = 67
    res.wind.speed = 0.6
    res.sys.country = 'NG'
    res.name = 'Auchi'
    
    
     humidity= {datas.main.humidity}
                wind={datas.wind.deg} 
                city={datas.name} 
                cur_temp={datas.main.temp} 
                cur_tempCond = {datas.weather.description} 

                 ${query} {apiKey}
                */
              



    useEffect(() => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=auchi&appid=${apiKey}`)
        .then(res => {
          const weather_datas = res.data;
          setData(weather_datas)
         
        })
        .catch((err) =>{
            console.log(err); 
        }) 
    },[query]);

    const getDatas = (e) =>{
        console.log(datas);  
    }


    return (
        <div className='container'>
            <Header 
                humidity= {humidity}
                wind={wind} 
                city={city} 
                cur_temp={temp} 
                cur_tempCond = {weatherDes} 
            />

        <div className="main">
            <div className="row">
                <div className="twitter-feed ">
                    <div className="flex mb-small">
                        <i className="fab fa-twitter fa-3x"></i>
                        <h3 className="twitter-feed__header">Twitter Feed</h3>
                        <p className="country_hashtag">#Nigeria</p>
                    </div>
                    <div className="tweet">
                        <img className="user_pix" src={user_pix} alt="User profile pixs" />
                        <p className='user_tweet'>
                            Don't forget your sunscreen tomorrow!
                        </p>
                    </div>
                    <div className="tweet">
                        <img className="user_pix" src={user_pix} alt="User profile pixs" />
                        <p className='user_tweet'>
                            Amazing weather in Nigeria!
                        </p>
                    </div>
                    <div className="pagination"> NEXT &rarr;</div>
                </div>
                <div className="right">
                    <div className='week_days'>
                        <div className='days'>
                            <h4>MON</h4>
                            <img src={user_pix} alt='' className='condition_img' />
                            <p className='temp'>
                                9
                            </p>
                            <p className='condition'>RAINING</p>
                        </div>
                        <div className='days'>
                            <h4>TUE</h4>
                            <img src={user_pix} alt='' className='condition_img' />
                            <p className='temp'>
                                15
                            </p>
                            <p className='condition'>SUNNY</p>
                        </div>
                        <div className='days'>
                            <h4>WED</h4>
                            <img src={user_pix} alt='' className='condition_img' />
                            <p className='temp'>
                                11
                            </p>
                            <p className='condition'>CLOUDY</p>
                        </div>
                        <div className='days'>
                            <h4>THU</h4>
                            <img src={user_pix} alt='' className='condition_img' />
                            <p className='temp'>
                                7
                            </p>
                            <p className='condition'>STORM</p>
                        </div>
                        <div className='days'>
                            <h4>FRI</h4>
                            <img src={user_pix} alt='' className='condition_img' />
                            <p className='temp'>
                                18
                            </p>
                            <p className='condition'>SUNNY</p>
                        </div>
                        <div className='days'>
                            <h4>MON</h4>
                            <img src={user_pix} alt='' className='condition_img' />
                            <p className='temp'>
                                23
                            </p>
                            <p className='condition'>RAINING</p>
                        </div>
                        <div className='days'>
                            <h4>MON</h4>
                            <img src={user_pix} alt='' className='condition_img' />
                            <p className='temp'>
                                9
                            </p>
                            <p className='condition'>RAINING</p>
                        </div>
                    </div>
                </div>
                </div>          
            </div>
                <form onSubmit={getDatas}>
                    <input type='text' 
                            value= {query}
                            className='getCity'
                            onChange= {(e)=> setQuery(e.target.value)}
                            placeholder='Enter city name'
                    />
                </form>

        </div>
    )
}

export default Main
