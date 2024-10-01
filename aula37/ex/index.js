// escreva uma função chamada ePaisagem que recebe dois argumentos
// largura e altura de uma imagem (number).
// retorne true se a imagem estiver no modo paisagem.

// minha solução
const ePaisagem = (largura, altura) => {
    return largura > altura;
}
console.log(ePaisagem(1920, 1080));

// solução do professor com otimização do código
const ePaisagem2 = (largura, altura) => largura > altura;
console.log(ePaisagem(780, 1080));
