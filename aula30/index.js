// atribuição via desestruturação (objetos)
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: '30',
    endereco: {
        rua: 'Av Brasil',
        numero: '320'
    },

};

const { nome, sobrenome, idade, endereco = moradia = 'tes' } = pessoa; // atribuição via desestruturação
const { corFavorita = 'Não definido' } = pessoa; // podemos atribuir valores que não foram definidos no objeto (também funciona com arrays)
const { endereco: moradia } = pessoa; // podemos alterar o nome das propriedades
const { endereco: { rua, numero } } = pessoa; // acessando as propriedades de um objeto aninhado
const { nome: n, ...resto } = pessoa; // podemos pegar também o resto do objeto

console.log(endereco);
console.log(corFavorita);
console.log(moradia);
console.log(rua, numero);
console.log(n, resto);