console.log("Atribuição por referência")
const a = {name: 'teste'}
const b = a // É criado uma espécie de ponteiro de memória para a variável b, que irá apontar para o mesmo local que a
console.log(a)
console.log(b)
b.name = 'bla' //Quando altero valores em b, como é o mesmo endereço apontado, afeta a variável a também.
console.log(b)
console.log(a)

/* Em tipos primitivos, é passado uma cópia por valor, são eles:
* String.
* Number.
* Boolean.
* Null.
* undefined.
* Symbol (novo no ECMAScript 6) */
console.log("- Tipos primitivos por valor")
let c = 12
let d = c
console.log(c)
console.log(d)
d = 11 //Altera d, mas não C, pois foi passado por valor.
console.log(c)
console.log(d)

console.log(" - Null e Undefined")
let valor //Não inicializado
console.log(valor)
valor = null //ausência de valor
console.log(valor)