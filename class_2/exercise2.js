// Atividade 02
// Crie um programa que solicite ao usuário seu peso (em kg) e altura
// (em metros) e calcule o IMC. Em seguida, informe a categoria de
// acordo com a tabela de IMC (por exemplo, abaixo do peso, peso
// normal, sobrepeso, etc.).

// resultados menores que 16 — magreza grave;
// resultados entre 16 e 16,9 — magreza moderada;
// resultados entre 17 e 18,5 — magreza leve;
// resultados entre 18,6 e 24,9 — peso ideal;
// resultados entre 25 e 29,9 — sobrepeso;
// resultados entre 30 e 34,9 — obesidade grau I;
// MAIOR QUE 40,0	OBESIDADE GRAVE	

var nome = prompt("Digite seu nome");
var peso = prompt("Digite seu peso");
var altura = prompt("Digite seu altura");

var calculoIMC = peso/ (altura**2);

console.log(`${nome} seu IMC e ${calculoIMC}`)

if (calculoIMC < 16){
  console.log("Voce esta na magreza grave")
}

else if (16 >= calculoIMC && calculoIMC <= 16.9){
  console.log("Voce esta na magreza moderada")
}
else if (17 >= calculoIMC && calculoIMC <= 18.5){
  console.log("Voce esta na magreza leve")
}
else if (18.6 >= calculoIMC && calculoIMC <= 24.9){
  console.log("Voce esta no peso ideal")
}
else if (25 >= calculoIMC && calculoIMC <= 29.9){
  console.log("Voce esta no sobre pese")
}
else if (30 >= calculoIMC && calculoIMC <= 34.9){
  console.log("Voce esta no obesidade grau 1")
}
else if (35 >= calculoIMC && calculoIMC <= 40){
  console.log("Voce esta no obesidade grau 2")
}
else if (calculoIMC > 40){
  console.log("Voce esta no obesidade grave")
}
else{
  console.log("INPUT INVALIDO")
}
