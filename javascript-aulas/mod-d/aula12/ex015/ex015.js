function verificar() {
  const data = new Date();
  const ano = data.getFullYear();
  const fano = document.querySelector('#txtano');
  const res = document.querySelector('#res');

  if(fano.value.length == 0 || Number(fano.value) > ano || Number(fano.value) < 1900) {
    window.alert('[ERRO] Verifique os dados e tente novamente!');

  } else {
    const fsex = document.getElementsByName('radsex');
    const idade = ano - Number(fano.value);
    let genero = '';

    let img = document.createElement('img')
    img.setAttribute('id', 'foto');

    if (fsex[0].checked) {
      genero = 'senhora';

      if (idade >= 0 && idade < 10) {
        genero = 'menina';
        img.setAttribute('src', 'foto-crianca-f.jpg')
      } else if (idade < 21) {
        genero = 'jovem';
        img.setAttribute('src', 'foto-jovem-f.jpg')
      } else if (idade < 60) {
        img.setAttribute('src', 'foto-adulto-f.jpg')
      } else {
        img.setAttribute('src', 'foto-idoso-f.jpg')
      }
    } else if (fsex[1].checked) {
      genero = 'senhor';

      if (idade >= 0 && idade < 10) {
        genero = 'menino';
        img.setAttribute('src', 'foto-crianca-m.jpg')
      } else if (idade < 21) {
        genero = 'jovem';
        img.setAttribute('src', 'foto-jovem-m.jpg')
      } else if (idade < 60) {
        img.setAttribute('src', 'foto-adulto-m.jpg')
      } else {
        img.setAttribute('src', 'foto-idoso-m.jpg')
      }
    }

    res.style.textAlign = 'center';
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
    res.appendChild(img);
  }
}