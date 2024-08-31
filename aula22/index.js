/**
 * && -> false && true -> false
 * || -> false || true -> true
 * 
 * FALSY 
 * *false
 * 0
 * '' "" ``
 * null / undefined
 * NaN
 */

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);
console.log(typeof(a || b || c || d || e));

const corUsuario = null;
const corPadrao = corUsuario || 'preto';
console.log(corPadrao);

console.log(0 || false || null || 'Luiz Otávio' || true);

function falaOi() {
    return 'oi';
}

const vaiExecutar = 0;

// console.log(vaiExecutar && falaOi());