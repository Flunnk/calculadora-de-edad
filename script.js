const nameInputElement = document.querySelector('.js-name-input')
const ageInputElement = document.querySelector('.js-age-input');
const buttonElement = document.querySelector('.js-calculate-button');
const result = document.querySelector('.js-result');

let resultValue = buttonElement.addEventListener('click', function() {
  result.innerHTML = `¡${nameInputElement.value}, tienes ${ageInputElement.value} años!`;
})