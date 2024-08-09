// CLASS CHALLENGEtrocar a coor
// Utilizar o tipo color para 
function estilizarParagrafo(){
  let cor = document.getElementById("corInput");
  let valorCor = cor.value;

  const paragrafo = document.getElementById("paragrafo");
  paragrafo.style.color = valorCor;

  valorCor = ""
  console.log("working")
};

const estilizarBotao = document.getElementById("estilizarBotao");
estilizarBotao.addEventListener('click',estilizarParagrafo);

// Atividade 01
// Crie uma caixa de entrada de texto e um botão. Quando o botão é clicado,
// criar uma lista não ordenada (<ul>) e adicionar cada palavra digitada na
// caixa de entrada como um novo item da lista (<li>).
var lista = document.getElementById("taskList");
var conteudoForm = document.getElementById("task");
function addTask() {
  const newItem = document.createElement('li');
  const textSpan = document.createElement("span");

  textSpan.textContent = conteudoForm.value;

  newItem.appendChild(textSpan);

  lista.appendChild(newItem);
  conteudoForm.value = '';
  console.log("Task added");
}

// Atividade 02

// Crie um botão que, quando clicado, adiciona um novo parágrafo com um
// texto personalizado.


function addParagraph() {
  var container = document.getElementById("container");
  var conteudoForm = document.getElementById("task");
  const newItem = document.createElement('div');
  const textSpan = document.createElement("p");

  textSpan.textContent = conteudoForm.value;

  newItem.appendChild(textSpan);

  container.appendChild(newItem);
  conteudoForm.value = '';
  console.log("Paragraph added");
}

// Atividade 03
// Crie uma paleta de cores usando botões coloridos. Quando um botão de
// cor é clicado, definir a cor de fundo do corpo da página para essa cor
// selecionada.

// Atividade 04

// Crie um gerador de citações que exibirá citações aleatórias na página.
// Cada vez que o usuário clicar em um botão

// "Gerar Citação
// "
// , uma
// citação aleatória será exibida, e o estilo da citação mudará
// dinamicamente.

// Atividade 05
// Aprofunde seu conhecimento após dominar o evento
// '
// click'

// , explorando

// agora o
// '
// mouseover
// '
// : pratique alternando a imagem

// 'lampada.jpg
// '
// para

// 'lampada-on.jpg
// '
// sempre que o mouse for posicionado sobre ela, conforme

// o exemplo ilustrado abaixo.

// ATIVIDADE PRÁTICA

// Atividade 06
// Crie um evento que receba os valores que foram digitados nos campos
// “inputValorA” e “inputValorB”. Para isto, você deverá criar uma variável
// chamada botaoCalculo e utilizar o document.getElementById para
// selecionar o id do botão(“calculo”).


// Atividade 07
// Desenvolva uma interação dinâmica usando o evento
// '
// mouseover

// '. Crie
// uma div em seu arquivo HTML e, quando o cursor do mouse for movido
// sobre ela, o background da div deve mudar de cor. Ao retirar o cursor de
// cima da div, o background deve retornar à cor original. Utilize JavaScript
// para implementar essa funcionalidade e crie um efeito visual interessante
// ao alterar as cores.