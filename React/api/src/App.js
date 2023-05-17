import React, { useState, useEffect } from 'react'

function App() {
  const cityValue= 'seoul';
  const key = '34bc9f0e13f7fdd3adac28b4f182d8ad'

  const [apiValue, setApiValue] = useState('')
  const [loading, setLoading] = useState(true)

  const getWeather = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}`)
    const result = await response.json()
    setApiValue(result)
    setLoading(false)
    console.log(result);
  }

  useEffect(() => {
    getWeather();
  },[])

  // 날씨 이름 : name
  // 날씨 그림 : weather[0].icon
  // 날씨 설명 : weather[0].description
  // 날씨 온도(최고/최저) : main.temp / main.temp_max / main.temp_min

  return (
    <div className="today-weather">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1>Now</h1>
          <h1>{apiValue.name}</h1>
          <h2>
            <img src={`https://openweathermap.org/img/wn/${apiValue.weather[0].icon}.png`} alt="" />
          </h2>
          <h2>{apiValue.weather[0].description}</h2>
          <h2>{apiValue.main.temp}</h2>
          <h3>
            최고:{apiValue.main.temp_max} | 최저:{apiValue.main.temp_min}
          </h3>
        </>
      )}
    </div>
  );
}

export default App