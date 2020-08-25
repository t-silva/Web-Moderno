console.log("O JS procura o escopo mais interno para utilizar, quando há mais de uma declaração com o mesmo nome.\n")
var numero = 1
{
    let numero = 2
    console.log('dentro = ',numero) //fora do mesmo escopo (let permite escopos em blocos.)
}
console.log('fora = ',numero)