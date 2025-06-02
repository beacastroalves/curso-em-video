function ehEstrangeiro() {
  var paisNasc = window.document.querySelector('#paisNasc');
  var paisVive = window.document.querySelector('#paisVive');
  var res = window.document.querySelector('#res');
  var resPaisNasc = paisNasc.value;
  var resPaisVive = paisVive.value;

  res.innerHTML = `<p><strong>${resPaisNasc}</strong>: é o país onde eu nasci</p>  <p><strong>${resPaisVive}</strong>: é o país onde eu vivo</p>`;

  if (resPaisNasc === 'Brasil') {
    res.innerHTML += '<p>Você é Brasileiro!</p>';

    if (resPaisVive === resPaisNasc) {
      res.innerHTML += '<p>E mora no Brasil!</p>';
    } else {
      res.innerHTML += '<p>E mora fora do Brasil!</p>';
    }
  } else {
    res.innerHTML += '<p>Você é um estrangeiro!</p>';

    if (resPaisVive === 'Brasil') {
      res.innerHTML += '<p>E mora no Brasil!</p>';
    }
  }
}