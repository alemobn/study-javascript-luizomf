const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

// console.log(pessoa['nome']);

const pessoa2 = new Object();
pessoa2.nome = 'Luiz';
pessoa2.sobrenome = 'Otávio';
pessoa2.idade = 30;
pessoa2.falarNome = function () {
    return `${this.nome} está falando seu nome.`;
};
pessoa2.dataNasc = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

for (let chave in pessoa2) {
    // console.log(pessoa2[chave]);
}

// factory functinos / constructor functions / classes

function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}


const p1 = criaPessoa('Luiz', 'Otávio');
// console.log(p1.nomeCompleto);


function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
    // return this; (implicitamente)
}

// {} <- this -> this
const p2 = new Pessoa('Luiz', 'Otávio');
// Object.freeze(p2)
p2.nome = 'Miranda';
console.log(p2);

