export const shuffleArray = (arr) => {
  const shuffleArray = []
  const count = arr.length
  for (let i = 0; i < count; i++) {
    let n = (Math.trunc(Math.random()*(arr.length - 0)))
    shuffleArray.push(arr[n])
    arr.splice(n, 1)
  }
  return shuffleArray
}