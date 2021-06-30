const incremento1 = function(n) {
    return n + 1
}

//funcao arrow anonima
const incremento2 = (n) => {
    return n + 1
}

const incremento3 = n => {
    return n + 1
}

const incremento4 = n => n + 1

const sum = (a, b) => a + b
console.log(sum(23, 9))

console.log(incremento1(1))
console.log(incremento2(5))
console.log(incremento3(21))
console.log(incremento4(100))
console.log(incremento3(5) + incremento4(5))
