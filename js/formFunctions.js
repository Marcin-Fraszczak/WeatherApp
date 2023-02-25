import { config } from './APIconfig'
import { getData } from './app'
import { normalize, load, unload } from './helpers'

const formElement = document.querySelector('.module__form')
const closeButton = formElement.querySelector('.btn--close')
const input = formElement.querySelector('input')

async function submit(e) {
  e.preventDefault()
  const rawInput = input.value
  input.value = ''
  if (rawInput) {
    const city = normalize(rawInput)

    load()
    await getData(config.url(city), rawInput)
    unload()
  }
}

function close() {
  input.value = ''
  formElement.hidden = true
  formElement.removeEventListener('submit', submit)
}

function showInput() {
  formElement.hidden = false
  formElement.addEventListener('submit', submit)
  closeButton.addEventListener('click', close)
}

export { showInput }
