function PrecoFinal(taxa) {
    return function(preco) {
        return preco * (1 + taxa)
    }
}

const nycPrecoFinal = PrecoFinal(0.0875)

console.log(nycPrecoFinal(25.1))
console.log(nycPrecoFinal(21.7))
console.log(nycPrecoFinal(109.7))