//Função Literal
function fun1(){ }

//Armazenar em variável
const fun2 = function() { }

//Armazenar em Array

const array = [function (a,b) {return a + b}, fun1, fun2]

console.log(array[0](2,3))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function(valor){return valor}

console.log(obj.falar('teste'))


//Passar função como parametro
function run(fun){
    fun()
}
run(function(){console.log('Executa')})

//Uma função pode retornar/conter uma função

function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}
soma(2,3)(4)