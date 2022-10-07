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

function showWeather(event){
    event.preventDefaul();
    let cityIn= document.querySelector("#inputCity").value;
    document.querySelector("#cityType").innerHTML=cityIn.toUpperCase();
    let apiKey = "8161b4309ee03faae957729ba7104797";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityIn}&appid=${apiKey}&&units=metric`;
    axios.get(url).then(weather);
}
let cityForm=document.querySelector("#city-form");
cityForm.addEventListener("submit",showWeather);