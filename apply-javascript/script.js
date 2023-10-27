const createParagraph = () => {
  const par = document.createElement('p')
  par.textContent = 'You clicked this button'
  document.body.appendChild(par)
}

const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
  button.addEventListener('click', createParagraph)
})
