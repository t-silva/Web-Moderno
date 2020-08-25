function soBoaNoticia(nota){
    if(nota>=7){
        console.log('Aprovado com' + nota)
    }
}

function verdade(valor){
    if (valor)
        console.log('É verdade... ' + valor)
    else
        console.log('É falso... ' + valor) 
}
verdade()
verdade(null)
verdade(NaN)
verdade(undefined)
verdade('')
verdade(0)
verdade(2)
verdade('a')

