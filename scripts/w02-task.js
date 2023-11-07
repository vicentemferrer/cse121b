/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Vicente Maximiliano Ferrer Valdés'
const currentYear = new Date().getUTCFullYear()
const profilePicture = 'images/profile.jpg'

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name')
const foodElement = document.getElementById('food')
const yearElement = document.querySelector('#year')
let imageElement

const imageCollection = document.getElementsByTagName('img')

for (const image of imageCollection) {
  imageElement = image.alt.split(' ')[0].toLowerCase() === 'placeholder' && image
}

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`
yearElement.textContent = currentYear
imageElement.setAttribute('src', profilePicture)
imageElement.setAttribute('alt', `Profile image of ${fullName}`)

/* Step 5 - Array */
const favFoods = ['Chaufa Rice', 'Spaghetti', 'Barbecue', 'Arepas']

foodElement.textContent = favFoods

const food1 = 'Empanadas'

favFoods.push(food1)
foodElement.innerHTML += `<br>${favFoods}`

favFoods.shift()
foodElement.innerHTML += `<br>${favFoods}`

favFoods.pop()
foodElement.innerHTML += `<br>${favFoods}`

// const ul = document.createElement('ul')

// favFoods.forEach(food => {
//   const li = document.createElement('li')
//   li.textContent = food

//   ul.appendChild(li)
// })

// foodElement.appendChild(ul)
