var num = 1
{
    var num = 2 //nao existe escopo dentro de bloco, então continua normal
    console.log('dentro = ', num)
}
console.log('fora = ', num)