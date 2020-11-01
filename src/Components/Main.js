import React, {useEffect, useState} from 'react'
import user_pix from '../Assets/user.jpg'
import "./Main.css";
import Header from './Header';
import axios from 'axios';

function Main() {
/*
   
    const [wSpeed, setSpeed] = useState(0);
    const [wIcon, setIcon] = useState('');
        
  */
    const apiKey = '';
    const [wHumidity, setHum] = useState(0)
    const [wCity, setCity] = useState('');
    const [wDeg, setDeg] = useState(0); 
    const [wWind, setWind] = useState(0);
    const [wTemp, setTemp] = useState(0);
    const [wDes, setDes] = useState('');
    const [wCountry, setCountry] = useState('');
    let [query, setQuery] = useState('');         



     useEffect(() => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}`)
        .then(res => {
          const weather_datas = res.data;
          setCity(weather_datas.name);
          setDeg(weather_datas.wind.deg);
          setHum(weather_datas.main.humidity);
          setTemp(weather_datas.main.temp - 273.15);
          setDes(weather_datas.weather.description);
          setCountry(weather_datas.sys.country);
          setWind(weather_datas.wind.speed);
        })
        .catch((err) =>{
            console.log(err); 
        }) 
    },[query]); 

    const getDatas = (e) =>{
      /* setInput(query) */
    }
    
    return (
        <div className='container'>
            <Header 
                humudity = {wHumidity}
                wind={wWind} 
                city={wCity}   
                cur_temp={wTemp.toFixed(2)}
                cur_tempCond = {wDes} 
                country = {wCountry}
            /> 
          <form className='getinput' /* onSubmit={getDatas} */>
                <input type='text' 
                    value= {query}
                    className='getCity'
                    onChange= {(e)=> setQuery(e.target.value)}
                    placeholder='Enter city name'
                />
             {/*    <input 
                    type='submit'
                    value='Search'
                    className='btn submit'
                /> */}
         </form>

        <div className="main">
            <div className="row">
                <div className="twitter-feed ">
                    <div className="flex mb-small">
                        <i className="fab fa-twitter fa-3x"></i>
                        <h3 className="twitter-feed__header">Twitter Feed</h3>
                        <p className="country_hashtag">#Nigeria {wCity}</p>
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
        </div>
    )
}

export default Main
