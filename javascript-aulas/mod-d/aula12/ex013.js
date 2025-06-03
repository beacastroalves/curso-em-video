var h1 = window.document.querySelector('main h1');
var agora;

function lpad(numero) {
  return numero < 10 ? `0${numero}` : `${numero}`;
}

function atualizaTempo() {
  agora = new Date();
  var dia = agora.getDay();
  var diaDaSemana;

  switch(dia) {
    case 0:
      diaDaSemana = 'Domingo';
      break;
    case 1:
      diaDaSemana = 'Segunda-Feira';
      break;
    case 2:
      diaDaSemana = 'Terça-Feira';
      break;
    case 3:
      diaDaSemana = 'Quarta-Feira';
      break;
    case 4:
      diaDaSemana = 'Quinta-Feira';
      break;
    case 5:
      diaDaSemana = 'Sexta-Feira';
      break;
    case 3:
      diaDaSemana = 'Sábado';
      break;
    default:
      diaDaSemana = 'Dia inválido';
      break;
  }

  h1.innerHTML = `São exatamente <span>${
    lpad(agora.getHours())
  }:${
    lpad(agora.getMinutes())
  }:${
    lpad(agora.getSeconds())
  }</span> e hoje é <span>${diaDaSemana}</span>`;
  saudar();
}

atualizaTempo();

setInterval(atualizaTempo, 1000);


function saudar() {
  var hora = agora.getHours();
  if (hora < 12) {
    res.innerHTML = `<p><span>Bom dia!</span></p>`;
  } else if (hora < 18) {
    res.innerHTML = `<p><span>Boa tarde!</span></p>`;
  } else {
    res.innerHTML = `<p><span>Boa noite!</span></p>`;
  }
}

