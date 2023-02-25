import { findIcon } from './conditions'

export class Forecast {
  constructor(el) {
    this.el = el
    this.cityElement = el.querySelector('span.city__name')
    this.temperatureElement = el.querySelector('span.temperature__value')
    this.pressureElement = el.querySelector('span.pressure__value')
    this.humidityElement = el.querySelector('span.humidity__value')
    this.windElement = el.querySelector('span.wind-speed__value')
    this.iconElement = el.querySelector('div.weather__icon').querySelector('img')
    this.forecastElements = el.querySelector('ul.weather__forecast').querySelectorAll('li')
    this.closeButton = el.querySelector('.btn--close')
    this.renameButton = el.querySelector('span.btn--icon')

    this.closeButton.addEventListener('click', () => {
      this.el.parentElement.removeChild(this.el)
    })
    this.renameButton.addEventListener('click', () => {
      this.cityElement.textContent = prompt('Podaj nową nazwę dla tej lokalizacji:')
    })
  }

  updateData({ city, temperature, pressure, humidity, wind, condition, timeOfDay }) {
    this.cityElement.textContent = city
    this.temperatureElement.textContent = temperature
    this.pressureElement.textContent = `${pressure}hPa`
    this.humidityElement.textContent = `${humidity}%`
    this.windElement.textContent = `${wind}m/s`
    this.iconElement.src = findIcon(condition, timeOfDay)
  }

  updateForecast(forecastList) {
    this.forecastElements.forEach((element, index) => {
      element.querySelector('.day').textContent = forecastList[index].day
      element.querySelector('.temperature__value').textContent = forecastList[index].temp
      element.querySelector('img').src = findIcon(forecastList[index].condition, 'day')
    })
  }
}
