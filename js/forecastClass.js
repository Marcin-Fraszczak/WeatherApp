import {findIcon} from "./conditions";

export class Forecast {
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
        this.rewriteButton = el.querySelector("span.btn--icon")
        this.rewriteButton.addEventListener("click", () => {
            this.city.textContent = prompt("Podaj nową nazwę dla tej lokalizacji:")
        })
        // this.rewriteButton.addEventListener("click", this.rewrite)
    }

    rewrite() {
        this.city.textContent = prompt("Podaj nową nazwę dla tej lokalizacji:")
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