/* functions to help with data manipulation */
import { Forecast } from './forecastClass'

export { normalize, extractData }

const weatherTab = document.querySelector('div.module__weather')
const body = document.querySelector('body')

const futureForecast = (arr) =>
  arr.map((el) => ({
    day: getWeekday(el.date),
    temp: el.day.avgtemp_c,
    condition: el.day.condition.code
  }))

function extractData(data, rawCity) {
  console.log('rawCity:', rawCity)
  console.log('data:', data)

  localStorage.setItem('marcin', JSON.stringify({ [data.location.name]: data }))
  let city = data['location']['name']
  city = checkSimilarity(city, rawCity)
  const timeOfDay = dayOrNight(data['location']['localtime'])
  const condition = data['current']['condition']['code']
  const temp = data['current']['temp_c']
  const pressure = data['current']['pressure_mb']
  const humidity = data['current']['humidity']
  const wind = convertWindSpeed(data['current']['wind_kph'])
  const future = futureForecast(data.forecast.forecastday.slice(1))

  let clonedWeatherTab = weatherTab.cloneNode(true)
  weatherTab.parentElement.appendChild(clonedWeatherTab)
  const forecast = new Forecast(clonedWeatherTab)
  forecast.updateData({ pressure, temp, city, humidity, wind, condition, timeOfDay })
  forecast.updateForecast(future)
  clonedWeatherTab.hidden = false
}

const checkSimilarity = (city, rawCity) => {
  if (!rawCity) {
    return city
  } else if (city.toLowerCase() === normalize(rawCity).toLowerCase()) {
    return capitalize(rawCity)
  }

  return city
}

const normalize = (value) => {
  let result = value.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  return result.replace(/\u0142/g, 'l')
}

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  let result = s.split(' ').map((word) => {
    return word[0].toUpperCase() + word.slice(1)
  })
  return result.join(' ')
}

const dayOrNight = (date) => {
  let hour = new Date(date).getHours()
  if (6 < hour && hour < 20) {
    return 'day'
  } else {
    return 'night'
  }
}

const convertWindSpeed = (kph) => Math.round((kph / 3.6) * 10) / 10

const getWeekday = (date) => capitalize(new Date(date).toLocaleString('PL', { weekday: 'long' }))

export const load = () => body.classList.add('loading')
export const unload = () => body.classList.remove('loading')
