/**
 * primitivos (imutáveis): string, number, booelan, undefined, null, NaN (bigint, symbol) - valores copiados
 * 
 * referência (mutável): array, object, function - valores passados por referência
 */

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

const copiaPessoa = {...pessoa}; // forçando uma cópia em um tipo mutável
const pessoa1 = pessoa;
console.log(pessoa1);
pessoa.nome = 'João';
console.log(pessoa1);
console.log(copiaPessoa);

let a1 = [1,2,3];
let b1 = a1;
let c1 = b1;
let copia = [...a1]; // forçando uma cópia em um tipo mutável

console.log(a1, b1);

a1.push(4);
console.log(a1, b1);
b1.pop(4);
console.log(a1, b1);
a1.push('Luiz');
console.log(c1);
console.log(copia);

let nome = 'Luiz';
nome[0] = 'R';
console.log(nome[0], nome);

let a = 'A';
let b = a; // cópia
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);