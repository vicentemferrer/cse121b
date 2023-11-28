/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples')
let templeList = []

/* async displayTemples Function */
const displayTemples = async (temples = []) => {
  temples.forEach(({ templeName, location, imageUrl }) => {
    const article = document.createElement('article')
    const h3 = document.createElement('h3')
    const img = document.createElement('img')

    h3.textContent = templeName
    img.setAttribute('src', imageUrl)
    img.setAttribute('alt', location)

    article.appendChild(h3)
    article.appendChild(img)

    templesElement.appendChild(article)
  })
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
  const url = 'https://byui-cse.github.io/cse121b-ww-course/resources/temples.json'

  const response = await fetch(url)
  const json = await response.json()

  templeList = [...json]
  displayTemples(templeList)
}

/* reset Function */
const reset = () => templesElement.innerHTML = ""

/* sortBy Function */
function sortBy(temples, filter) {
  reset()

  let newTemples = temples

  switch (filter) {
    case 'utah':
      newTemples = temples.filter(({ location }) => location.includes('Utah'))
      break
    case 'notutah':
      newTemples = temples.filter(({ location }) => !location.includes('Utah'))
      break
    case 'older':
      newTemples = temples.filter(({ dedicated }) => new Date(dedicated) < new Date(1950, 0, 1))
      break
    case 'all':
      break
  }

  displayTemples(newTemples)
}

getTemples();

/* Event Listener */
document.getElementById('sortBy').addEventListener('change', event => {
  const { value } = event.target

  sortBy(templeList, value)
})