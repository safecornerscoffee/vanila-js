import './styles.css'

let count = 0

const getCount = () => {
  document.getElementById('count').innerText = count.toString()
}

const countAdd = () => {
  count++
  getCount()
}

const countSubtract = () => {
  count--
  getCount()
}

console.log('hello')

let addButton = document.querySelector('#add-button')
let subtractButton = document.querySelector('#subtract-button')

addButton.addEventListener('click', countAdd)
subtractButton.addEventListener('click', countSubtract)
