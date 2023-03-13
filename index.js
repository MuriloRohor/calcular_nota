const prompt = require('prompt-sync')();
const Aluno = require('./aluno');
const processamento = require('./processamento.js');
var alunos = [];



for (let i = 1; i <= 10; i++) {
  const nome = prompt(`Digite o nome do aluno ${i}: `);
  const nota = parseFloat(prompt(`Digite a nota do aluno ${i}: `));
  const aluno = new Aluno(nome, nota);

  alunos.push(aluno);
}

console.log(`A maior nota: ${processamento.maior_nota(alunos)}`);
console.log(`A menor nota: ${processamento.menor_nota(alunos)}`);
console.log(`A media das notas: ${processamento.media_nota(alunos)}`);
console.log(`A quantidade de aprovados: ${processamento.qntd_aprovados(alunos)}`);
console.log(`A quantidade de reprovados: ${processamento.qntd_reprovados(alunos)}`);


module.exports = alunos;

