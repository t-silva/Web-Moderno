console.log('O Hoisting eleva a variável declarada para o topo, então posso chamar antes de declarar, mas fica como variável indefinida')

console.log('a = ',a)
var a = 2
console.log('a = ',a)

console.log('Já com o let, não ocorre o mesmo.')
console.log('b = ', b)
let b = 3
console.log('b = ', b)