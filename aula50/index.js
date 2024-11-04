// função construtora -> objetos
// função fábrica -> objetos
// construtora -> Pessoa (new

function Pessoa(nome, sobrenome) {
    // atributos ou métodos privados
    const ID = 123456;
    const metodoInterno = function () {

    };

    // atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function () {
        console.log(`${this.nome}: sou um método`);
    };
}

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Maria', 'Oliveira');

console.log(typeof p1);
p1.metodo();
