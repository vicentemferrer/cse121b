const date = new Date()
const months = []

for (let i = 0; i < 12; i++) {
  date.setMonth(i)
  months.push(date.toLocaleString('en-US', { month: 'long' }))
}

const select = document.getElementById('monthSelector')
const list = document.querySelector('ul')
const h1 = document.querySelector('h1')

function createCalendar(days, month) {
  list.innerHTML = ''
  h1.textContent = month
  for (let i = 1; i <= days; i++) {
    list.innerHTML += `<li>${i}</li>`
  }
}

months.forEach(month => {
  select.innerHTML += `<option value="${month}">${month}</option>`
})

select.addEventListener('change', () => {
  const choice = select.value
  let days

  switch (choice) {
    case 'April':
    case 'June':
    case 'September':
    case 'November':
      days = 30
      break
    case 'February':
      days = 28
      break
    default:
      days = 31
      break
  }

  createCalendar(days, choice)
})