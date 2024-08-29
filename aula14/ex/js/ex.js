const num = Number(prompt('Digite um número:'));
const numberTitle = document.getElementById('numberTitle');
const text = document.getElementById('text');

numberTitle.innerHTML = num;
text.innerHTML = '';
text.innerHTML += `<p>Raiz quadrada: <strong>${num ** 0.5}</strong></p>`;
text.innerHTML += `<p>${num} é inteiro? <strong>${Number.isInteger(num)}</strong></p>`;
text.innerHTML += `<p>${num} é NaN? <strong>${Number.isNaN(num)}</strong></p>`;
text.innerHTML += `<p>Arredondando para baixo: <strong>${Math.floor(num)}</strong></p>`;
text.innerHTML += `<p>Arredondando para cima: <strong>${Math.ceil(num)}</strong></p>`;
text.innerHTML += `<p>Com duas casas decimais: <strong>${num.toFixed(2)}</strong></p>`;