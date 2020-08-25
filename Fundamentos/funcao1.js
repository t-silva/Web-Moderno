function imprimirSoma(a, b) { //não é necessário declarar os tipos
    console.log(a+b)
}
imprimirSoma(1,2)
imprimirSoma(1) //retorna not a number
/* Função com retorno */
function soma(a,b=5){ //estabelece um valor padrão caso não seja passado valor
    return a +b
}
console.log(soma(2,3))
console.log(soma(2))