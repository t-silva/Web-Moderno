const prod1 = {} //par de chaves define um objeto. Em JS é uma coleção de chave valor.
prod1.nome = 'Celular' //passando um valor para um identificador nome.
prod1.preco = 5990.90
prod1['Desconto imperdível'] = 0.40 //Evitar atributos com espaço, mas é possível.

console.log(prod1) // { nome: 'Celular', texto: 5990.9 }

const prod2 = { // declarando objetos diretamente
    nome: 'camisa polo',
    preco: 79.90,
    obj: { //objeto dentro de um objeto
        blabla: 1

    }
}
console.log("Tipo de nome: ", typeof prod2.nome)
console.log("Tipo de preco: ", typeof prod2.preco)
console.log("Tipo de obj: ", typeof prod2.obj)

/* Em Json ficaria assim: chaves entre aspas simples */
/* 
    {
	    "nome": "Camisa polo",
	    "preco": "99"
    }
 */
