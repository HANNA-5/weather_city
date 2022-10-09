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


function formatDay(){
    let DayNow= now.getDay();
    let hoursNow= now.getHours();
    let minutesNow= now.getMinutes();
    document.querySelector("#timeType").innerHTML=
    Day[DayNow]+" "+" "+hoursNow+" "+":"+" "+minutesNow; 
}
formatDay();

function weather(response){
  //2 вар-т  //  document.querySelector("#humidityNow").innerHTML=`${response.data.main.humidity} %`;

     //let temperatureNow =Math.round(response.data.main.temp);
     document.querySelector("h3").innerHTML=`${Math.round(response.data.main.temp)}℃`;
    
      let humidityElement= document.querySelector("#humidityNow");
     let windElement= document.querySelector("#windNow");
     let iconElement=document.querySelector("#icon");
      humidityElement.innerHTML=`HUMIDITY:${response.data.main.humidity} %`;
      
     windElement.innerHTML=`WIND:${Math.round(response.data.wind.speed)} km/h`;
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