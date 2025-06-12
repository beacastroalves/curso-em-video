function carregar() {
  const msg = document.querySelector('#msg');
  const img = document.querySelector('#imagem');
  const data = new Date();
  const hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas.`;
  if(hora >= 0 && hora < 12) {
    // Bom dia
    img.src = 'morning.png';
    document.body.style.background = '#debb6e';
  } else if (hora >= 12 && hora < 18) {
    // Boa tarde
    img.src = 'afternoon.png';
    document.body.style.background = '#b9846f';
  } else {
    // Boa noite
    img.src = 'night.png';
    document.body.style.background = '#515154';
  }
}
