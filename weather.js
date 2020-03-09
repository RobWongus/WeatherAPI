window.addEventListener('DOMContentLoaded', (event) => {
    
    let button = document.getElementById("citysearch");
    let cityEntry = document.getElementsByClassName("form-control");
    const key = "b2e836d390c1f7505f5a7127639e2867";
    const form = document.getElementById("weatherInput");
    //Current Weather
    const weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid={key}";
    //UV Index//
    const URLUV = "https://api.openweathermap.org/data/2.5/uvi?appid={appid}&lat={lat}&lon={lon}";
    
    
    //Five Day Forecast, Future Forecast
    const futureWeather = "api.openweathermap.org/data/2.5/forecast?q={city name}&appid={key}"
    // function displayWeather() {
    //     document.getElementById(citySearch) .click
        
    // }

    
       button.addEventListener("click", function(event){
           event.preventDefault()
           addItem();
           weatherSearch();
           document.getElementById("btnAdd").value = ""
        })
    
           function addItem(){
           let list = document.createElement("li");
           list.classList.add("list-group-item");
        
    
           let cityList = document.getElementById("cityList");
           let searchText = document.getElementById("btnAdd").value;
    
           list.textContent = searchText;
           cityList.append(list);

        
           }

        function weatherSearch(){
           const weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + "Randallstown" + "&appid=" + key;

        $.ajax({
            url: weatherUrl,
            method: "GET"
       })

           .then(function(response) {
            let location = $("#city");
           location.text(response.name);
           console.log(response);
           })

         }


         let citySearch = document.getElementById().value
         
         

    // let todayDate = moment.unix(response.dt).format("MMMM Do, YYYY");

    // let today = $("#today");
    // today.text(todayDate)

    // let iconToday = $("#weatherIcon");
    // let getIcon = response.weather[0].icon;

    // let iconImage = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + getIcon + "@2x.png");
    // iconToday.append(iconImage);

    // // kelvin to farenheit conversion
    // let temp = $("#temperature");
    // let tempConvert = (((response.main.temp - 273.15) * (9 / 5)) + 32);

    // temp.text("Temperature: " + tempConvert.toFixed(1) + "°F");

    // let humidity = $("#humidity");
    // humidity.text("Humidity: " + response.main.humidity + "%");

    // let windSpeed = $("#windSpeed");
    // windSpeed.text("Wind Speed: " + response.wind.speed + " MPH");

    // //generate lon and lat for uv index pull
    // let lon = response.coord.lon;
    // let lat = response.coord.lat;

    //     weather ({
    //     "events": [
    //       {
    //         "temperature": 
    //         "unit": celsius
    //         "humidity" : 
    //         "windspeed" :
    //         "uvindex" ;
    //       },
    //       {
    //       "description" :
    //       "iconId" :
    //       "city" :
    //       "country" :
    //       }
    //     ]
        
    // })

    


   
});
