let num = document.querySelector('#fnum');
let lista = document.querySelector('#flista');
let res = document.querySelector('#res');
let valores = [];

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, l) {
  if(l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if(isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value));
    lista.innerHTML += `<p>Valor <strong>${num.value}</strong> adicionado</p>`;
  } else {
    window.alert('Valor inválido ou já encontrado na lista. Tente outro número.');
  }
  num.value = '';
  num.focus();
}

function finalizar() {
  if (valores.length == 0) {
    window.alert('Adicione valores antes de finalizar!');
  } else {
    let tot = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;
    let media = 0;
  
    for (let pos in valores) {
      soma += valores[pos];
      if(valores[pos] > maior) {
        maior = valores[pos];
      }

      if(valores[pos] < menor) {
        menor = valores[pos];
      }
    }

    media = soma / tot;

    res.innerHTML = '';
    res.innerHTML += `<p>Ao todo, temos <strong>${tot}</strong> números cadastrados.</p>`;
    res.innerHTML += `<p>O maior valor informado foi <strong>${maior}</strong>.</p>`;
    res.innerHTML += `<p>O menor valor informado foi <strong>${menor}</strong>.</p>`;
    res.innerHTML += `<p>Somando todos os valores, temos <strong>${soma}</strong>.</p>`;
    res.innerHTML += `<p>A media dos valores, é <strong>${media}</strong>.</p>`;
  }
}