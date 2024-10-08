// declaração de função
// first-class objects (objetos de primeira classe)

// (function hoisting)
falaOi();
function falaOi() {
    console.log('Oi');
}

// function expression
const souUmDado = function () {
    console.log('Sou um dado.');
}
souUmDado();

function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo:')
    funcao();
}
executaFuncao(souUmDado);

// arrow functions
const funcaoArrow = () => {
    console.log('Sou uma arrow function')
}
funcaoArrow();

// demtrp de um objeto
const obj = {
    falar() {
        console.log('Estou falando..');
    }
}

obj.falar();