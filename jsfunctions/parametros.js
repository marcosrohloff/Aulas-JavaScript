function logParametros(a, b, c) {
    console.log(a, b, c);
}

logParametros(1, 2, 3)
logParametros(1, 2, 3, 4, 5, 6)

//operador spread / rest
function logNums(...nums) {
    console.log(Array.isArray(nums))
    for (let n of nums) {
        console.log(n)
    }
}
logNums(1,2,3,4,5)


function sumAll(...nums) {
    let total = 0
    for (let n of nums) {
        total += n
    }
    return total
}
console.log(sumAll(1,2,3,4,5,5,7,8))