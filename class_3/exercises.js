// // Atividade 01
// // Crie um programa que solicita ao usuário um número e, em seguida,
// // conta regressivamente até zero, imprimindo cada número no console.
// // O programa deve terminar quando atingir zero.
// var contador = Number(prompt("Digite o numero desejado:"))

// while(contador >= 0){
//   console.log(`${contador}`)
//   contador --
// }
// alert("Tempo Acabou")


// // Atividade 02
// // Desenvolva um programa que solicita ao usuário que insira suas
// // notas de uma série de disciplinas. O programa deve calcular e
// // imprimir a média das notas, o usuário pode continuar adicionando
// // notas até decidir parar.
// var media 
// var nota = 0
// var contador =1

// console.log("Programa para calculo de media . \n Digite SAIR para terminar o programa")
// alert("Programa para calculo de media . \n Digite SAIR para terminar o programa")
// while(true){
//   var  user = prompt(`Digite a nota ${contador}`)
//   //adicionar validacao denota aqui
//   if(user == "sair"){
//     break
//   }
//   else if(!isNaN(user)== false){
//     console.log("tente novamente, input invalido")
//   }
//   else{
//     nota = nota + Number(user)
//     contador ++
//     console.log(`${nota},${contador}`)
//   }
// }

// media = nota/contador

// console.log(`${nota},${contador}`)
// console.log(`Sua media e ${media}`)
// alert(`Sua media e ${media}`)


// // Atividade 03
// // Peça ao usuário para inserir números continuamente e imprima o
// // somatório dos números inseridos. O programa deve continuar executando
// // até que o usuário insira zero.

// var somatorio = 0
// var contador = 0


// console.log("Programa para calculo de somatorio. \n Digite '0' para terminar o programa")
// alert("Programa para calculo de somatorio. \n Digite '0' para terminar o programa")
// while(true){
//   var  user = prompt(`Digite o numero${contador + 1}`)
//   if(user == "0"){
//     break
//   }
//   else if(!isNaN(user)== false){
//     console.log("tente novamente, input invalido")
//   }
//   else{
//     somatorio = somatorio + Number(user)
//     contador ++
//     console.log(`${somatorio},${contador}`)
//   }
// }
// console.log(`O somatorio dos numeros e ${somatorio}`)
// alert(`O somatorio dos numeros e ${somatorio}`)

// // Atividade 04
// // Faça um programa que leia um nome de usuário e a sua senha e não
// // aceite a senha igual ao nome do usuário, mostrando uma mensagem de
// // erro e voltando a pedir as informações.

// var usuario
// var senha
// while(true){
//   usuario = prompt("Digite seu usuario")
//   senha = prompt("Digite sua senha")

//   if (usuario == senha){
//     alert("usuario e senhas nao podem ser iguais, tente novamente")
//     console.log("usuario e senhas nao podem ser iguais, tente novamente")
//   }
//   else{
//     break
//   }
// }

// alert(`${usuario} Seja bem vindo !`)
// console.log(`${usuario} Seja bem vindo !`)


// // Atividade 05
// // Faça um programa que peça para 5 pessoas a sua idade, ao final o
// // programa devera verificar se a média de idade da turma varia entre 0 e 25,
// // 26 e 60 e maior que 60; e então, dizer se a turma é jovem, adulta ou idosa,
// // conforme a média calculada.

// var somatorio = 0
// var contador = 0
// var media


// console.log("media da idade de uma turma")
// alert("media da idade de uma turma")

// var qtd_alunos = Number(prompt("Quantos alunos essa turma possui?")) //5

// while(contador < qtd_alunos){
//   var  user = prompt(`Digite o idade da pessoa ${contador + 1}`)
//   if(!isNaN(user)== false){
//     console.log("tente novamente, input invalido")
//   }
//   else{
//     somatorio = somatorio + Number(user)
//     contador ++
//     console.log(`${somatorio},${contador}`)
//   }
// }

// media = somatorio/qtd_alunos

// if (media > 60){
//   console.log(`O somatorio das idades e ${somatorio} sendo a media ${media} \n Essa e uma turma velha`)
// }
// else if(media <= 60 && media > 25){
//   console.log(`O somatorio das idades e ${somatorio} sendo a media ${media} \n Essa e uma turma Adulta`)
  
// }
// else if (media <=25 && media >0){
//   console.log(`O somatorio das idades e ${somatorio} sendo a media ${media} \n Essa e uma turma jovem`)
// }
// else{
//   console.log(`algo deu errado tente novamente\n estes foram os valores finais: idades = ${somatorio} ,media= ${media}`)
// }


// // Atividade 06
// // Calcule a soma dos números de 1 a 50

// var soma = 0
// var contador =0

// while(contador <= 50){
//   soma = soma+ contador
//   contador++
// }

// console.log(` A soma dos numeros de 1 a 50 e ${soma} `)