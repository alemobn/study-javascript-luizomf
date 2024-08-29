const alunos = ['Luiz', 'Maria', 'João'];

alunos[0] = 'Eduardo'; // alterando o indice 0 para 'Eduardo'
alunos[alunos.length] = 'Fábio'; // adicionando um novo item ao array
alunos[3] = 'Luiza'; // adicionando um novo valor para o indice 3
alunos.push('Otávio'); // adicionando um novo item ao array (forma recomendada)
alunos.unshift('Ricardo'); // adicionando um novo item no primeiro indice do array

const removido1 = alunos.pop(); // remove o último elemento do array (pode ser armazenado em uma variável)
const removido2 = alunos.shift(); // remove o primeiro elemento do array (pode ser armazenado em uma variável)

console.log(alunos.length); // descobrir o tamanho do array
console.log(alunos); // acessando array completo
console.log(alunos[0]); // acessando índice específico do array (0)
console.log(alunos.slice(0, 2)); // exibir elemento do indice 0 ao indice 2
console.log(typeof alunos); // object
console.log(alunos instanceof Array); // alunos é um array?

delete alunos[2]; // remove um elemento específico sem remover o índice
console.log(alunos);