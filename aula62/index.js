// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    // this.nome = nome;
    // this.preco = preco;
    // this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostrar a chave?
        value: estoque, // valor
        writable: false, // pode alterar?
        configurable: true // é reconfigurável?
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostrar a chave?
            value: nome, // valor
            writable: false, // pode alterar?
            configurable: false // é reconfigurável?
        },
        preco: {
            enumerable: true, // mostrar a chave?
            value: preco, // valor
            writable: false, // pode alterar?
            configurable: false // é reconfigurável?
        },
        estoque: {
            enumerable: true, // mostrar a chave?
            value: estoque, // valor
            writable: true, // pode alterar?
            configurable: false // é reconfigurável?
        },
    });
}

const p1 = new Produto('Camiseta', 20, 3);
// console.log(Object.keys(p1));

for (let chave in p1) {
    console.log(chave);
}