const alunos = [ 
    { nome:"Joelton", nota: 6 },
    { nome:"Juliana", nota: 5 },
    { nome:"Jhonny", nota: 9 },
    { nome:"Mariana", nota: 3 },
    { nome:"Waldir", nota: 10}
]

console.log("Passaram de ano!")
const passaram = alunos.filter(aluno => aluno.nota >= 6);
console.log(passaram);

console.log("Reprovaram de ano!")
const reprovaram = alunos.filter(aluno => aluno.nota <= 5);
console.log(reprovaram);