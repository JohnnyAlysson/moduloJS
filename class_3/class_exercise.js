// // exercise 1  class
// var variavel_1 = 17;

// while(variavel_1 >0){
//   console.log(variavel_1),
//   variavel_1 -- //contador = contador - 1
// }

// // exercise 2 
// var contador = 0
// while( contador < 10 ){
//   console.log(contador)
//   if (contador ==5){
//     break
//   }
//   contador ++
// }
// console.log(`o laco parou no ${contador}`)


// exercise extra
var exponencial = prompt("Digite um numero que deseja")
var contador = 0

do {
  contador = contador + exponencial
  exponencial --
} while(exponencial <= 0)

console.log(`A exponencial do numero ${exponencial} e ${contador}`)