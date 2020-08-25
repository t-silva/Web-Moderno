function aula(nome,VideoID){
    this.nome = nome
    this.VideoID = VideoID
}
const aula1 = new aula('Bem vindo', 123)
const aula2 = new aula('Até Breve', 356)
console.log(aula1,aula2)

//Simulando o new
function novo(f, ...params){ //operador ... concatena todos os parâmetros em um array
    const obj = {}
    obj.__proto__ = f.protype
    f.apply(obj, params)
    return obj
}
const aula3 = novo(aula, 'Teste', 323)
const aula4 = novo(aula, 'teste2', 33213)
console.log(aula3,aula4)