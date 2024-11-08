// const nomes = new Array('Eduardo', 'Maria', 'Joana');

//              0          1        2        3          4
// const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana'];

// const novo = nomes.slice(1, -2); // fatiar array
// console.log(novo);

const nomes = ['Luiz', 'Otávio', 'Miranda'];
const nome = nomes.join(' ');
console.log(nome);

// const nome = 'Luiz Otávio Miranda';
// const nomes = nome.split(' '); // converter string para array, separando por espaçamento
// console.log(nomes);

// nomes.shift() // remove do começo
// nomes.unshift() // adiciona no começo
// nomes.pop() // remove do final
// nomes.push() // adiciona no final

// nomes.unshift('Luiz'); // adiciona novo índice ao início (pode trazer problemas de performance)
// nomes.push('João'); // adicionar novo índice ao final
// console.log(nomes);

// const removePrimeiro = nomes.shift();
// const removeUltimo = nomes.pop();

// console.log(nomes, removePrimeiro, removeUltimo);


// const novo = [...nomes];
// nomes[2] = 'João';
// delete nomes[2];
// novo.pop();
// console.log(novo);
// console.log(nomes);

