//Map serve para fazer transformações no Array.
const nums = [1,2,3,4,5]
let resultado = nums.map(function(e){
    return e*2
}) //O map é um for com algum propósito
console.log(nums)
console.log(resultado)
const soma10 = e=> e+10
const triplo = e=> e*3
const paraDinheiro = e=> `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)