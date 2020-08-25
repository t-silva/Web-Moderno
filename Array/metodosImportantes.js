const pilotos = ['Vetel', 'Sena', 'Mansel']
console.log(pilotos)

console.log(pilotos.pop()) //retira ultimo valor
console.log(pilotos)

pilotos.push('Topo')
console.log(pilotos)

console.log(pilotos.shift()) //remove o primeiro
console.log(pilotos)

pilotos.unshift('Nelson') //adiciona na primeira posição
console.log(pilotos)

pilotos.splice(2,0,'Massa','Bottas')
console.log(pilotos)
pilotos.splice(2,1) //a partir do indice 2, remove 2
console.log(pilotos)
const algunsPilotos = pilotos.slice(1) // a partir do 2, pega o restante
console.log(algunsPilotos)
const algunsPilotos2 = pilotos.slice(1,3) // pega do 1 ao 2
console.log(algunsPilotos2)


