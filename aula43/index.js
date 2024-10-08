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
funcao3(2, undefined, 20);

function funcao4({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}

const obj = { nome: 'Luiz', sobrenome: 'Otávio', idade: 30 };

funcao4(obj)