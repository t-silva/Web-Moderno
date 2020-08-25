const pessoa = {
    nome: 'Joao',
    idade: 2,
    peso: 13
}
console.log(Object.keys(pessoa)) //pega somente as chaves
console.log(Object.values(pessoa)) //pega somente valores
console.log(Object.entries(pessoa)) //cria arrays com elementos.
console.log('Percorrendo array por vetor')
Object.entries(pessoa).forEach(e =>{ //percorre o array para cada subArray criado no .entries
    console.log(`${e[0]}: ${e[1]}`)
})
console.log('Percorrendo array por destructing')
Object.entries(pessoa).forEach(([chave,valor]) => { // mesmo exemplo, fazendo destructing
    console.log(`${chave}: ${valor}`)
})
Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable:true, //se trocar para false, não será acessível no Object.keys
    writable: false,
    value: '01/01/2019'
})
console.log(pessoa.nome,pessoa.dataNascimento)
pessoa.dataNascimento = '012313'
console.log(pessoa.nome,pessoa.dataNascimento)
//Object.assing (ECMAScript 2015)
const dest = {a:1}
const o1 = {a: 3, b:2}
const o2 = {c:3,a:4} //o valor do atributo que fica, é o último colocado no assign
const obj = Object.assign(dest,o1,o2) //concatena, NO PRIMEIRO Objeto, os atributos que foram definidos nos demais
console.log(dest)