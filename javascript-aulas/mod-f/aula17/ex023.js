let amigo = {
  nome: 'Bia',
  sexo: 'F',
  peso: 56.8,
  engordar(p=0) {
    console.log(`Engordou ${p}`);
    this.peso += p;
  },
  emagrecer(p=0) {
    console.log(`Emagreceu ${p}`);
    this.peso -= p;
  }
}

amigo.emagrecer(4)
amigo.engordar(7)
console.log(`${amigo.nome} pesa ${amigo.peso}`)