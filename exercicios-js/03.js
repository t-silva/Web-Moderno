console.log(" ------- Recursivo -------")
function expo(a,b){
    if (b-- == 1) return a
    else
        return a*expo(a,b)
}
console.log(expo(2,4))
console.log(" ---------- Math ---------")
function expo2(a,b){
    return Math.pow(a,b)
}
console.log(expo2(2,4))
