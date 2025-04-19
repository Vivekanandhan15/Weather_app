const apikey = "9a30fb333626c0c637fbcde41c2e123a"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchbox = document.querySelector(".search input")
const searchbutton = document.querySelector(".search button")
const weathericon = document.querySelector(".weathering")

async function checkweather(city){
    const response = await fetch(apiurl + city +`&appid=${apikey}`);
    var data = await response.json();

   

    console.log(data)

    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = data.main.temp + "°c"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = data.wind.speed   + "km/h"

    if (data.weather[0].main == "Clouds"){
        weathericon.src = "/img/cloudy.png" 
    }
      else if (data.weather[0].main == "Clear"){
        weathericon.src = "/img/clear.png";
    }
    else if (data.weather[0].main == "Rain"){
        weathericon.src = "/img/rain.png";
    }
    else if (data.weather[0].main == "Drizzle"){
        weathericon.src = "/img/chill.png";
    }
    else if (data.weather[0].main == "Mist"){
        weathericon.src = "/img/chill.png";
    }
document.querySelector(".weather").style.display = "block"
}
searchbutton.addEventListener("click", ()=>{
    checkweather(searchbox.value)
})


