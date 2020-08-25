/* Armazenar funcao em variavel */

const imprimirSoma = function(a,b){
    console.log(a+b)
}
imprimirSoma(2,3)

// Armazenando uma função arrow em uma variável, a função arrow é nova no JS
const soma = (a,b) => {
    return a + b
}
console.log(soma(2,3))

//retorno implícito

const subtracao = (a,b) => a-b
console.log(subtracao(5,3))

const imprimir2 = a => console.log(a)
imprimir2(2+3)