const res = document.querySelector('#res');

for (let c = 1; c <= 25; c++) {
  res.innerHTML += `<li>Usando o for fiz o passo ${c}</li>`;
}

res.innerHTML += `Fim do for`;