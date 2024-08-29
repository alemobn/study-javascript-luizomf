const raiz = (n) => { // arrow function 
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado;
};
console.log(soma(4, 4));

function saudacao(nome) {
    return `Bom dia, ${nome}!`;
};

const variavel = saudacao('Luiz');
console.log(variavel);