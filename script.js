const createArray = () => {
    const arr= []
    for (let i = 1; i < 10; i++) {
        arr.push(i)
    }
    return arr
}

const shuffleArray = (arr) => {
    const shuffleArray = []
    const count = arr.length
    for (let i = 0; i < count; i++) {
        let n = (Math.trunc(Math.random()*(arr.length - 0)))
        shuffleArray.push(arr[n])
        arr.splice(n, 1)
    }
    return shuffleArray
}

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
        })
    })
    content.appendChild(panel)
}

createPanel()