/*
Luiz Otávio Miranda tem 30 anos, pesa 84kg,
tem 1.8 de altura e seu IMC é de 25.925925925925924.
Luiz Otávio nasceu em anoNasc.
*/

const nome = 'Luiz Otávio';
const sobreNome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.8;
const imc = peso / (alturaEmM * alturaEmM); // peso / (altura * altura)
const anoNasc = 2024 - idade;

console.log(`${nome} ${sobreNome} tem ${idade} anos, pesa ${peso}kg,\ntem ${alturaEmM} de altura e seu IMC é de ${imc}.`)
console.log(`${nome} ${sobreNome} nasceu em ${anoNasc}.`)