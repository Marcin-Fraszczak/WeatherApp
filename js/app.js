/*
If you are copying only .js files, please remember to comment out this line in index.html:
<script src="js/app.js"></script>
Otherwise code will execute twice
 */
import { config } from './APIconfig'
import { showInput } from './formFunctions'
import { extractData, startLoading, stopLoading } from './helpers'

const addCityButton = document.querySelector('#add-city')
addCityButton.addEventListener('click', showInput)

export async function getData(url, city) {
  try {
    const response = await fetch(url)
    if (!(response.ok && response.status === 200)) {
      throw new Error('Niepoprawna nazwa. Spróbuj jeszcze raz.')
    }
    const data = await response.json()
    extractData(data, city)
  } catch (err) {
    alert(err)
  }
}

const initialLoad = async () => {
  startLoading()
  await getData(config.url())
  stopLoading()
}

initialLoad()
