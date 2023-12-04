import { storeUsername } from './storage.js'
import { getUserInfo, languagesTemplate } from './data-helpers.js'

const provisoryInfo = {
  "login": "vicentemferrer",
  "avatar_url": "https://avatars.githubusercontent.com/u/104942040?v=4",
  "name": "Vicente Ferrer",
  "location": "Ancud, Chile",
  "bio": "Programming technician. BYU-I Student. Enthusiast of coding 🤠",
  "created_at": "2022-05-04T21:08:15Z",
  "updated_at": "2023-12-02T13:46:22Z",
  "html_url": "https://github.com/vicentemferrer",
  "languages": [
    {
      "JavaScript": 2376,
      "CSS": 1841,
      "HTML": 345
    },
    {
      "JavaScript": 21112,
      "HTML": 16535,
      "CSS": 5028
    },
    {
      "JavaScript": 3742,
      "CSS": 1071,
      "HTML": 552
    },
    {
      "C#": 44115
    },
    {
      "JavaScript": 3435,
      "CSS": 1286,
      "HTML": 542
    },
    {
      "JavaScript": 5563,
      "CSS": 2189,
      "HTML": 527
    },
    {
      "JavaScript": 5530,
      "CSS": 2865,
      "HTML": 441
    },
    {
      "JavaScript": 3431,
      "HTML": 1444
    },
    {
      "Python": 6535
    },
    {
      "HTML": 3283
    }
  ]
}

const accountFinder = document.querySelector('#account-finder')
const h1 = document.querySelector('h1')
const form = document.querySelector('form')
const username = document.querySelector('#username')

form.addEventListener('submit', event => {
  event.preventDefault()
  storeUsername(username.value.trim())
  username.value = ''

  h1.classList.add('disappear')
  accountFinder.classList.add('move-up')
  setTimeout(() => {
    h1.classList.remove('disappear')
    accountFinder.classList.remove('move-up')
  }, 3000)
})

// console.log(await getUserInfo('vicentemferrer', { limit: 15 }))
const languages = languagesTemplate(provisoryInfo.languages)

const card = document.createElement('div')
const profilePhoto = document.createElement('img')
const nameHeader = document.createElement('h2')
const bioParagraph = document.createElement('p')
const githubLink = document.createElement('a')

profilePhoto.setAttribute('src', provisoryInfo.avatar_url)
profilePhoto.setAttribute('alt', `Profile photo of ${provisoryInfo.login}`)

nameHeader.textContent = provisoryInfo.name

bioParagraph.textContent = provisoryInfo.bio

githubLink.setAttribute('href', provisoryInfo.html_url)
githubLink.setAttribute('target', '_blank')
githubLink.textContent = `Visit ${provisoryInfo.login} GitHub`

card.appendChild(profilePhoto)
card.appendChild(nameHeader)
card.appendChild(bioParagraph)
card.appendChild(githubLink)

// document.getElementById('account-data').appendChild(card)