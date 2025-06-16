const res = document.querySelector('#res');
let num = [5, 8, 2, 9, 3];
num.push(1);
num.sort() // Essa função do js embaralha a ordem dos valores inseridos, mudando assim seus indices.

res.innerHTML += `<li>${num}`;
res.innerHTML += `<li>Nosso vetor tem ${num.length} posições</li>`;
res.innerHTML += `<li>O primeiro valor do vetor é ${num[0]}</li>`;
let pos = num.indexOf(4);
if (pos == -1) {
  res.innerHTML += 'O valor não foi encontrado!';
} else {
  res.innerHTML += `<li>O valor está na posição ${pos}</li>`;
}

/*
let valores = [8, 1, 7, 4, 2, 9];

// console.log(valores);

console.log(valores[0]);
console.log(valores[1]);
console.log(valores[2]);
console.log(valores[3]);
console.log(valores[4]);
console.log(valores[5]);

for (let pos = 0; pos < valores.length; pos++) {
  console.log(`A posição ${pos} tem o valo ${valores[pos]}`);
}

for (let pos in valores) {
  console.log(`A posição ${pos} tem o valo ${valores[pos]}`);
}

*/