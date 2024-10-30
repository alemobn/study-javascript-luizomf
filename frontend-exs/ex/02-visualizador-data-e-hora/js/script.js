function addDate() {
    const title = document.querySelector('.title');
    const date = new Date();
    let weekDay = date.getDay();
    let month = date.getMonth();

    function weekDayConvert() {
        if (weekDay === 0) {
            weekDay = 'Domingo';
        } else if (weekDay === 1) {
            weekDay = 'Segunda-feira';
        } else if (weekDay === 2) {
            weekDay = 'Terça-feira';
        } else if (weekDay === 3) {
            weekDay = 'Quarta-feira';
        } else if (weekDay === 4) {
            weekDay = 'Quinta-feira';
        } else if (weekDay === 5) {
            weekDay = 'Sexta-feira';
        } else if (weekDay === 6) {
            weekDay = 'Sábado';
        } else {
            weekDay = undefined;
        }
    }

    function monthConvert() {
        if (month === 0) {
            month = 'Janeiro'
        } else if (month === 1) {
            month = 'Fevereiro'
        } else if (month === 2) {
            month = 'Março'
        } else if (month === 3) {
            month = 'Abril'
        } else if (month === 4) {
            month = 'Maio'
        } else if (month === 5) {
            month = 'Junho'
        } else if (month === 6) {
            month = 'Julho'
        } else if (month === 7) {
            month = 'Agosto'
        } else if (month === 8) {
            month = 'Setembro'
        } else if (month === 9) {
            month = 'Outubro'
        } else if (month === 10) {
            month = 'Novembro'
        } else if (month === 11) {
            month = 'Dezembro'
        } else {
            month = undefined;
        }
    }

    function dateFormat() {
        weekDay = weekDay;
        day = date.getDate();
        month = month.toLowerCase();
        year = date.getFullYear();
    }
    
    function addZeroToLeft(num) {
        return num >= 10 ? num : `0${num}`;
    }

    function hoursFormat() {
        hours = addZeroToLeft(date.getHours());
        minutes = addZeroToLeft(date.getMinutes());
    }

    weekDayConvert();
    monthConvert();
    dateFormat();
    hoursFormat();

    title.innerHTML = `${weekDay}, ${day} de ${month} de ${year}<br>${hours}:${minutes}`;
}

addDate();