/* LESSON 3 - Programming Tasks */

/* Profile Object  */
const myProfile = {
  name: 'Vicente Maximiliano Ferrer Valdés',
  photo: 'images/profile.jpg',
  favoriteFoods: ['Chaufa Rice', 'Spaghetti', 'Barbecue', 'Arepas'],
  hobbies: ['Reading', 'Singing', 'Programming', 'Trekking', 'Kayak'],
  placesLived: [],
  altProp() { return `Profile image of ${this.name}` }
}



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
  place: 'RM, Chile',
  length: '9 years'
})

myProfile.placesLived.push({
  place: 'Cipolletti, RN, Argentina',
  length: '9 years'
})

myProfile.placesLived.push({
  place: 'Buenos Aires, Argentina',
  length: '2 years'
})

myProfile.placesLived.push({
  place: 'Ancud, Chiloé Island, Chile',
  length: '2 years'
})


/* DOM Manipulation - Output */
const imageElement = document.getElementById('photo')

/* Name */
document.getElementById('name').textContent = myProfile.name

/* Photo with attributes */
imageElement.src = myProfile.photo
imageElement.alt = myProfile.altProp()

/* Favorite Foods List*/
const favFoodElement = document.getElementById('favorite-foods')

myProfile.favoriteFoods.forEach(food => {
  const li = document.createElement('li')
  li.textContent = food
  favFoodElement.appendChild(li)
})

/* Hobbies List */
const hobbiesElement = document.getElementById('hobbies')

myProfile.hobbies.forEach(hobbie => {
  const li = document.createElement('li')
  li.textContent = hobbie
  hobbiesElement.appendChild(li)
})

/* Places Lived DataList */
const placesElement = document.getElementById('places-lived')

myProfile.placesLived.forEach(({ place, length }) => {
  const dt = document.createElement('dt')
  const dd = document.createElement('dd')

  dt.textContent = place
  dd.textContent = length

  placesElement.appendChild(dt)
  placesElement.appendChild(dd)
})