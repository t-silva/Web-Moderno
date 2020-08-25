const pai = {nome: 'Pedro', corCabelo: 'preto'}
const filha = Object.create(pai) //cria já sendo um protótipo
filha.nome = 'ana'
console.log(`${filha.nome}, ${filha.corCabelo}`)
const filha2 = Object.create(pai,{
    nome: {value: 'Bia', writable: false, enumerable: true} //enumerable: false não permite consultar pelo object.keys(filha2)
})
console.log(filha2.nome)
filha2.nome = 'Carla'
//console.log(`${filha2.nome} cabelo: ${filha2.corCabelo}`)

for (let a in filha2){
            console.log(a)
}