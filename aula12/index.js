// IEEE 754-2008

let num1 = 1; // number
let num2 = 2.5; // number
let num3 = 0.7; // number
let num4 = 0.1; // number
let num5 = num3; // number
let num6 = num4; // number
let nan = num1 * 'Olá'; // NaN

// solução da imprecisão do IEEE 754-2008 (melhor forma)
num3 += num4; // 0.8
num3 += num4; // 0.9
num3 += num4; // 1.0
num3 += num4; // 1.1
num3 += num4; // 1.2
num3 += num4; // 1.3
num3 += num4; // 1.4
num3 += num4; // 1.5
num3 += num4; // 1.6
num3 += num4; // 1.7
num3 += num4; // 1.8
num3 += num4; // 1.9
num3 += num4; // 2.0
num3 = Number(num3.toFixed(2));
console.log(num3);
console.log(Number.isInteger(num3));

// solução da imprecisão do IEEE 754-2008 com conta
num5 = ((num5 * 100) + (num6 * 100)) / 100; // 0.8
num5 = ((num5 * 100) + (num6 * 100)) / 100; // 0.9
num5 = ((num5 * 100) + (num6 * 100)) / 100; // 1.0
console.log(num5);
console.log(Number.isInteger(num5));

console.log(num1.toString()); // convertendo o tipo para String
console.log(num1.toString(2)); // convertendo o tipo para String / vendo representação binária
console.log(num1.toFixed(2)); // arredondar para duas casas decimais
console.log(Number.isInteger(num1)); // este número é um inteiro?
console.log(Number.isNaN(nan)); // este número é um NaN?