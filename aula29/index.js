// atribuição via desestruturação (arrays)

let a = 'A' // B
let b = 'B' // C
let c = 'C' // A

const letras = [b, c, a];
[a, b, c] = letras;

//console.log(a, b, c);

// índices       0     1     2     3     4     5     6     7     8
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um, dois, tres, ...resto] = numeros;
const [one, ,two, ,three] = numeros; // one = 1000, two = 3000, three = 5000 (para ignorar um índice, basta deixar um espaço vazio e separar normalmente por vírgula)

// ... rest, ...spread

//console.log(um, dois, tres);
//console.log(resto);
//console.log(one, two, three);

//índices             0          1          2
//índices          0  1  3    0  1  2    0  1  2
const numbers = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [, [, , indiceDois] ] = numbers; // acessando índice 2 do índice 1 (6)
const [lista1, lista2, lista3] = numbers; // acessando apenas os índices da constante 'numbers'

console.log(numbers[1][2]); // 6
console.log(indiceDois); // 6
console.log(lista2[2]); // 6