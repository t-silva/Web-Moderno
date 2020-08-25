//Object.preventExtensions: Previne extensão do objeto (adicionar novos atributos), porém permite a exclusão.
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 199, tag: 'promoção'
})
console.log('Extensivel:', Object.isExtensible(produto))
produto.nome = 'Borracha' //permite alterar
produto.descricao = 'Borracha branca' //não permite adicionar
delete produto.tag // permite excluir
console.log(produto)

//Object.seal: Previne adicionar novos atributos e excluir, porém permite alteração.
const pessoa = {nome: 'Juliana', idade:35}
Object.seal(pessoa)
console.log(pessoa)
pessoa.nome = 'Ju'
delete pessoa.idade
pessoa.mae = 'Leonora'
console.log(pessoa)

//Object.freeze: selado + valores constantes (não permite alterar, excluir e adicionar novos atributos)