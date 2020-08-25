//Usando notação literal

const obj1 = {}
console.log(obj1)

//Object em JS
//console.log(typeof Object, typeof new Object)
const obj2 = new Object

//Funções constrututoras
function Produto(nome, preco, desc) {
    this.nome
    this.preco
    return {
        nome,
        preco,
        getPrecoComdesconto () {
            return preco * (1 - desc)
        }
    }
}
const p1 = new Produto('Caneta', 7, 0.5)
const p2 = new Produto('Noetebook', 3000, 0.25)
console.log(`Produto: ${p1.nome}, Preço: ${p1.preco}, Com desconto: ${p1.getPrecoComdesconto()} `)
console.log(`Produto: ${p2.nome}, Preço: ${p2.preco}, Com desconto: ${p2.getPrecoComdesconto()} `)

// Traballhando com Json
const fromJson = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJson.info)
/* Preço: ${p1.preco}\n Preço com desconto: ${p1.getPrecoComdesconto}, 
            ${p2.getPrecoComdesconto()}`) */