const triangulo = (a, b, c) => {
    if(a+b<c || b+c < a || a+c<b)
        return 'Não é Triangulo'
    if(a == b && b == c)
        return 'Equilatero'
    else if(a == b || a == c || b == c)
        return 'Isosceles'
    else if (a !== b && a!==c && b!== c)
        return 'Escaleno'
    else return 'Não é Triangulo'
}
console.log(triangulo(1,2,3))
