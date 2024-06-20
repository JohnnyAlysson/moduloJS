// Atividade 06
// Escreva um programa que solicite um número e determine se ele é
// um número primo.

var numero = Number(prompt("Digite um numero")
)

if (numero % 2 == 0 && numero !=2){
  console.log("esse numero nao e primo")
}

else if (numero % 3 == 0 && numero !=3 ){
  console.log("esse numero nao e primo")
}
else if (numero % 5 == 0 && numero !=5 ){
  console.log("esse numero nao e primo")
}
else if (numero % 7 == 0 && numero !=7 ){
  console.log("esse numero nao e primo")
}
else {
  console.log("esse numero e primo")
}