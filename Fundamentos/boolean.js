let isAtivo = false
console.log(isAtivo)
isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //Se colocar somente isAtivo, irá printar valor 1, para transformar em v/f, usamos o ! para fazer a negação

console.log("Os verdadeiros: ")
console.log(!!3)
console.log(!!-1)
console.log(!![])
console.log(!!{})
console.log(!!(isAtivo = true))

console.log('Os falsos')
console.log(!!0)
console.log(!!'') //String vazia
console.log(!!null)
console.log(!!NaN)
console.log(!!(isAtivo = false))

//Retorna somente o que não for vazio.
console.log('' || null || 0 || 'unico valor nao vazio')

let nome = ''
console.log(nome || 'Desconhecido') //se a variável for vazia, podemos deixar um valor padrão.  