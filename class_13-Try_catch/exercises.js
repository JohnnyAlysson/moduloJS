// Atividade 01
// Crie um objeto JSON que represente informações sobre um livro. O objeto
// deve ter propriedades como título, autor, ano de publicação e uma lista de
// palavras-chave.
let livros = [
  {"titulo":"Parry Hotter"},
  {"autor":"K.J. Lowring"},
  {"ano_da_publicacao":"20xx"},
  {"palavras_chave":["hadouken", "teste","book", "fantasy"]}
]
// Atividade 02
// Dada a seguinte lista de objetos JSON que representam estudantes,
// adicione um novo estudante, remova o estudante com um determinado
// ID e atualize as notas de todos os estudantes em uma determinada
// disciplina.

let alunos = [
  {
    "id": "01",
    "nome": "fulano",
    "notas": {
      "ingles": 10,
      "matematica": 9,
      "portugues": 9,
    },  
  },
  {
    "id": "02",
    "nome": "sicrano",
    "notas": {
      "ingles": 9,
      "matematica": 2,
      "portugues": 2,
    },
  }
];

//
function adicionarAluno(novoAluno) {
  alunos.push(novoAluno);
}

function removerAlunoPorId(id) {
  alunos = alunos.filter(aluno => aluno.id !== id);
}

function atualizarNotasDisciplina(disciplina, novoValor) {
  alunos.forEach(aluno => {
    if (aluno.notas.hasOwnProperty(disciplina)) {
      aluno.notas[disciplina] = novoValor;
    }
  });
}

console.log("Lista original de alunos:");
console.log(alunos);

const novoAluno = {
  "id": "03",
  "nome": "beltrano",
  "notas": {
    "ingles": 8,
    "matematica": 7,
    "portugues": 8,
  }
};
adicionarAluno(novoAluno);
console.log("\nApós adicionar novo aluno:");
console.log(alunos);

removerAlunoPorId("02");
console.log("\nApós remover aluno com ID '02':");
console.log(alunos);

atualizarNotasDisciplina("ingles", 5);
console.log("\nApós atualizar notas de inglês para 5:");
console.log(alunos);