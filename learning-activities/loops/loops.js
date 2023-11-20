const myInfo = {
  name: "Brother T",
  photo: "images/photo.jpg",
  favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
  hobbies: ["Reading", "Fishing", "Camping"],
  placesLived: [
    {
      place: "Rexburg, ID",
      length: "5 years",
    },
    {
      place: "Ammon, ID",
      length: "3 years",
    },
    {
      place: "Sandy, UT",
      length: "1 year",
    },
  ],
};

const foodTemplate = food => `<li>${food}</li>`
const placeTemplate = ({ place, length }) => `<dt>${place}</dt><dd>${length}</dt>`

function generateListMarkUp(list, callback) {
  return list.map(callback).join('')
}

const foodsElement = document.querySelector("#favorite-foods");
const placesElement = document.querySelector("#places-lived");

foodsElement.innerHTML = generateListMarkUp(myInfo.favoriteFoods, foodTemplate)
placesElement.innerHTML = generateListMarkUp(myInfo.placesLived, placeTemplate)

