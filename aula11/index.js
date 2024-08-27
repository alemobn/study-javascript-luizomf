// você pode 'escapar/ignorar' um caractere utilizando a barra invertida '\'
// cada caracter possui um índice numérico (0123456)

let umaString = 'Um texto';
let outraString = 'o rato roeu a roupa do rei de roma';

console.log(umaString);
console.log(umaString.toUpperCase()); // exibir string em maiúsculo
console.log(umaString.toLowerCase()); // exibir string em minúsculo
console.log(umaString[4]); // buscar o índice 4 (utilizando array)
console.log(umaString.charAt(4)); // buscar o índice 4
console.log(umaString.concat(' em um lindo dia')); // concatenar string (a melhor forma para concatenar string é utilizando template strings)
console.log(umaString.indexOf('texto')); // em qual índice começa a palavra 'texto'? (case-sensitivity)
console.log(umaString.indexOf('o', 3)); // em qual índice está a letra 'o' a partir do índice '3'?
console.log(umaString.lastIndexOf('m')); // em qual índice está a letra 'o'? (começando do último índice até o primeiro)
console.log(umaString.lastIndexOf('m', 3)); // em qual índice está a letra 'o' a partir do índice '3'? (começando do último índice até o primeiro)
console.log(umaString.match(/[a-z]/)); // buscando índice com expressões regulares
console.log(umaString.match(/[a-z]/g)); // buscando índice com expressões regulares (retorna array)
console.log(umaString.search(/x/)); // buscar índice (similar ao indexOf, mas ele aceita expressões regulares)
console.log(umaString.search(/[a-z]/)); // buscar índice da primeira letra da string
console.log(umaString.replace('Um', 'Outro')); // substituir índices/palavras
console.log(outraString.replace(/r/, '#')); // substituir índices/palavras com expressões regulares
console.log(outraString.replace(/r/g, '#')); // substituir todos os índices/palavras com expressões regulares
console.log(outraString.length); // descobrir quantos índices possui na string (incluindo espaços)
console.log(outraString.slice(2, 6)); // descobrir o índice entre o índice 2 e o 6
console.log(outraString.length - 3); // descobrir quantos índices possui na string tirando 3 deles
console.log(outraString.slice(-3)); // descobrir os 3 índices 'negativos' da string (ordem decrescente) 
console.log(outraString.slice(31)); // descobrir quais os índices pós índice 31
console.log(outraString.slice(-4, -1)); // descobrir os índices em ordem decrescente após o -4 subtraindo o índice na posição -1
console.log(outraString.substring(outraString.length - 4, outraString.length - 1)); // descobrir os índices em ordem decrescente após o -4 subtraindo o índice na posição -1 (utilize slice)
console.log(outraString.split('r')); // dividir a string nas letras 'r'
console.log(outraString.split('r', 2)); // dividir a string nas letras 'r' com o limite de 2x