import {config} from "./APIconfig"
import {showInput} from "./formFunctions"
import {extractData} from "./helpers"

export {getData}


const addCityButton = document.querySelector("#add-city")
addCityButton.addEventListener("click", showInput)


async function getData(url, city) {
    const body = document.querySelector("body")
    body.classList.add("loading")
    const response = await fetch(url)
    const data = await response.json()
    extractData(data, city)
    body.classList.remove("loading")
}

getData(`https://api.weatherapi.com/v1/forecast.json?key=${config['key']}&q=${config['city']}&days=${config['days']}`)

