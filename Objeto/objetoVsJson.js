//JSON é formato de dados, para interoperabilidade, não carrega funções, somente dados.
const obj = {a: 1, b: 2, c: 3, soma(){return a+b+c}}
console.log(JSON.stringify(obj))
//console.log(JSON.parse("{a: 1, b: 2, c: 3}")) //não é JSON valido
//console.log(JSON.parse("{'a': 1, 'b':2, 'c':3}")) //tambem nao é valido, JSON precisa de aspas simples, com itens entre aspas duplas 
const json = JSON.parse('{"a": 1, "b": "String", "c": 3, "objeto": {"attr1": 1, "attr2": "String", "boolean": true}, "array": [1,2,3,4,"bla"]}')
const teste = JSON.stringify(json)
console.log(typeof teste)
