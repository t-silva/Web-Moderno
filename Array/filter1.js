const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'Ipad', preco: 4199 , fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false},
]
function filtraPreco(array, valor=0){
    const vetor = []
    vetor.push(array.filter(function(p){
        return p.preco > valor && !p.fragil
    })
    )
    return vetor
}
console.log(produtos.filter(function(p){
    return p.fragil
}))

const caro = produto => produto.preco > 500
const fragil = produto => produto.fragil


console.log(filtraPreco(produtos))
console.log(produtos.filter(caro).filter(fragil))