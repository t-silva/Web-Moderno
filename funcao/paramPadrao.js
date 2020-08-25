//Estratégia 1.
function soma(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma(1,2))

//Estrategia 2
function soma2(a,b,c){
    a = a !== undefined? a : 1
    b = 1 in arguments? b : 1 // o b = 1 significa o se o argumento de índice 1 (b) está nos argumentos
    c = isNaN(c) ? 1 : c
    return a+b+c
}
console.log(soma2(1,2))