// Some todos os números (reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Some todos os números (reduce)
const total = numeros.reduce(function (acumulador, valor) {
    acumulador += valor;
    return acumulador;
}, 0);
// console.log(total);

// Retorne um array com os pares (Reduce) -> possível, mas não recomendado
const numerosParesReduce = numeros.reduce(function (acumulador, valor) {
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);
// console.log(numerosParesReduce);

// Retorne um array com os pares (Filter)
const numerosPares = numeros.filter(function (valor) {
    return valor % 2 === 0;
});
// console.log(numerosPares);

// Retorne um array com o dobro dos valores (Reduce) -> possível, mas não recomendado
const valoresDobradosReduce = numeros.reduce(function (acumulador, valor) {
    acumulador.push(valor * 2);
    return acumulador;
}, []);
// console.log(valoresDobradosReduce);

// Retorne um array com o dobro dos valores (Map)
const valoresDobrados = numeros.map(function (valor) {
    return valor * 2;
})
// console.log(valoresDobrados);

// Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 63 }
];

const pessoaMaisVelha = pessoas.reduce(function (acumulador, valor) {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(pessoaMaisVelha);
