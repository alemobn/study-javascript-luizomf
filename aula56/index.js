// Filter -> sempre retornar um array com a mesma quantidade de elementos ou menos

// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosMaioresQueDez = numeros.filter(valor => valor >= 10);
// console.log(numerosMaioresQueDez);

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

// pessoas com nome de 5 ou mais letras
const primeiroFiltro = pessoas.filter(objeto => objeto.nome.length >= 5);
// pessoas com mais de 50 anos
const segundoFiltro = pessoas.filter(objeto => objeto.idade > 50);
// pessoas cujo nome termina com letra a
const terceiroFiltro = pessoas.filter(objeto => objeto.nome.endsWith('a'));

console.log('Pessoas com nome de 5 ou mais letras: \n', primeiroFiltro);
console.log('Pessoas com mais de 50 anos \n', segundoFiltro);
console.log('Pessoas cujo nome termina com a letra A: \n', terceiroFiltro);