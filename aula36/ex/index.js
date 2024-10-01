// Escreva uma função que recebe 2 números e retorne o maior deles

// minha solução
function up(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}

const upResult = up(10, 15);

console.log(`O maior número é: ${upResult}`);

// solução do professor com otimização no código
function max(x, y) {
    return x > y ? x : y;
}
console.log(max(15, 28));

// arrow function
const max2 = (x, y) => {
    return x > y ? x : y;
}
console.log(max2(25, 14));

// arrow function otimizada
const max3 = (x, y) => x > y ? x : y;
console.log(max3(12, 14));