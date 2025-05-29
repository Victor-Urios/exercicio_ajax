const alunos = ['Gustavo', 'Mariana', 'Paulo', 'Wandersson'];
//no map a gente pode fazer uma manipulação e ter um novo array como retorno
const alunos2 =  alunos.map(function(itemAtual) {
    return { //objeto literal e transformando um array de string em objeto
        nome: itemAtual, 
        nota: 6
    }
})

const alunosPassaram = alunos2.every(function(item) {
    return item.nota >= 6 //verificação de nota que só permite passar de ano quem tem nota maior que 6
})

console.log(alunosPassaram);