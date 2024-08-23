// não podemos criar constantes com palavras reservadas
// constantes precisam ter nomes significativos
// não pode começar o nome de uma constante com um número
// não pode conter espaços ou traços
// utilizamos camelCase
// case-sensitive
// não pode modificar o valor de uma constante
// não utilize var, utilize const
// constantes não podem ser declaradas sem um valor atribuido
// não podemos modificar o valor de uma constante
const nome = 'João';
console.log(nome);

// + - * /
// string = texto | number = número
const primeiroNumero = 5; // number
const segundoNumero = '10';
const resultado = primeiroNumero + segundoNumero;
const resultadoDuplicado = resultado * 2;

let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;

console.log(resultadoTriplicado);
console.log(typeof(primeiroNumero));
console.log(typeof(segundoNumero));
// tentar somar string + number retorna string
console.log(primeiroNumero + segundoNumero);
console.log(typeof(primeiroNumero + segundoNumero));