const createArray = () => {
    const arr= []
    for (let i = 1; i < 10; i++) {
        arr.push(i)
    }
    return arr
}

const arr = createArray()
console.log(Math.trunc(Math.random()*(arr.length - 0)))