/**
 * operadores lógicos
 * && -> AND -> E
 * || -> OR -> OU
 * ! -> NOT -> NÃO
 */

const expressaoAnd = false && true && true && true; // se existir um false, toda a expressão retorna false
const expressaoOr = false || false || true || false; // se tiver um true, toda a expressão retorna true
const expressaoNot = !true;

const usuario = 'Luiz';
const senha = '123456';
//                       True                False
const vaiLogar = usuario === 'Luiz' && senha === '12345'; // False
console.log(vaiLogar);

console.log(expressaoAnd);
console.log(expressaoOr);
console.log(expressaoNot);