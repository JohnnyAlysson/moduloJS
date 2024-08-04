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

function addElement() {
  // Cria um novo elemento div
  const newDiv = document.createElement('div');

  // Adiciona texto ao novo elemento
  newDiv.innerText = 'Este é um novo elemento criado com JavaScript.';

  // Insere o novo elemento no documento
  const container = document.getElementById('container');
  container.appendChild(newDiv);
}

// Atividade 04

// Altere o atributo src de uma tag img para trocar a imagem que ele está
// apresentando através do JavaScript.
function changeImage(){
  let elementoImg = document.getElementById('img')
  elementoImg.setAttribute('src',"https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg")
}

// Atividade 05
// Pegue todos os elementos li de dentro de uma ul que tiverem a classe item
// de dentro de uma ul.

// note to self:  Seleciona todos os elementos <li> que têm a classe 'item' dentro de qualquer <ul>
const items = document.querySelectorAll('ul li.item');

const resultContainer = document.getElementById('result-container');

// note to self: Itera sobre os elementos selecionados e adiciona-os ao contêiner
items.forEach(item => {
    const newItem = document.createElement('p'); 
    newItem.textContent = item.textContent; 
    newItem.classList.add('highlight'); 
    resultContainer.appendChild(newItem); 
});


// Atividade 06

// Crie uma função no JavaScript que irá trocar o texto de um elemento
// que está em uma lista ul.

function changeTexto(){
  let elemento = document.getElementById("alteravel")

  elemento.innerText= "Novo texto"

}