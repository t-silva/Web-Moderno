const alunos = [
    {nome: 'Joao', nota: 8.3, bolsista: false},
    {nome: 'Maria', nota: 5, bolsista: true},
    {nome: 'Pedro', nota: 6, bolsista: false},
    {nome: 'Jotalhao', nota: 3, bolsista: true}
] 
console.log(alunos.map(a=> a.nota))
const resultados = alunos.map(a => a.nota).reduce(function(acumulador,atual){
    console.log(acumulador,atual)
    return acumulador + atual
},/* poderia passar aqui, depois da callback, o valor inicial */)
console.log(resultados)