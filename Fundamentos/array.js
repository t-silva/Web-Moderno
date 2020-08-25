/* Arrays são heterogêneos (aceitam qualquer tipo) pela linguagem fracamente tipada. */

const valores = ['Thiago', 1, true]
console.log(valores[0], ',', valores[1], valores[2])

console.log(valores.pop()) //Posso remover o último item e exibir
console.log(valores)
valores.push({id: 1}) //Posso adicionar um objeto
console.log(valores)
console.log(typeof valores) //Array é um objeto em JS