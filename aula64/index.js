/**
 * Object.values
 * Object.entries
 * Object.assign(destino, qualquer objeto)
 * Object.getOwnPropertyDescriptor(object, 'prop')
 * ... (spread)
 */

// Já vimos
/**
 * Object.keys (retorna as chaves)
 * Object.freeze (congela o objeto)
 * Object.defineProperty (define uma propriedade)
 * Object.defineProperties (define várias propriedades)
 */

const produto = {
  nome: 'Caneca',
  preco: 1.8,
  material: 'Porcelana'
};

// const caneca = Object.assign({}, produto, { material: 'Porcelana' });
// const caneca = {
//   ...produto,
//   material: 'Porcelana'
// };

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
console.log('------------------------------------------------------');
console.log(Object.keys(produto));
console.log('------------------------------------------------------');
console.log(Object.values(produto));
console.log('------------------------------------------------------');
console.log(Object.entries(produto));
console.log('------------------------------------------------------');

for (let [chave, valor] of Object.entries(produto)) {
  console.log(chave, valor);
}
