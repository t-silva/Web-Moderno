/* novo recurso do ES2015 */

const pessoa = {
    nome: 'Ana',
    idade: 15,
    endereco: {
        logradouro: 'Rua tal',
        numero: 100
    }
}
const {nome,idade} = pessoa //tirando de dentro de pessoa, nome e idade.
console.log(nome,idade) //imprime somente o nome e idade que eu extrai de pessoa.

const {nome: n, idade: i} = pessoa
console.log(n,i)

const {endereco:{ logradouro,numero } } = pessoa

console.log(logradouro,', n.',numero)