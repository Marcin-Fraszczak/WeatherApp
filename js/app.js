/*
If you are copying only .js files, please remember to comment out this line in index.html:
<script src="js/app.js"></script>
Otherwise code will execute twice
 */

import {config} from "./APIconfig"
import {showInput} from "./formFunctions"
import {extractData} from "./helpers"

export {getData}

const body = document.querySelector("body")
const addCityButton = document.querySelector("#add-city")
addCityButton.addEventListener("click", showInput)

async function getData(url, city) {
    body.classList.add("loading")
    try {
        const response = await fetch(url)
        if (!(response.ok && response.status === 200)) {
            throw new Error('Invalid input. Try again with different name.')
        }
        const data = await response.json()
        extractData(data, city)
    } catch (err) {
        alert(err)
    }
    body.classList.remove("loading")
}

getData(config['url'](config['key'], config['city'], config['days']))

