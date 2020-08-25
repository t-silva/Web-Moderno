console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}
console.log('Teste de Uma coisa'.reverse())

Array.prototype.first = function(){
    return this[0]
}
String.prototype.first = function(){
    return this[0]
}
String.prototype.teste = function(){
    let palavra = this.split(' ')
    let frase = palavra[0]
    palavra.forEach(element => {
        console.log(palavra[0].first())
        frase+=' '+palavra[0].first()
    });
    console.log(frase)
    
}
console.log([1,2,3,4,5].first())
console.log('bla bla bla'.first())
console.log('bla bla bla'.teste())