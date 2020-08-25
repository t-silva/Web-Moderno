function area(largura = 0, altura = 0){
    const area = largura * altura
    if (area > 20){
        return `Valor acima do permitido: ${area}m².`
    }
    else if(area == 0){
        return `Não forma uma area: ${area}m²`
    }
    else{
        return `${area}m²`
    }
}
console.log(area(10,30))
console.log(area(2,8))
console.log(area(2))