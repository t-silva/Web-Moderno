function rand([min = 0, max = 1000]){ // mesma função do 3, mas usando array
    if (min > max) [min,max] = [max, min] //inverte 
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50,40]))
console.log(rand([992]))
console.log(rand([,10]))
console.log(rand([]))
console.log(rand())