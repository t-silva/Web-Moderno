function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) 
}
const obj = {max: 50, min: 40}
console.log(rand(obj)) //passo um objeto para a função, que está dentro de {} e está pronta para receber um objeto.
console.log(rand({min: 955})) //se passo só um parâmetro, o outro assume o valor padrão.
console.log(rand({})) //passando objeto vazio, usa os valores padrões.
console.log(rand()) //sem passar objeto ele dá erro.