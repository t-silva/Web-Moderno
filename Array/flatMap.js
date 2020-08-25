const escola = [
    {
        turma: 'Turma1',
        alunos:[
            {nome: 'Andre', nota:6},
            {nome: 'Joao', nota:8},
            {nome: 'Maria', nota:9},
            {nome: 'Paulo', nota:10},
            {nome: 'Gabriel', nota:3}
        ]
    },
    {
        turma: 'Turma2',
        alunos:[
            {nome:'Adriano',nota:9},
            {nome:'José',nota:7},
            {nome:'Giuliana',nota:6.8},
            {nome:'Julia',nota:8.5},

        ]
    } 
]
const getNotaAluno = aluno=> aluno.nota
const getNotaDaTurma = turma => turma.alunos.map(getNotaAluno)
const notas1 = escola.map(getNotaDaTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}
const notas2 = escola.flatMap(getNotaDaTurma)
console.log(notas2)