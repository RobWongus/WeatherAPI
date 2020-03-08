window.addEventListener('DOMContentLoaded', (event) => {
    const weatherKey = "b2e836d390c1f7505f5a7127639e2867"
    
    const URL = "https://api.openweathermap.org/data/2.5/weather?q=" + search + "&appid=" + key;
    //UV Index//
    const URLUV = "https://api.openweathermap.org/data/2.5/uvi?appid=" + key + "&lat=" + lat + "&lon=" + lon;

    //Current Weather
    const currentWeather = "api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}"

    //Five Day Forecast, Future Forecast
    const futureWeather = "api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}"
});
