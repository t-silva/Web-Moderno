function teste1(num){
    if (typeof num === 'number'){
        if(num > 7){
            console.log('Aprovado')
        }      
        else {
            console.log('Reprovado')
        }
    }
    else {
        console.log('Não é um número')
    }
}
teste1(10)