// pessoa aponta para memória > 123 > {...}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro' //Posso alterar o atributo do objeto
console.log(pessoa.nome)

//pessoa = {nome: 'Ana'} //tendando fazer com que pessoa aponte para outro objeto, como é constante !!ERRO

Object.freeze(pessoa) //congela o objeto, não dá erro mas não altera posso também criar como const pessoa = Object.freeze({nome: 'Joao,...})
pessoa.nome = 'Maria'
pessoa.end = 'Rua tal'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)