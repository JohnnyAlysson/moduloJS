// Atividade 01
// Crie um arquivo JavaScript e implemente a função getValue que irá pegar
// o valor do input e exibi-lo no console.

function getValue(){
  var input = document.getElementById("user").value
  console.log(input)
  alert(input)
}

// Atividade 02
// Crie um arquivo JavaScript e implemente a função soma que irá
// pegar o valor de dois inputs e coloque em um parágrafo o valor que foi
// resgatado do input.

function somaNum(){
  console.log("working")
  var numero1 = Number(document.getElementById("inputNum1").value)
  var numero2 = Number(document.getElementById("inputNum2").value)
  var soma = numero1+numero2
  showResult(soma)
}

function showResult(soma){
  console.log("working")
  var resultado = document.getElementsByClassName("resultado")
  resultado[0].innerText = `Resultado e ${soma}`

}

// Atividade 03
// Crie um elemento através do JavaScript, adicione um texto a ele e insira ele
// no documento.

var newDiv = document.createElement("div")
var newparagrafo = document.createElement("p")
newDiv.appendChild(newparagrafo)

newparagrafo.classList.add("novaClasse")

var elemento =getElementsByClassName("novaClasse")

elemento[0].innerText = "Hadouken"




// Atividade 04

// Altere o atributo src de uma tag img para trocar a imagem que ele está
// apresentando através do JavaScript.

// Atividade 05
// Pegue todos os elementos li de dentro de uma ul que tiverem a classe item
// de dentro de uma ul.

// Atividade 06

// Crie uma função no JavaScript que irá trocar o texto de um elemento
// que está em uma lista ul.