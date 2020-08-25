function tratarErroElancar(erro){
    // throw new Error('...')
    throw 10
}

function imprimirNome(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
     }catch(e){
         tratarErroElancar(e)
     } finally{
         console.log('final')
     }
    
}
const obj = {name: 'Roberto'}
const obj = {nome: 'Maria'}
imprimirNome(obj)