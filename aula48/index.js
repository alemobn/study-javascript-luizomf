// IIFE ~ immediately invoked function expression

(function (idade, peso, altura) {

    const sobrenome = 'Otávio';

    function criaNome(nome) {
        return `${nome} ${sobrenome}`;
    }

    function falaNome() {
        console.log(criaNome('Luiz'));
    }

    falaNome();
    console.log(idade, peso, altura);

})(30, 70, 1.80);