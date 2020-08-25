//Em java, a variavel var, é acessivel fora dos blocos (escopo)

{{{{{{{
    var sera = 'sera'
}}}}}}}
console.log(sera)

function teste(){
    var local = 123 //a variavel dentro de uma função só é acessível dentro do bloco.
}
console.log(local)