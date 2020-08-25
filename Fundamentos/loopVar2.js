var funcs = []
for (var i = 0 ; i<10; i++){
    funcs.push(function (){ //declarando função anônima e inserindo a própria função no array
        console.log(i)
    })
}
funcs[2]() // Como o i não tem escopo de bloco, o console.log(i) sempre valerá 10.
funcs[8]()