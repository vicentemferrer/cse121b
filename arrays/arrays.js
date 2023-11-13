const steps = ['one', 'two', 'three']
const stepsHTML = steps.map(step => `<li>${step}</li>`)
document.getElementById('myList').innerHTML = stepsHTML.join('')

const grades = ['A', 'B', 'A']
const gpaPoints = grades.map(grade => grade === 'A' ? 4 : grade === 'B' ? 3 : -1)

const gpaTotal = gpaPoints.reduce((acc, gpa) => acc + gpa, 0) / gpaPoints.length

const rawFruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape']
const filteredFruits = rawFruits.filter(fruit => fruit.length >= 6)

const numbers = [12, 34, 21, 54]
const luckyNumber = 21
const index = numbers.indexOf(luckyNumber)

console.log(gpaPoints)
console.log(gpaTotal)
console.log(filteredFruits)
console.log(index)
