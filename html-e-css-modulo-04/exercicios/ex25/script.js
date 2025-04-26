const container = document.querySelector('.container');
const color = document.querySelector('input');

container.style.backgroundColor = color.value;

function onChangeBg() {
  container.style.backgroundColor = `${color.value}`
}