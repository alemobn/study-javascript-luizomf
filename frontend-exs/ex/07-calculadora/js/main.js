function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia: function () {
            this.clickBotoes();
            this.pressionaBotoes();
        },

        clickBotoes: function () {
            // this -> calculadora
            document.addEventListener('click', function (event) {
                const element = event.target;

                if (element.classList.contains('btn-num')) {
                    this.btnParaDisplay(element.innerText);
                }

                if (element.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (element.classList.contains('btn-del')) {
                    this.btnDel();
                }

                if (element.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

            }.bind(this));
        },

        pressionaBotoes: function () {
            document.addEventListener('keydown', function (event) {
                const { key } = event;

                if (event.key === 'Enter') {
                    this.realizaConta();
                } else if (event.key === 'Delete') {
                    this.clearDisplay();
                } else if (event.key === 'Backspace') {
                    this.btnDel();
                } else if ('0123456789'.includes(key)) {
                    this.display.value += key;
                } else if (['(', ')', '/', '*', '+', '-', '.'].includes(key)) {
                    this.display.value += key;
                }

            }.bind(this));
        },

        realizaConta: function () {
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

            }
        },

        btnParaDisplay: function (valor) {
            this.display.value += valor;
        },

        btnDel: function () {
            this.display.value = this.display.value.slice(0, -1);
        },

        clearDisplay: function () {
            this.display.value = '';
        }

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();
