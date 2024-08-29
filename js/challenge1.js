// Desafio pratico Aula 1


let nameUser = prompt("Digite seu nome:")
let message = document.getElementById("resultado")

if (nameUser === null || nameUser === ""){
  message.textContent = `Seja bem vindo querido(a)`
}
else{
  message.textContent = `Seja bem vindo ${nameUser}`
}


