//funcao anonima

(function (a, b, c) {
    return a + b + c
}) 

const x = 1
const sum = function (a, b) {
    return a + b
}

const result = sum(7, 4)
console.log(result)

const outraSum = sum
console.log(outraSum(40, 10))
