// faça com que varA retorne B, varB retorne C e varC retorne A ( console.log(varA, varB, varC); )

/*
 * não altere diretamente o valor das variáveis
 * let varA = 'B';
 * let varB = 'C';
 * let varC = 'A';
 * 
 * varA = 'B'
 * varB = 'C'
 * varC = 'A'
 */

// solução ------------
let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const saveA = varA; // essa constante armazenou o valor de varA

varA = varB;
varB = varC;
varC = saveA;

console.log(varA, varB, varC);
// ---------------------

/*
 *  solução com array 
 *
 * [varA, varB, varC] = [varB, varC, varA]
 * console.log('solução com array:',varA, varB, varC);
*/