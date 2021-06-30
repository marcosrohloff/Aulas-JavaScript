//function declaration

function sayHello() {
    console.log('Hello')
}

function sayHello(name) {
    console.log(`Hello ${name}`)
}

function returnHi() {
    return 'Hi!'
}

function returnHiTo(name) {
    return `Hi ${name}`
}

let greeting = returnHi()
console.log(greeting)
console.log(returnHi())

console.log(returnHiTo('John'))