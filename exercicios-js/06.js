function jSimples(c,j,t){
    return c+(c*j)*t
}
function jComposto(c,j,t){

    while(t--){
        c+= c*j
    }
    return c
}
console.log(jSimples(10,0.1,3))
console.log(jComposto(10,0.1,3))

function jurosSimples (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}

console.log(jurosSimples(10, 0.1, 3));
console.log(jurosCompostos(10, 10/100, 3));