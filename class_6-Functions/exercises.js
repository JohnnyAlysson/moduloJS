// //                          Atividade 01
// // Escreva uma função que permita contar o número de vogais contidas
// // em uma string fornecida pelo usuário. Por exemplo, o usuário informa
// // a string “Beterraba”
// // , e a função retorna o número 4 (há 4 vogais nessa palavra).
// alert("Programa para contar vogais e consoantes")
// var user = prompt("Digite uma palavra")

// function countLetters(word){
//   var new_word = word.toLowerCase()
//   const vowels = ["a","e","i","o","u"]
//   var vowel_count = 0
//   var consonant_count = 0
//   var num_count = 0
//   for (char of new_word)
//     if(vowels.includes(char) == true){
//       vowel_count ++
//       continue
//     }
//     else if(isNaN(char)== true && vowels.includes(char) == false){
//       consonant_count ++
//       continue
//     }
//     else if(isNaN(char)== false){
//       num_count ++
//       continue
//     }
//   alert(`${word} tem ${vowel_count} vogais , ${consonant_count} consoantes e ${num_count} numeros`)
// }

// countLetters(user)

// //                          Atividade 02
// // Implemente uma função que receba um número como parâmetro e
// // informe o quadrado desse número.
// var user = prompt("Digite o numero")

// function calcularQuadrado(user){
//   var quadrado = user ** 2
//   alert(`${user}² = ${quadrado}`)
// }

// calcularQuadrado(user)

// //                          Atividade 03
// // Escreva uma função que encontre a área e o perímetro de um círculo,
// // de acordo com o raio fornecido

// var user = Number(prompt("Digite o raio do circulo"))
// console.log(user)

// function calcularCirculo(user){
//   var pi = 3.14
//   var perimetro = 2 * pi * user
//   var area = pi* (user **2)
//   alert(`A area do circulo e ${area} seu perimetro e ${perimetro}`)
// }

// calcularCirculo(user)

// //                          Atividade 04
// // Escreva uma função que verifica se um número fornecido pelo usuário em
// // um prompt é primo ou não.

// var user = prompt("Digite o numero")

// function checarPrimo(number){
//   if (number % 2 == 0 && number !=2){
//     alert("esse numero nao e primo")
//   }

//   else if (number % 3 == 0 && number !=3 ){
//     alert("esse numero nao e primo")
//   }
//   else if (number % 5 == 0 && number !=5 ){
//     alert("esse numero nao e primo")
//   }
//   else if (number % 7 == 0 && number !=7 ){
//     alert("esse numero nao e primo")
//   }
//   else {
//     alert("esse numero e primo")
//   }
// }

// checarPrimo(user)


//                          Atividade 05
// Crie uma função anônima que simule uma calculadora básica. Ela deve
// aceitar dois números e uma operação (adição, subtração,
// multiplicação, divisão) como parâmetros e retornar o resultado.
//                          Atividade 06
// Crie uma função anônima que aceite dois números como parâmetros e
// retorne a soma deles.

// alert(`
//   Calculadora:
//   Digite dois numero e a operacao que deseja realizar
//   `)

// var primeiro_numero = Number(prompt("Digite o primeiro numero"))
// var segundo_numero = Number(prompt("Digite o segundo numero"))
// var operacao = prompt((`
//   Digite a operacao:
//   "+" > Adicao
//   "-" > Subtracao
//   "x" > Multiplicacao
//   ":" > Divisao
//   `))

// const calculo = function(a,b,operator){
//   if(operator == "+"){
//     return a+b
//   }
//   if(operator == "-"){
//     return a-b
//   }
//   if(operator == "x"){
//     return a*b
//   }
//   if(operator == ":"){
//     return a/b
//   }
  
// }

// alert(`O resultado e: ${calculo(primeiro_numero,segundo_numero,operacao)}`)





//                          Atividade 07
// Faça um programa que use a função valorPagamento para determinar o
// valor a ser pago por uma prestação de uma conta. O programa deverá
// solicitar ao usuário o valor da prestação e o número de dias em atraso e
// passar estes valores para a função valorPagamento, que calculará o
// valor a ser pago e devolverá este valor ao programa que a chamou. O
// programa deverá então exibir o valor a ser pago na tela.

// Após a execução o programa deverá voltar a pedir outro valor de
// prestação e assim continuar até que seja informado um valor igual a zero
// para a prestação. Neste momento o programa deverá ser encerrado,
// exibindo o relatório do dia, que conterá a quantidade e o valor total de
// prestações pagas no dia. O cálculo do valor a ser pago é feito da seguinte
// forma. Para pagamentos sem atraso, cobrar o valor da prestação. Quando
// houver atraso, cobrar 3% de multa, mais 0,1% de juros por dia de atraso.