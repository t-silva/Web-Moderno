const sequencia = {
    _valor: 1, //convencao para acesso somente interno
    get valor(){return this._valor++},
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor//notação que só serve para esse método
        }
     } 
}
console.log(sequencia.valor, sequencia.valor) //O JS entende que é um getter
sequencia.valor = 1000 //O JS entende que é um setter
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 
console.log(sequencia.valor, sequencia.valor)

