import {config} from "./APIconfig";
import {getData} from "./app"
import {normalize} from "./helpers"

export {showInput}

function showInput(e) {
    const formElement = document.querySelector(".module__form")
    formElement.hidden = false
    formElement.addEventListener("submit", getInput)
    let closeButton = formElement.querySelector(".btn--close")
    closeButton.addEventListener("click", (e) => {
        formElement.querySelector("input").value = ""
        formElement.hidden = true
    })
}

function getInput(e) {
    e.preventDefault()
    const inputElement = e.target.querySelector("input")
    const rawInput = inputElement.value
    inputElement.value = ""
    if (rawInput) {
        let city = normalize(rawInput)
        getData(`https://api.weatherapi.com/v1/forecast.json?key=${config['key']}&q=${city}&days=${config['days']}`, rawInput)
    }
}