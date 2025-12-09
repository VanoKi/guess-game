import {createArray} from "./utils/createArray.js";
import {shuffleArray} from "./utils/shuffleArray.js";

const array = createArray()
let missed = 2

const createPanel = () => {
    const content = document.querySelector('#container')
    content.innerHTML = ''
    const panel = document.createElement('div')
    panel.id = 'panel'
    const numbers = shuffleArray(createArray())
    numbers.forEach(number => {
        const btn = document.createElement('button')
        btn.textContent = number.toString()
        panel.appendChild(btn)
      btn.addEventListener('click', () => {
        const expected = array[0];
        if (number !== expected) {
          missed -= 1;
          if (missed <= 0) {
            alert('You failed the test!');
            return;
          } else {
            alert(`You missed, you have ${missed} attempts left`);
          }
        } else {
          array.shift();
          if (array.length === 0) {
            alert('You passed the test!');
            return;
          }
        }
        createPanel();
      });
    })
    content.appendChild(panel)
}

createPanel()