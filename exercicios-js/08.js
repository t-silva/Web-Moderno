function fun(a){
    let valores = a.split(", ")
    let maior = parseInt(valores[0])
    let menor = parseInt(valores[0])
    let recordes = 0
    let x = 0
    for (let i=1;i < valores.length;i++){
        console.log('Valor analisando: ' + valores[i])
        let pontos = parseInt(valores[i])
        if(pontos > maior) {
            maior = pontos
            recordes++
        }
        else if(pontos < menor) {
            menor = pontos
            x = i +1
        }
    }
    return [recordes,x]
}
console.log(fun('10, 20, 20, 8, 25, 3, 0, 30, 1'))
