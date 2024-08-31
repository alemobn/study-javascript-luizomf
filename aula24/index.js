const numero = 10;

// se (numero >= 0 && numero <= 5) ocorrer, faça isso { código }
// se não, faça isso aqui { código }

if (numero <= 10) {
    console.log('Sim! o número é menor que 10');
}

if (numero >= 0 && numero <= 5) {
    console.log('o número está entre 0 ~ 5');
} else if (numero >= 6 && numero <= 8) {
    console.log('o número está entre 6 ~ 8');
} else if (numero >= 9 && numero <= 11) { // verdadeiro
    console.log('o número está entre 9 ~ 11'); 
} else {
    console.log('o número não está entre 0 e 11');
}

console.log('...aqui vai o restante do código');