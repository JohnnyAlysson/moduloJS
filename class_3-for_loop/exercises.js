// // Atividade 01
// // Crie um código que solicite ao usuário um número
// // e exiba a tabuada desse número (de 1 a 10) no console.

// // Use prompt para obter o número e armazene-o em numero.
// // Utilize um loop for para iterar de 1 a 10, multiplicando
// // o número pelo índice do loop e exibindo o resultado.

// var numero = Number(prompt("Digite um numero aqui:"))

// console.log(`Tabuada numero ${numero}`)
// for(let i = 0;i <= 10; i++){
//   console.log(i * numero)
// }



// // Atividade 02
// // Crie um código JavaScript que itere de 1 a 10 usando um loop for.

// // Use continue para pular iterações quando o número for par
// // e break para sair do loop quando o número for igual a 8.
// // Exiba os números processados no console.



// for(let i = 0;i <= 10; i++){
//   if(i == 8){
//     break
//   }
//   else if(i % 2 == 0){
//     continue
//   }
//   console.log(i)
// }


// // Atividade 03
// // Crie um código JavaScript que itere de 1 a 20 usando um loop for.

// // Use continue para pular iterações quando o número for múltiplo de 3
// // e break para sair do loop quando o número for maior que 15.
// // Exiba os números processados no console com console.log.

// for (let i = 0; i <=20; i++){
//   if(i > 15){
//     break
//   }
//   else if(i % 3 == 0){
//     continue
//   }
//   console.log(i)
// }




// // Atividade 04
// // Crie um código JavaScript que solicite ao usuário uma palavra ou
// // frase e, em seguida, utilize o loop for...of para iterar sobre cada
// // caractere da string, exibindo-os no console.

// var palavra = prompt("Digite uma palavra:")

// for ( var letra of palavra){
//   console.log(letra)
// }

