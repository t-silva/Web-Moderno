class Lancamento {
    constructor(nome = 'Genérico', valor = 0) //parametro da função construtora
    {
        this.nome = nome
        this.valor = valor
    }
}
class cicloFinanc{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }
    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l =>{
            valorConsolidado+=l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contadeLuz = new Lancamento('Luz', -220)
const contas = new cicloFinanc(6,2018)
contas.addLancamentos(salario,contadeLuz)
console.log(contas.mes, contas.ano, contas.lancamentos)
console.log(contas.sumario())