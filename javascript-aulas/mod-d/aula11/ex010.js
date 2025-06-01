/*
var vel = 120;

console.log(`A velocidade do seu carro é de ${vel}Km/h`);

if (vel > 60) {
  console.log('Você ultrapassou a velocidade permitida. MULTADO!');
}

console.log('Dirija sempre usando cinto de segurança');
*/

function calcular() {
  var txtv = window.document.querySelector('#txtvel');
  var res = window.document.querySelector('#res');
  var vel = Number(txtv.value);
  res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}Km/h</strong></p>`

  if (vel > 60) {
    res.innerHTML += `<p>Você está <strong>MULTADO</strong> por excesso de velocidade!`;
  }
  res.innerHTML += `<p>Dirija sempre com o cinto de segurança!`;
}