/**
 * entre 0 ~ 11 - bom dia
 * entre 12 ~ 17 - boa tarde
 * entre 18 - 23 - boa noite
 */

// if pode ser usado sozinho
// sempre que utilizo a palavra else, preciso de um if antes
// eu posso ter vários else if na checagem
// só posso ter um else na checagem
// podemos usar condições sem else if, utilizando apenas if e else

const tenhoGrana = NaN;

if (tenhoGrana) {
    console.log('vou sair de casa!');
} else {
    console.log('vou ficar em casa.');
}

const hora = 50;

if (hora >= 0 && hora <= 11) {
    console.log('bom dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('boa tarde');
} else if (hora >= 18 && hora <= 23) {
    console.log('boa noite');
} else {
    console.log('olá!');
}