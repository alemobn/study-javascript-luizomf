const form = document.querySelector("#form");

function eventoForm(evento) {
    evento.preventDefault();

    const resultado = document.querySelector("#resultado");

    const categorias = [
        document.querySelector("#categoria-1").textContent,
        document.querySelector("#categoria-2").textContent,
        document.querySelector("#categoria-3").textContent,
        document.querySelector("#categoria-4").textContent,
        document.querySelector("#categoria-5").textContent,
        document.querySelector("#categoria-6").textContent
    ];

    const peso = Number(document.querySelector("#peso").value);
    let altura = Number(document.querySelector("#altura").value);

    let alturaEmM;
    if (Number.isInteger(altura)) {
        alturaEmM = altura / 100;
    } else {
        alturaEmM = altura;
    }
    
    const imc = peso / (alturaEmM * alturaEmM);

    let mensagem;
    if(imc <= 18.4) {
       mensagem = categorias[0];
       resultado.innerHTML = `${imc.toFixed(2)} (${mensagem})`;
    } else if (imc >= 18.5 && imc <= 24.9) {
        mensagem = categorias[1];
        resultado.innerHTML = `${imc.toFixed(2)} (${mensagem})`;
    } else if (imc >= 25 && imc <= 29.9) {
        mensagem = categorias[2]
        resultado.innerHTML = `${imc.toFixed(2)} (${mensagem})`;
    } else if (imc >= 30 && imc <= 34.9) {
        mensagem = categorias[3]
        resultado.innerHTML = `${imc.toFixed(2)} (${mensagem})`;
    } else if (imc >= 35 && imc <= 39.9) {
        mensagem = categorias[4]
        resultado.innerHTML = `${imc.toFixed(2)} (${mensagem})`;
    } else if (imc >= 40) {
        mensagem = categorias[5]
        resultado.innerHTML = `${imc.toFixed(2)} (${mensagem})`;
    } else {
        mensagem = "Digite o formato correto e em números."
        resultado.innerHTML = `${mensagem}`;
    }
}

form.addEventListener("submit", eventoForm);