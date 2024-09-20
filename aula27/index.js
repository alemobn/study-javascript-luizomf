const data = new Date();
const diaSemana = data.getDay();
let diaSemanaTexto;

if (diaSemana === 0) {
    diaSemanaTexto = "Domingo";
} else if (diaSemana === 1) {
    diaSemanaTexto = "Segunda";
} else if (diaSemana === 2) {
    diaSemanaTexto = "Terça";
} else if (diaSemana === 3) {
    diaSemanaTexto = "Quarta";
} else if (diaSemana === 4) {
    diaSemanaTexto = "Quinta";
} else if (diaSemana === 5) {
    diaSemanaTexto = "Sexta";
} else if (diaSemana === 6) {
    diaSemanaTexto = "Sábado";
} else {
    diaSemanaTexto = "";
}

console.log(diaSemana, diaSemanaTexto);

const diaSemana2 = data.getDay();
let diaSemanaTexto2;

switch (diaSemana2) {
    case 0 : diaSemanaTexto2 = "Domingo";
    break;
    case 1 : diaSemanaTexto2 = "Segunda";
    break;
    case 2 : diaSemanaTexto2 = "Terça";
    break;
    case 3 : diaSemanaTexto2 = "Quarta";
    break;
    case 4 : diaSemanaTexto2 = "Quinta";
    break;
    case 5 : diaSemanaTexto2 = "Sexta";
    break;
    case 6 : diaSemanaTexto2 = "Sábado";
    break;
    default : diaSemanaTexto2 = "";
    break
}

console.log(diaSemana2, diaSemanaTexto2);

function getDiaSemanaTexto(diaSemana2) {
    let diaSemanaTexto3;

    switch (diaSemana2) {
        case 0 : diaSemanaTexto3 = "Domingo";
        return diaSemanaTexto3;
        case 1 : diaSemanaTexto3 = "Segunda";
        return diaSemanaTexto3;
        case 2 : diaSemanaTexto3 = "Terça";
        return diaSemanaTexto3;
        case 3 : diaSemanaTexto3 = "Quarta";
        return diaSemanaTexto3;
        case 4 : diaSemanaTexto3 = "Quinta";
        return diaSemanaTexto3;
        case 5 : diaSemanaTexto3 = "Sexta";
        return diaSemanaTexto3;
        case 6 : diaSemanaTexto3 = "Sábado";
        return diaSemanaTexto3;
        default : diaSemanaTexto3 = "";
        return diaSemanaTexto3;
    }   
}

const diaSemanaTexto3 = getDiaSemanaTexto(diaSemana2);
console.log(diaSemana2, diaSemanaTexto3);