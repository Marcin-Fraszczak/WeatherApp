/* functions to help with data manipulation */
import { Forecast } from './forecastClass'

const body = document.querySelector('body')
const weatherTab = body.querySelector('div.module__weather')

export function extractData(data, rawCity) {
  let city = data.location.name
  city = checkSimilarity(city, rawCity)
  const timeOfDay = dayOrNight(data.location.localtime)
  const condition = data.current.condition.code
  const temperature = data.current.temp_c
  const pressure = data.current.pressure_mb
  const humidity = data.current.humidity
  const wind = convertWindSpeed(data.current.wind_kph)
  const future = futureForecast(data.forecast.forecastday.slice(1))

  let clonedWeatherTab = weatherTab.cloneNode(true)
  weatherTab.parentElement.appendChild(clonedWeatherTab)
  const forecast = new Forecast(clonedWeatherTab)
  forecast.updateData({ city, temperature, pressure, humidity, wind, condition, timeOfDay })
  forecast.updateForecast(future)
  clonedWeatherTab.hidden = false
}

const checkSimilarity = (city, rawCity) => {
  if (rawCity && city.toLowerCase() === normalize(rawCity).toLowerCase()) {
    return capitalize(rawCity)
  }
  return city
}

export const normalize = (input) => {
  let result = input.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  result = result.replace(/\u0142/g, 'l')
  return result
}

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  const result = s.split(' ').map((word) => {
    return word[0].toUpperCase() + word.slice(1)
  })
  return result.join(' ')
}

const dayOrNight = (date) => {
  let hour = new Date(date).getHours()
  if (6 < hour && hour < 20) {
    return 'day'
  }
  return 'night'
}

const convertWindSpeed = (kph) => Math.round((kph / 3.6) * 10) / 10

const futureForecast = (arr) =>
  arr.map((day) => {
    return {
      day: getWeekday(day['date']),
      temp: day['day']['avgtemp_c'],
      condition: day['day']['condition']['code']
    }
  })

const getWeekday = (date) => capitalize(new Date(date).toLocaleString('PL', { weekday: 'long' }))

export const startLoading = () => body.classList.add('loading')
export const stopLoading = () => body.classList.remove('loading')
