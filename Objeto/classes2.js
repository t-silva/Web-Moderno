// Classes, em JS, são funções, então se utiliza o conceito de prototype.
class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}
class Pai extends Avo{
    constructor(sobrenome,profissao = 'Professor'){
        super(sobrenome)
        this.profissao = profissao
    }
}
class Filho extends Pai{
    constructor(){
        super('Silva')
    }
}
const filho = new Filho
console.log(filho)
console.log(Avo.sobrenome)