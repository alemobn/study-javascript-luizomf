// continue = continua para a próxima iteração
// break = sai do laço

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let i = 0;

do {
    let numero = numeros[i];

    if (numero === 2) {
        console.log('Pulei o número 2');
        i++;
        continue;
    }

    if (numero === 7) {
        console.log('Seu número foi encontrado! (7)\nOperação encerrada.');
        i++;
        break;
    }

    console.log(`Número: ${numero}`);

    i++;
} while (i < numeros.length);

// for (let numero of numeros) {

//     if (numero === 2) {
//         console.log('Pulei o número 2');
//         continue;
//     }

//     if (numero === 7) {
//         console.log('Seu número foi encontrado! (7)\nOperação encerrada.');
//         break;
//     }

//     console.log(`Numero: ${numero}`);
// }