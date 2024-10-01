// for clássico - geralmente com iteráveis (array ou strings)
// for in - retorna o índice ou chave (string, array ou objetos)
// for of - retorna o valor em si (iteráveis, arrays ou strings)

//            0123...
const nomes = ['Luiz', 'Otávio', 'Henrique'];

for (let i = 0; i < nomes.length; i++) {
    // console.log(nomes[i]);
}

for (let i in nomes) {
     // console.log(nomes[i]);
}

// for of
for (let valor of nomes) {
    // console.log(valor);
}

nomes.forEach(function (v, i, array) {
    console.log(v, i, array);
});