import {createArray} from "./utils/createArray.js";
import {shuffleArray} from "./utils/shuffleArray.js";


const createPanel = () => {
    const content = document.querySelector('body')
    content.innerHTML = ''
    const panel = document.createElement('div')
    panel.id = 'panel'
    const numbers = shuffleArray(createArray())
    numbers.forEach(number => {
        const btn = document.createElement('button')
        btn.textContent = number.toString()
        panel.appendChild(btn)
        btn.addEventListener( 'click', () => {
            console.log(`press ${number}`)
            createPanel()
        })
    })
    content.appendChild(panel)
}

createPanel()