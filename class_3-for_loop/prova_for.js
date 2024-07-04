// Instruções:

// Solicite ao professor que digite o número total de estudantes na turma.
// Em seguida, peça que o professor insira a nota de cada aluno individualmente, uma por vez.
// Calcule a média da turma somando todas as notas e dividindo pelo número total de estudantes.
// Identifique e registre a maior nota obtida na turma.
// Ao final, exiba a média da turma e a maior e a menor nota encontrada.

// Dicas:

// Utilize um loop while para coletar as notas de todos os alunos.
// Armazene as notas em uma variável e vá atualizando o valor da soma a cada nova nota inserida.
// Compare cada nota com a maior nota atualmente registrada para encontrar a maior nota.
// Para calcular a média, divida a soma das notas pelo número total de estudantes.
// Exiba os resultados de forma clara e organizada.

var qtd_alunos = Number(prompt("Quantos alunos possuem na sala:"))
var somatorio = 0
var menor_nota = 10
var maior_nota = 0
var media 
for (let i = 1;i <= qtd_alunos; i++){
  while(true){
    var nota = Number(prompt(`Digite a nota do ${i} aluno:`))
    if(nota < 0 || nota >10){
      alert("A nota deve ser menor que 10 e maior que 0")
    }
    else if(!isNaN(nota) == false){
      alert("O valor inserido deve ser um numero")
    }
    else{
      break
    }
  }
  if (nota > maior_nota){
    maior_nota = nota
  }
  if (nota <menor_nota){
    menor_nota = nota
  }
  somatorio = somatorio + nota
}

media = somatorio/qtd_alunos

console.log(`a media da turma foi ${media}`)
console.log(`A maior nota foi: ${maior_nota}`)
console.log(`A menor nota foi: ${menor_nota}`)
