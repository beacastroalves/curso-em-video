const body = document.querySelector('body');
const color = document.querySelector('input');

body.style.backgroundColor = color.value;

function onChangeBg() {
  body.style.backgroundColor = `${color.value}`;
}