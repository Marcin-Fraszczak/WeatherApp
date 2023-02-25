import { config } from './APIconfig'
import { getData } from './app'
import { normalize, startLoading, stopLoading } from './helpers'

const formElement = document.querySelector('.module__form')
const inputElement = formElement.querySelector('input')
const closeButton = formElement.querySelector('.btn--close')

export function showInput() {
  formElement.hidden = false
  inputElement.focus()
  formElement.addEventListener('submit', submit)
  closeButton.addEventListener('click', close)
}

async function submit(e) {
  e.preventDefault()
  const rawInput = inputElement.value
  inputElement.value = ''
  if (rawInput) {
    let city = normalize(rawInput)
    startLoading()
    await getData(config.url(city), rawInput)
    stopLoading()
  }
}

function close() {
  inputElement.value = ''
  formElement.hidden = true
  formElement.removeEventListener('submit', submit)
  formElement.removeEventListener('click', close)
}
