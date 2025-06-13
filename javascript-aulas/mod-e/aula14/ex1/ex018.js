function contar() {
  const ini = document.querySelector('#txti');
  const fim = document.querySelector('#txtf');
  const passo = document.querySelector('#txtp');
  const res = document.querySelector('#res');

  if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    window.alert('[ERRO] Faltam dados!');
    res.innerHTML = 'Impossivel contar!'
  } else {
    res.innerHTML = 'Contando: ';
    let i = Number(ini.value);
    let f = Number(fim.value);
    let p = Number(passo.value);

    if (i < f) {
      for (let c = i; c <= f; c += p) {
        res.innerHTML += `${c} \u{1f449}`;
      }
    } else {
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += `${c} \u{1f449}`;
      }
    }
    res.innerHTML += `\u{1f3c1}`;
  }
}