function calcular() {
  const num = document.querySelector('#num');
  const res = document.querySelector('#res');
  const titulo = document.querySelector('#titulo-res');
  const soma = res.querySelector('#soma');
  const subt = res.querySelector('#subt');
  const mult = res.querySelector('#mult');
  const divi = res.querySelector('#divi');

  titulo.innerHTML = `A tabuada do número ${num.value} é:`;
  soma.innerHTML = `<strong>Soma:</strong>`;
  subt.innerHTML = `<strong>Subtração:</strong>`;
  mult.innerHTML = `<strong>Multiplicação:</strong>`;
  divi.innerHTML = `<strong>Divisão:</strong>`;

  if (num.value > 0 && num.value <= 10) {
    for (i=0; i <= 10; i++) {
      let resSoma = i + Number(num.value);
      let resSubt = (i + Number(num.value)) - Number(num.value);
      let resMult = i * Number(num.value);
      let resDivi = resMult / Number(num.value);

      soma.innerHTML += `<li>${i} + ${num.value} = ${resSoma}</li>`
      subt.innerHTML += `<li>${(i + Number(num.value))} - ${num.value}  = ${resSubt}</li>`
      mult.innerHTML += `<li>${num.value} * ${i} = ${resMult}</li>`
      divi.innerHTML += `<li>${resMult} / ${num.value} = ${resDivi}</li>`
    }
  } else {
    window.alert('Digite um número entre 1 e 10, e tente novamente');
  }
}