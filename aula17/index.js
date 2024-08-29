function criaPessoa(nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
};

const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);
const pessoa2 = criaPessoa('Maria', 'Oliveira', 32);
const pessoa3 = criaPessoa('João', 'Moreira', 55);
const pessoa4 = criaPessoa('Junior', 'Lara', 64);
const pessoa5 = criaPessoa('Jean', 'Vile', 21);

console.log(pessoa1.nome, pessoa3.idade);

const pessoa = {
    nome: 'Oliver',
    sobrenome: 'Almeida',
    idade: '16',

    fala() {
        console.log(`Olá! meu nome é ${this.nome} ${this.sobrenome}, tenho ${this.idade} anos.`);
    },

    incrementaIdade() {
        ++this.idade;
        console.log(`Ano que vem farei ${this.idade} anos.`);
    }
};

pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();
pessoa.incrementaIdade();