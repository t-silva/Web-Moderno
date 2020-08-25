const ferrari = {
    modelo: 'F40',
    velMax: 324
}
const volvo = {
    modelo: 'qualquer',
    velMax: 200
}

console.log(ferrari.__proto__) //acessa o atributo pai (protótipo)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__) //é o mais externo, e null

function MeuObjeto(){}
console.log(typeof Object,typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)