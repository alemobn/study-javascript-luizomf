const frutas = ['Pêra', 'Maçã', 'Uva'];
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

for (let i = 0; i < frutas.length; i++) {
    // console.log(frutas[i]);
}

// for in -> lê os índices ou chaves do objeto
for (let index in frutas) {
    // console.log(frutas[index]);
}

for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}