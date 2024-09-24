const verdadeira = true;

// let tem escopo de bloco { ...bloco }
// var só tem escopo de função

let nome = 'Luiz'; // criando
var nome2 = 'Luiz'; // criando
var nome2 = 'Otávio'; // redeclarada

if (verdadeira) {
    let nome = 'Otávio'; // criando
    //console.log(nome, nome2);

    if (verdadeira) {
        let nome = 'João'; // criando
        var nome2 = 'Ronaldo'; // criando
        //console.log(nome, nome2);
    }
}

//console.log(nome, nome2);

function falaOi() {
    
    if (verdadeira) {
        let nome = 'Luiz';
        var sobrenome = 'Miranda';
    }

    console.log(sobrenome);
}

//falaOi();