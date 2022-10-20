let now = new Date();
let Day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sanday"
];


function formatDayTime(){
    let DayNow= now.getDay();
    let hoursNow= now.getHours();
    if (hoursNow<10){hoursNow=`0${hoursNow}`;}
    let minutesNow= now.getMinutes();
    if(minutesNow<10){minutesNow=`0${minutesNow}`;}
    document.querySelector("#timeType").innerHTML=
    Day[DayNow]+" "+" "+hoursNow+" "+":"+" "+minutesNow; 
}
formatDayTime();

function weather(response){
  //2 вар-т  //  document.querySelector("#humidityNow").innerHTML=`${response.data.main.humidity} %`;

     //let temperatureNow =Math.round(response.data.main.temp);
     document.querySelector("h3").innerHTML=`${Math.round(response.data.main.temp)}℃`;
    
      let humidityElement= document.querySelector("#humidityNow");
     let windElement= document.querySelector("#windNow");
     let iconElement=document.querySelector("#icon");
      humidityElement.innerHTML=`humidity: ${response.data.main.humidity} %`;
      
     windElement.innerHTML=`wind: ${Math.round(response.data.wind.speed)} km/h`;
     iconElement.setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
     iconElement.setAttribute("alt",response.data.weather[0].description); 
     }


function showWeather(event){
    event.preventDefault();
    let cityIn= document.querySelector("#inputCity").value;
    document.querySelector("h2").innerHTML=cityIn.toUpperCase();
    let apiKey = "bc2cd97eaa209e7d22d8f3c84081655f";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityIn}&appid=${apiKey}&&units=metric`;
    axios.get(url).then(weather);
   
}
let cityForm=document.querySelector("#city-form");
cityForm.addEventListener("submit",showWeather);




// function displayForecast(response) {
//     let forecast=response.data.daily ;
//    let forecastHTML=`<div class="row">`;
//     forecast.forEach.function(forecastDay,index); { 
//        if(index < 6){forecastHTML=forecastHTML+
//        `<div class="col-2"><div class="weather-forecast-date">${formatDay(forecastDay.dt)}</div>
//    }
// <img src="http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png"alt="" width="42"/>   
// <div class="weatherForecast" >
// <span class="weatherForecast-temperature-max">${Math.round(forecastDay.temp.max)}℃ </span>
// <span class="weatherForecast-temperature-min">${Math.round(forecastDay.temp.min)}℃ </span>
// </div>
// </div>
// `
// ;
// }
// let apiKey = "bc2cd97eaa209e7d22d8f3c84081655f";
// let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityIn}&appid=${apiKey}&&units=metric`;
// axios.get(url).then(displayForecast);
// } ;
//  forecastHTML=forecastHTML+`</div>`;

//  let forecastElement = document.getElementByID('#days');
//  forecastElement.innerHTML=forecastHTML;