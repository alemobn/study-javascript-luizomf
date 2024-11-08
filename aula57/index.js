// Map -> sempre terá o mesmo tamanho do original

// Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosDobrados = numeros.map(valor => valor * 2);
// console.log(numerosDobrados);

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

// Retorne apenas uma string com o nome da pessoa
const primeiroMap = pessoas.map(objeto => objeto.nome);
console.log(primeiroMap);

// Remova apenas a chave "nome" do objeto
const segundoMap = pessoas.map(objeto => ({ idade: objeto.idade }));
console.log(segundoMap);

//Adicione uma chave id em cada objeto
const terceiroMap = pessoas.map(function(objeto, indice) {
    const novoObjeto = {...objeto};
    novoObjeto.id = indice;
    return novoObjeto;
});
console.log(terceiroMap);