console.log(typeof Array, typeof new Array, typeof [])
let aprovados = new Array('Bia', 'Calos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana', 'Pedro']
console.log(aprovados)
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])
console.log(aprovados[4])
console.log(aprovados.length)
aprovados[4] = 'Thiago'
aprovados.push('Uiran')
console.log(aprovados.length)
aprovados[9] = 'Maria'
console.log(aprovados)
//aprovados.sort() //ordena o array

console.log(`Array ordenado: ${aprovados}`)
delete aprovados[1]//remove, deixando a posição undefined
console.log(aprovados[1])
console.log(aprovados)
aprovados.sort()
console.log(aprovados)
aprovados.splice(1,1) //a partir do indice 1, deleta 1 elemento

console.log(aprovados)
aprovados.splice(1,0,'Elemento1', 'Elemento2') //a partir do indice 1, não exclui nenhum elemento e adiciona os dois.
console.log(aprovados)
console.log(aprovados.indexOf('Thiago'))
