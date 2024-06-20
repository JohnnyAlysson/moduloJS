// Atividade 05
// Crie um programa que solicite um número de 1 a 7, representando
// o dia da semana. Use uma estrutura switch (ou equivalente) para
// imprimir o nome do dia correspondente.

var numero = Number(prompt("Digite um numero de 1 a 7")
)
switch (numero){
    case 1 :
      console.log(`${numero} representa segunda-feira`)
      break
    case 2:
      console.log(`${numero} representa terca-feira`)
      break
    case 3:
      console.log(`${numero} representa quarta-feira`)
      break
    case 4:
      console.log(`${numero} representa quinta-feira`)
      break
    case 5:
      console.log(`${numero} representa sexta-feira`)
      break
    case 6:
      console.log(`${numero} representa sabado`)
      break
    case 7:
      console.log(`${numero} representa domingo`)
      break
    default:
      console.log("Digite um numero de 1 a 7")
}