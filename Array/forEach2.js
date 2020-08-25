Array.prototype.forEach2 = function foreach2(callback){
    for(let i = 0; i< this.length;i++){
        
        callback(this[i], i, this)
    }
}
const aprovados = ['Joao', 'Maria', 'Eduardo', 'Raquel']
aprovados.forEach2(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})
