/*
 * aritméticos
 * + adição / concatenação
 * - subtração
 * / divisão
 * * multiplicação
 * ** potenciação
 * % resto da divisão
 */

// () -> ** -> * / % -> + -

const num1 = 5;
const num2 = 10;

console.log(num1 + num2);

let contador = 1;
contador++ // 2 (pós incremento)
contador-- // 1 (pós decremento)
++contador // 2 (pré incremento)
--contador // 1 (pré decremento)
console.log(contador);

const passo = 5;
let contador1 = 0;

contador1 = contador1 + passo;
console.log(contador1);
// operadores de atribuição (+= -= *=)
contador1 += passo; // igual a contador1 = contador1 + 5
console.log(contador1);

const num3 = 10;
const num4 = 'Luiz';
console.log(num3 * num4); // NaN = not a number (error)

const num5 = 5;
const num6 = parseInt('5'); // convertendo uma string para um número inteiro
const num7 = parseFloat('5.5'); // convertendo uma string para um número flutuante
const num8 = Number('5.5'); // convertendo uma string para um número flutuante
console.log(num5 + num6); // soma (10)
