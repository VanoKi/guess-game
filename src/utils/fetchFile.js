// const data = fetch('http://www.codewars.com/api/v1/users/VanoKi/code-challenges/completed?page=0')
//   .then(r => r.json())
//
// console.log(data[0])

const urlPage = 'http://www.codewars.com/api/v1/users/VanoKi/code-challenges/completed?page=0'
const urlSlug = 'https://www.codewars.com/kata/multiply/sentence-calculator'

async function run(url) {
  const res = await fetch(url)
  // const data = await res.json()
  const data = await res
  console.log(data)
  return data
}
run(urlSlug)

