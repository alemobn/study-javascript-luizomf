// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras - umDia); // 01/01/1970 timestamp unix ou época unix
console.log(data.toString());

const data2 = new Date(2019, 3, 20, 15, 14, 27); // ano, mes, dia, hora, minuto, segundo, ms
console.log(data2.toString());

const data3 = new Date("2019-04-20 20:25:59"); // dateString = "ano-mes-dia horas.ms"
console.log(data3.toString());
console.log("Dia", data3.getDate());
console.log("Mês", data3.getMonth() + 1); // mês começa do 0
console.log("Ano", data3.getFullYear());
console.log("Hora", data3.getHours());
console.log("Minutos", data3.getMinutes());
console.log("Segundos", data3.getSeconds());
console.log("ms", data3.getMilliseconds());
console.log("Dia semana", data3.getDay()); // 0 - domingo | 6 - sábado 

const data4 = new Date(1726623744124);
console.log(Date.now(), data4);

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

function formataData(data) {
    const dia = zeroAEsquerda(data5.getDate());
    const mes = zeroAEsquerda(data5.getMonth() + 1);
    const ano = zeroAEsquerda(data5.getFullYear());
    const hora = zeroAEsquerda(data5.getHours());
    const minutos = zeroAEsquerda(data5.getMinutes());
    const segundos = zeroAEsquerda(data5.getSeconds());
    const ms = zeroAEsquerda(data5.getMilliseconds());
    const diaSemana = zeroAEsquerda(data5.getDay());

    return `${dia}/${mes}/${ano} - ${hora}:${minutos}:${segundos}`
}

const data5 = new Date();
const dataBrasil = formataData(data5);
console.log(dataBrasil);