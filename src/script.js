import {createArray} from "./utils/createArray.js";
import {shuffleArray} from "./utils/shuffleArray.js";

const array = createArray()
let missed = 3
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
            const shifted = array.shift()
            if (shifted !== number) {
              alert(`you missed, you have ${missed} attemps`)
              missed -= 1
            }
            createPanel()
        })
    })
    content.appendChild(panel)
}

createPanel()