function exibe(a){
    console.log(`R$ ${a.toFixed(2).toString().replace(".",",")}`)
}
exibe(0.1 + 0.2)