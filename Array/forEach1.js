const aprovados = ['Joao', 'Maria', 'Eduardo', 'Raquel']
aprovados.forEach(function(nome, indice){
    console.log(`${nome + 1}) ${indice} , ${aprovados[indice]}`)
})
aprovados.forEach(nome => console.log(nome))