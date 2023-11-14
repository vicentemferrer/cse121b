/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
  return number1 + number2
}

function addNumbers() {
  const add1 = Number(document.querySelector('#add1').value)
  const add2 = Number(document.querySelector('#add2').value)

  document.querySelector('#sum').value = add(add1, add2)
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers)

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
  return number1 - number2
}

const subtractNumbers = function () {
  const subtract1 = Number(document.querySelector('#subtract1').value)
  const subtract2 = Number(document.querySelector('#subtract2').value)

  document.querySelector('#difference').value = subtract(subtract1, subtract2)
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers)

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2

const multiplyNumbers = () => {
  const factor1 = Number(document.querySelector('#factor1').value)
  const factor2 = Number(document.querySelector('#factor2').value)

  document.querySelector('#product').value = multiply(factor1, factor2)
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers)

/* Open Function Use - Divide Numbers */
document.querySelector('#divideNumbers').addEventListener('click', () => {
  const dividend = Number(document.querySelector('#dividend').value)
  const divisor = Number(document.querySelector('#divisor').value)

  document.querySelector('#quotient').value = ((dividend, divisor) => dividend / divisor)(dividend, divisor)
})

/* Decision Structure */
document.getElementById('getTotal').addEventListener('click', () => {
  let subtotal = Number(document.getElementById('subtotal').value)
  const { checked } = document.getElementById('member')
  subtotal *= checked ? 0.85 : 1

  document.getElementById('total').textContent = `$ ${subtotal.toFixed(2)}`
})

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const numbers = [...Array(13).keys()].map(n => n + 1)
document.getElementById('array').textContent += numbers

/* Output Odds Only Array */
const odds = numbers.filter(n => n % 2 === 1)
document.getElementById('odds').textContent += odds

/* Output Evens Only Array */
const evens = numbers.filter(n => n % 2 === 0)
document.getElementById('evens').textContent += evens

/* Output Sum of Org. Array */
const sum = numbers.reduce((acc, n) => acc + n, 0)
document.getElementById('sumOfArray').textContent += sum

/* Output Multiplied by 2 Array */
const multiplied = numbers.map(n => n * 2)
document.getElementById('multiplied').textContent += multiplied

/* Output Sum of Multiplied by 2 Array */
const sum2 = multiplied.reduce((acc, n) => acc + n, 0)
document.getElementById('sumOfMultiplied').textContent += sum2
