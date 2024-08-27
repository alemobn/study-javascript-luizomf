// salve o valor dos 2 prompts, cada um em uma variável
// converta o tipo de dado recebido nos prompts para Number (para evitar a concatenação)
// crie uma variável que salve o valor da soma entre os dois valores dos prompts
// exiba o resultado num alert

const num1 = Number(prompt('digite um número:'));
const num2 = Number(prompt('digite outro número:'));
const resultadoSoma = num1 + num2;

alert(`a soma entre ${num1} e ${num2} é ${resultadoSoma}`);