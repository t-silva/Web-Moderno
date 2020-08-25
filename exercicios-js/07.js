function baskara(a,b,c){
    var delta = b**2 - (4*a*c)
    if (delta < 0 ) return 'Delta negativo'
    r1 = (-b + Math.sqrt(delta))/2*a 
    r2 = (-b - Math.sqrt(delta))/2*a
    return vetor = [r1,r2]
}
console.log(baskara(1,3,2))
console.log(baskara(3,2,1))
