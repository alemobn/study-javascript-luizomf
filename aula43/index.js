// arguments que sustenta todos os argumentos
function funcao(a, b, c) {
    let total = 0;

    for (args of arguments) {
        total += args;
        console.log(total, a, b, c);
    }
}
// funcao(1, 2, 3, 4, 5, 6, 7, 8, 9);

function funcao2(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}
// funcao2(1, 2, 3);

function funcao3(a, b = 2, c = 4) {
    console.log(a + b + c);
}
// funcao3(2, undefined, 20);

function funcao4({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}

const obj = { nome: 'Luiz', sobrenome: 'Otávio', idade: 30 };

// funcao4(obj);

function funcao5([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
// funcao5(['Luiz Otávio', 'Miranda', 30]);

const funcao6 = function(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }

    console.log(acumulador);
};
// funcao6('*', 1, 20, 30, 40, 50);

const funcao7 = function(...args) {
    console.log(args);
}
funcao7('*', 1, 20, 30, 40, 50);