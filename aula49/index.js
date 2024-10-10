// factory function (função fábrica)
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        // getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto) {
            return `${this.nome} está ${assunto}`;
        },

        altura,
        peso,

        // getter  
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.80, 80);
const p2 = criaPessoa('João', 'Otávio', 1.60, 54);
const p3 = criaPessoa('Junior', 'Otávio', 1.70, 74);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);