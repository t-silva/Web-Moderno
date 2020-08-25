const alunos = [
    {nome: 'Joao', nota: 8.3, bolsista: true},
    {nome: 'Maria', nota: 5, bolsista: true},
    {nome: 'Pedro', nota: 6, bolsista: false},
    {nome: 'Jotalhao', nota: 3, bolsista: true}
] 



Array.prototype.reduce2 = function(callback){
    for (let i=0;i<this.length;i++){
        if(!this[i].bolsista){
            return 'Existem alunos não bolsistas'
        }
    }
    return 'Todos são Bolsistas'
}

console.log(alunos.reduce2())
 
const todosBolsistas = (resultado,bolsista) => resultado && bolsista
const algumBolsista = (resultado,bolsista) => resultado || bolsista
console.log(alunos.map(a=> a.bolsista).reduce(todosBolsistas))
console.log(alunos.map(a=> a.bolsista).reduce(algumBolsista))
// console.log(alunos.map(a=> a.nota))
// const resultados = alunos.map(a => a.nota).reduce2(function(acumulador,atual){
//     console.log(acumulador,atual)
//     return acumulador + atual
// },/* poderia passar aqui, depois da callback, o valor inicial */)
// console.log(resultados)