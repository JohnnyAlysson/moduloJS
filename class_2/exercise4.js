// Solicite ao usuário que digite uma letra. Crie um programa que determine
// se a letra inserida é uma vogal ou uma consoante. Exiba a mensagem
// correspondente. Utilize estruturas condicionais para realizar essa
// verificação.

var letra = prompt("Digite a letra desejada")

if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
  console.log(`A letra ${letra} e uma vogal`)
}
else if (!isNaN(letra)== true){
  console.log(`Isso e um numero : ${letra}`)
}
else if (letra != "a" || letra != "e" || letra != "i" || letra != "o" || letra != "u"){
  console.log(`A letra ${letra} e uma consoante`)
}
else{
  console.log(" INPUT INVALIDO")
}