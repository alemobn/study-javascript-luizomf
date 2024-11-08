function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.clickBotoes();
        this.pressionaBotoes();
    };

    this.clickBotoes = () => {
        document.addEventListener('click', event => {
            const element = event.target;

            if (element.classList.contains('btn-num')) this.btnParaDisplay(element.innerText);
            if (element.classList.contains('btn-clear')) this.clearDisplay();
            if (element.classList.contains('btn-del')) this.btnDel();
            if (element.classList.contains('btn-eq')) this.realizaConta();
        });
    };

    this.pressionaBotoes = () => {
        document.addEventListener('keydown', event => {
            const { key } = event;

            if (event.key === 'Enter') this.realizaConta();
            else if (event.key === 'Delete') this.clearDisplay();
            else if (event.key === 'Backspace') this.btnDel();
            else if ('0123456789'.includes(key)) this.display.value += key;
            else if (['(', ')', '/', '*', '+', '-', '.'].includes(key)) this.display.value += key;
        });
    };

    this.realizaConta = () => {
        let conta = this.display.value;

        try {
            conta = eval(conta);

            if (conta === undefined || conta === null || conta === '') {
                alert('Conta Inválida!');
                return;
            }

            this.display.value = String(conta);

        } catch (error) {

            alert('Conta Inválida!');
            return;

        };
    };

    this.btnParaDisplay = valor => this.display.value += valor;
    this.btnDel = () => this.display.value = this.display.value.slice(0, -1);
    this.clearDisplay = () => this.display.value = '';
};

const calculadora = new Calculadora();
calculadora.inicia();