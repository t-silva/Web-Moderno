const peso1 = 1.0
const peso2 = Number('2.1')
console.log(peso1,peso2)
console.log(Number.isInteger(peso2))

const avalicacao1 = 9.8
const avalicacao2 = 6.8
const total = avalicacao1*peso1 + avalicacao2*peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //Não há alteração do valor da constante, só manipulação.
console.log(media.toString(2)) 