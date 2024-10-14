const API_KEY = "07e6b59b8edaca484896d83e4c9170fa"
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const search_Box = document.querySelector('#inputText')
const search_Btn = document.querySelector('#myBtn')
const weather_Icon = document.querySelector('.weather_icon')
const weather = document.querySelector('.weather')
const error = document.querySelector('.error')

search_Btn.addEventListener('click', sendCity)

async function checkWeather(city){
    const response = await fetch(API_URL + city +`&appid=${API_KEY}`)
    let data = await response.json()
    console.log(data)
    try{
        error.style = `display:none;`
        document.querySelector('.city').innerHTML = data.name
        document.querySelector('.temp').innerHTML = `${parseInt(data.main.temp)}°c`
        document.querySelector('.humidity').innerHTML = `%${data.main.humidity}`
        document.querySelector('.wind').innerHTML = `${data.wind.speed} km/h`
        weather_Icon.src = `images/${data.weather[0].main}.png`
        weather.style = `display: contents;`

    }catch{
        error.style = `display:flex;`
        weather.style = `display: none;`
    }
}

function sendCity(){
    if(!search_Box.value == ""){
        checkWeather(search_Box.value)
        search_Box.value = ""
    }else{
        alert("Lütfen bir ülke/şehir giriniz!")
    }
}



// weather_Icon.src = "images/clear.png"
