/* O java faz o hoisting (eleva ao topo do contexto, podemos usar var e let) */
var exibe = function(){
    if (true){
    var a = "VAR" // o var fica fora do escopo e permite redaclarar
    let b = "LET" // O let permite o uso com escopo de bloco e não permite redaclarar.
    console.log(b)
    }
    console.log(a)
    const c = "CONST"
  // console.log(b)
    console.log(c)
    // c = "CONSTANTE" //não pode ser redefinida pois é constante.
}
exibe()
