import {config} from "./APIconfig";
import {getData} from "./app"
import {normalize} from "./helpers"

export {showInput}

const formElement = document.querySelector(".module__form")
let closeButton = formElement.querySelector(".btn--close")

function showInput(e) {
    formElement.hidden = false
    formElement.addEventListener("submit", getInput)
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
        getData(config['url'](config['key'], city, config['days']), rawInput)
    }
}