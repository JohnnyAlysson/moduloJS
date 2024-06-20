// Atividade 01
// Peça ao usuário para inserir um número e escreva um programa que
// determine se o número é positivo e par.

var num = prompt(`Digite um numero`)

// num % 2 == 0 ? console.log("numero par") : console.log("numero impar")
// num % 2 == 0 ? alert("numero par") : alert("numero impar")

if(num % 2 == 0 && num > 0){
  console.log("numero par e maior que 0")
}
else if(num < 0){
  console.log("numero menor que zero")  
}
else if(num % 2 == 1){
  console.log("numero impar")  
}
else{
  console.log("input invalido")  
}