Object.prototype.attr0 = '0' //não fazer isso.
const avo = {attr1: 'A'} //filho de Object.prototype
const pai = {__proto__: avo, attr2: 'B'} //Filho de avo
const filho = {__proto__: pai, attr3:'C'} //filho de pai
console.log(filho.attr0)


const carro = {
    velAtual: 0,
    velMax: 200,
    acelarar(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }
        else {this.velAtual = this.velMax}
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}
const ferrari = {
    modelo: 'Bla',
    velMax: 324 //Shadowing, vai sobrear a velocidade do escopo mais externo
}
const volvo = {
    modelo: 'Volvo',
    status(){
        return `${this.modelo}: ${super.status()}` //chama o método do protótipo.
    }
}
Object.setPrototypeOf(ferrari,carro)
Object.setPrototypeOf(volvo,carro)

console.log(ferrari)
console.log(volvo)
volvo.acelarar(100)
console.log(volvo)
volvo.acelarar(100)
console.log(volvo)
volvo.acelarar(100)
console.log(volvo)
ferrari.acelarar(200)
console.log('Ferrari: ',ferrari.status())
console.log('Volvo: ', volvo.status())