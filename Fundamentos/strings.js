const escola = "Thiago"
console.log(escola.charAt(4)) //letra que está na posição 4
console.log(escola.charCodeAt(3)) //exibe o código da tabela ASCII
console.log(escola.indexOf('a')) //mostra a posição
console.log(escola.substring(3))
console.log(escola.substring(0,3))

console.log("Escola ".concat(escola).concat("!")) //concatenando 
console.log(escola.replace(/\d/g,'G'))
console.log('Thiago, Teste, Maria'.split(',')) //criando array