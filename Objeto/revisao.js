const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220
console.log(produto)
delete produto.preco
console.log(produto)

const carro = {
    modelo: 'gol',
    valor: 50000,
    proprietario:{
        nome: 'Raul',
        idade: 56,
        endereço:{
            logradouro: 'Rua tal',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
    nome: 'Ana',
    idade: 42
    }],
    calcularValorSeguro: function(){
        console.log('Funcao qualquer')
    }
}
carro.proprietario.endereço.numero = 1000
console.log(carro)