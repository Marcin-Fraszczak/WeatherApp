/* functions to help with data manipulation */
import {Forecast} from "./forecastClass";

export {normalize, extractData}


function extractData(data, rawCity) {
    let city = data['location']['name']
    city = checkSimilarity(city, rawCity)
    const time0fDay = dayOrNight(data['location']['localtime'])
    const condition = data['current']['condition']['code']
    const temp = data['current']['temp_c']
    const pressure = data['current']['pressure_mb']
    const humidity = data['current']['humidity']
    const wind = convertWindSpeed(data['current']['wind_kph'])
    const future = futureForecast(data['forecast']['forecastday'].slice(1))

    const weatherTab = document.querySelector("div.module__weather")
    let clonedWeatherTab = weatherTab.cloneNode(true)
    weatherTab.parentElement.appendChild(clonedWeatherTab)
    const forecast = new Forecast(clonedWeatherTab)
    forecast.updateData(city, temp, pressure, humidity, wind, condition, time0fDay)
    forecast.updateForecast(future)
    clonedWeatherTab.hidden = false
}

const checkSimilarity = (city, rawCity) => {
    if (!rawCity) {
        return city
    } else if (city.toLowerCase() === normalize(rawCity).toLowerCase()) {
        return capitalize(rawCity)
    } else {
        return city
    }
}

const normalize = (input) => {
    let result = input.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    result = result.replace(/\u0142/g, "l")
    return result
}

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    let result = s.split(" ").map(word => {
        return word[0].toUpperCase() + word.slice(1)
    })
    return result.join(" ")
}

const dayOrNight = (date) => {
    let hour = new Date(date).getHours()
    if (6 < hour && hour < 20) {
        return "day"
    } else {
        return "night"
    }
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

const getWeekday = (date) => {
    return capitalize(new Date(date).toLocaleString('PL', {weekday: 'long'}))
}
