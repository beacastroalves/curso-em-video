let c = 1;
const res = document.querySelector('#res');


// while (c <= 10) {
//   console.log(`Passo ${c}`);
//   res.innerHTML += `<li>Passo ${c}</li>`;
//   c++;
// }


do {
  res.innerHTML += `<li>Passo ${c}</li>`;
  c++;
} while (c <= 15)
