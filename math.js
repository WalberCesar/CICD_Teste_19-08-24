//•	add(a, b): Retorna a soma de a e b.
//•	subtract(a, b): Retorna a diferença entre a e b.
//•	multiply(a, b): Retorna o produto de a e b.
//•	divide(a, b): Retorna a divisão de a por b.

function add (a,b) {
    let soma =  a + b
    return soma
}

function subtract (a,b) {
    let sub =  a - b
    return sub
}

function multiply (a,b) {
    let mult =  a * b
    return mult
}
function divide (a,b) {
    let divide =  a / b
    return divide
}

module.exports = { add,divide,multiply,subtract };

