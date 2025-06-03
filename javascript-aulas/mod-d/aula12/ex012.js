function podeVotar() {
  var anoNasc = window.document.querySelector('#anoNasc');
  var anoAtual = new Date().getFullYear();
  var resIdade = anoAtual - Number(anoNasc.value);
  var res = window.document.querySelector('#res');

  if (resIdade < 16) {
    res.innerHTML = `<p>Você tem <span>${resIdade} anos</span>, é de menor de idade e <span>não pode votar</span>!</p>`;
  } else if (resIdade < 18) {
    res.innerHTML = `<p>Você tem <span>${resIdade} anos</span>, é de menor de idade e <span>votar é opcional!</span></p>`;
  } else if (resIdade <= 70) {
    res.innerHTML = `<p>Você tem <span>${resIdade} anos</span>, é de maior de idade e <span>votar é obrigatório!</span></p>`;
  } else {
    res.innerHTML = `<p>Você tem <span>${resIdade} anos</span>, é de maior de idade e <span>votar é opcional!</span></p>`;
  }
}