import { storeUsername } from './storage.js'
import { dispatchUI } from './ui-helpers.js'

const form = document.querySelector('form')
const username = document.querySelector('#username')

form.addEventListener('submit', event => {
  event.preventDefault()
  storeUsername(username.value.trim())
  username.value = ''

  dispatchUI()
})