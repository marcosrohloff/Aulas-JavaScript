console.log(typeof Object)

const Teste = function() {}
console.log(typeof Teste)

let soma = new Function('a', 'b', 'return a + b');
console.log(soma(10, 20));

console.log(typeof soma)