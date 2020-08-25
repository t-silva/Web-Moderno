const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome":"Kit de lapis", "preco":41.22}',
    '{ "nome":"caneta", "preco": 7.50}'
]

//retornar array somente com os preços

//transformar em objeto
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(carrinho.map(paraObjeto)[0].preco)
console.log(resultado)
carrinho.map()