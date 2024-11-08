// nomes.splice(indice, delete, elem1, elem2, elem3...);
//             -1       -2      -3         -4         -5      
//              0        1       2          3          4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// pop
const simulaPop = nomes.splice(-1, 1);
console.log(nomes, simulaPop);

// push
const simulaPush = nomes.splice(nomes.length, 0, 'Rodrigo', 'Cardoso');
console.log(nomes, simulaPush);

// shift
const simulaShift = nomes.splice(0, 1);
console.log(nomes, simulaShift);

// unshift
const simulaUnshift = nomes.splice(0, 0, 'Letícia', 'Vitória');
console.log(nomes, simulaUnshift);
