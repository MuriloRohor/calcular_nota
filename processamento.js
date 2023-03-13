const alunos = require('./index.js');


function maior_nota(alunos) {
  let maiorNota = alunos[0].nota;
  let nomeAluno = alunos[0].nome;

  for (let i = 1; i < alunos.length; i++) {
    if (alunos[i].nota > maiorNota) {
      maiorNota = alunos[i].nota;
      nomeAluno = alunos[i].nome;
    }
  }
  return `Aluno: ${nomeAluno} \nNota: ${maiorNota}`
}

function menor_nota(alunos) {
  let menorNota = alunos[0].nota;
  let nomeAluno = alunos[0].nome;

  for (let i = 1; i < alunos.length; i++) {
    if (alunos[i].nota < menorNota) {
      menorNota = alunos[i].nota;
      nomeAluno = alunos[i].nome;
    }
  }
  return `Aluno: ${nomeAluno} \nNota: ${menorNota}`
}

function media_nota(alunos) {
  let somaNotas = 0;

  for (let i = 0; i < alunos.length; i++) {
    somaNotas += alunos[i].nota;
  }
  return somaNotas / alunos.length;
}

function qntd_aprovados(alunos) {
  let qntd = 0;
  let media = 60;

  for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].nota >= media) {
      qntd += 1;
    }
  }
  return qntd;
}

function qntd_reprovados(alunos) {
  let qntd = 0;
  let media = 60;
  for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].nota < media) {
      qntd += 1;
    }
  }
  return qntd;
}

module.exports = {
  maior_nota,
  menor_nota,
  media_nota,
  qntd_aprovados,
  qntd_reprovados,
};
