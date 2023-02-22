/*
Parametrized config for fetching
 */
const key = '46192b1a692f4486a0d181847232202 '
let days = 6
let city = "auto:ip"
const url = `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=${days}`


/*
Collecting DOM elements for future use
 */
const body = document.querySelector("body")
const weatherTab = document.querySelector("div.module__weather")
const form = document.querySelector(".module__form")
const addCityButton = document.querySelector("#add-city")


/*
Showing and hiding the form
 */
addCityButton.addEventListener("click", showInput)

function showInput(e) {
    form.hidden = false
    let closeButton = form.querySelector(".btn--close")
    closeButton.addEventListener("click", () => {
        form.hidden = true
    })
}

/*
Weather module as a class
 */
class Forecast {
    constructor(el) {
        this.el = el
        this.city = el.querySelector("span.city__name")
        this.temperature = el.querySelector("span.temperature__value")
        this.pressure = el.querySelector("span.pressure__value")
        this.humidity = el.querySelector("span.humidity__value")
        this.wind = el.querySelector("span.wind-speed__value")
        this.icon = el.querySelector("div.weather__icon").querySelector("img")
        this.forecast = el.querySelector("ul.weather__forecast").querySelectorAll("li")
        this.closeButton = el.querySelector(".btn--close")
        this.closeButton.addEventListener("click", () => {
            this.el.parentElement.removeChild(this.el)
        })
    }

    updateData(city, temp, press, humid, wind, cond, timeOfDay) {
        this.city.textContent = city
        this.temperature.textContent = temp
        this.pressure.textContent = press + "hPa"
        this.humidity.textContent = humid + "%"
        this.wind.textContent = wind + "m/s"
        this.icon.src = findIcon(cond, timeOfDay)
    }

    updateForecast(forecastList) {
        this.forecast.forEach((day, index) => {
            day.querySelector(".day").textContent = forecastList[index]["day"]
            day.querySelector(".temperature__value").textContent = forecastList[index]['temp']
            day.querySelector("img").src = findIcon(forecastList[index]['condition'], "day")
        })
    }
}


/*
Condition codes from weatherapi.com to decide which icon will be used
 */
const findIcon = (code, timeOfDay) => {
    const translator = {
        1000: `clear-${timeOfDay}`,
        1003: `partly-cloudy-${timeOfDay}`,
        1006: `cloudy`,
        1009: `cloudy`,
        1030: `cloudy`,
        1063: `rain`,
        1066: `snow`,
        1069: `sleet`,
        1072: `sleet`,
        1087: `thunderstorm`,
        1114: `snow`,
        1117: `snow`,
        1135: `cloudy`,
        1147: `cloudy`,
        1150: `rain`,
        1153: `rain`,
        1168: `rain`,
        1171: `rain`,
        1180: `rain`,
        1183: `rain`,
        1186: `rain`,
        1189: `rain`,
        1192: `rain`,
        1195: `rain`,
        1198: `rain`,
        1201: `rain`,
        1204: `sleet`,
        1207: `sleet`,
        1210: `snow`,
        1213: `snow`,
        1216: `snow`,
        1219: `snow`,
        1222: `snow`,
        1225: `snow`,
        1237: `snow`,
        1240: `rain`,
        1243: `rain`,
        1246: `rain`,
        1249: `sleet`,
        1252: `sleet`,
        1255: `snow`,
        1258: `snow`,
        1261: `sleet`,
        1264: `sleet`,
        1273: `thunderstorm`,
        1276: `thunderstorm`,
        1279: `thunderstorm`,
        1282: `thunderstorm`,
    }
    return `assets/icons/${translator[code]}.svg`
}


function extractData(data) {
    const city = data['location']['name']
    const time0fDay = dayOrNight(data['location']['localtime'])
    const condition = data['current']['condition']['code']
    const temp = data['current']['temp_c']
    const pressure = data['current']['pressure_mb']
    const humidity = data['current']['humidity']
    const wind = convertWindSpeed(data['current']['wind_kph'])
    const future = futureForecast(data['forecast']['forecastday'].slice(1))

    const weatherTab = document.querySelector("div.module__weather")
    let clonedWeatherTab = weatherTab.cloneNode(true)
    clonedWeatherTab.hidden = false
    weatherTab.parentElement.appendChild(clonedWeatherTab)
    const forecast = new Forecast(clonedWeatherTab)
    forecast.updateData(city, temp, pressure, humidity, wind, condition, time0fDay)
    forecast.updateForecast(future)
}

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s[0].toUpperCase() + s.slice(1)
}

const getWeekday = (date) => {
    return capitalize(new Date(date).toLocaleString('PL', {weekday: 'long'}))
}

const convertWindSpeed = (kph) => {
    return Math.round(kph / 3.6 * 10) / 10
}

const futureForecast = (arr) => {
    return arr.map(day => {
        return {
            day: getWeekday(day['date']),
            temp: day['day']['avgtemp_c'],
            condition: day['day']['condition']['code']
        }
    })
}

const dayOrNight = (date) => {
    let hour = new Date(date).getHours()
    if (6 < hour && hour < 20) {
        return "day"
    } else {
        return "night"
    }
}

(async function getData(url) {
    body.classList.add("loading")
    const response = await fetch(url)
    const data = await response.json()
    body.classList.remove("loading")
    extractData(data)
})(url)

