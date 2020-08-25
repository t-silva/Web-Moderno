const nome = "Rebeca"
const concatenacao = 'Olá ' + nome + '!'
/* O template string faz a interpolação da string, permitndo quebra de linha, tabs, e outras coisas. */
const template = ` 
    Olá 
    ${nome}!`
console.log(concatenacao)
console.log(template)

// Expressões
console.log(`1 + 1 = ${1 + 1}`)
const up = texto => texto.toUpperCase()
console.log(`Ei....${up('cuidado')}!`)
