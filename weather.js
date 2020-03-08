window.addEventListener('DOMContentLoaded', (event) => {
    let button = document.getElementById("citysearch");
    let cityEntry = document.getElementsByClassName("form-control");
    const key = "b2e836d390c1f7505f5a7127639e2867";
    const form = document.getElementById("forminput");
    //Current Weather
    const weatherUrl = "http://api.openweathermap.org/data/2.5/forecast?q={city name}&appid={key}";
    //UV Index//
    const URLUV = "http://api.openweathermap.org/data/2.5/uvi?appid={appid}&lat={lat}&lon={lon}";
    
    
    //Five Day Forecast, Future Forecast
    const futureWeather = "api.openweathermap.org/data/2.5/forecast?q={city name}&appid={key}"
    // function displayWeather() {
    //     document.getElementById(citySearch) .click
        
    // }

    function clickMe() {
        document.getElementById("clickMe").innerHTML=cityList
        console.log(cityList)
    }
    function addItem(){
        var li = document.createElement("LI");  
        var input = document.getElementById("add");
        li.innerHTML = input.value;
        input.value = "";
        document.getElementById("cityList").appendChild(li);
    }
    // const weather = {
    //     temperature : {
    //         value: ,
    //         unit : "celsius"
    //         humidity :
    //         windspeed
    //         uvindex
    //     },
    //     decsription : ""
    //     iconId : ""
    //     city : "",
    //     country : ""
    // }
    
    // citySearch.addEventListener("click", clickButton)
    
    
    
    // function clickButton(event) {
    //     let searchBar = event.target.previousElementSibling.value
    //     let node = document.createElement("list-group");                 // Create a <li> node
    //     let textnode = document.createTextNode("");         // Create a text node
    //     node.appendChild(textnode);                              // Append the text to <li>
    //     document.getElementsByClassName("myList").appendChild(node);
    //     event.preventDefault();
        
        
    // }
    
});
