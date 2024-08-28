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
  var conteudoForm = document.getElementById("conteudo");
  const textSpan = document.createElement("p");

  textSpan.textContent = conteudoForm.value;

  container.appendChild(textSpan);
  conteudoForm.value = '';
  console.log("Paragraph added");
}

// Atividade 03
// Crie uma paleta de cores usando botões coloridos. Quando um botão de
// cor é clicado, definir a cor de fundo do corpo da página para essa cor
// selecionada.

function estilizarBG(){
  let cor = document.getElementById("backgroundColorInput");
  let valorCor = cor.value;

  const pageBackgroundColor = document.getElementById("body")
  pageBackgroundColor.style.backgroundColor = valorCor;

  valorCor = ""
  console.log("working")
};
const estilizarbackground = document.getElementById("backgroundColorInput");
estilizarbackground.addEventListener('change',estilizarBG);



// Atividade 04

// Crie um gerador de citações que exibirá citações aleatórias na página.
// Cada vez que o usuário clicar em um botão  "Gerar Citação  "  , 
// uma citação aleatória será exibida, e o estilo da citação mudará dinamicamente. 
document.addEventListener('DOMContentLoaded', function() {
  function initializeApp() {
      fetch('citacoes.json')
          .then(response => response.json())
          .then(data => {
              // Armazenar citações
              const citacoes = data.citacoes;

              // Função para gerar uma citação aleatória
              function gerarCitacaoAleatoria() {
                  const index = Math.floor(Math.random() * citacoes.length);
                  const citacao = citacoes[index];
                  
                  const textoCitacao = document.getElementById('texto-citacao');
                  const autorCitacao = document.getElementById('autor-citacao');
                  const estiloCitacao = document.getElementById('estilo-citacao');
                  const divCitacao = document.getElementById('citacao');

                  if (textoCitacao) textoCitacao.textContent = citacao.texto;
                  if (autorCitacao) autorCitacao.textContent = `— ${citacao.autor}`;

                  // Atualizar o estilo da citação
                  if (estiloCitacao && divCitacao) {
                      const estilo = citacao.estilo;
                      const estiloString = `
                          font-family: ${estilo.fonte};
                          font-size: ${estilo.tamanhoFonte};
                          color: ${estilo.corTexto};
                          background-color: ${estilo.fundo};
                          margin: ${estilo.margem};
                          border: ${estilo.borda};
                          padding: ${estilo.padding};
                          border-radius: ${estilo.borderRadius};
                      `;
                      estiloCitacao.textContent = `#citacao { ${estiloString} }`;
                  }
              }

              // Adicionar o evento de clique ao botão
              const botaoGerarCitacao = document.getElementById('gerar-citacao');
              if (botaoGerarCitacao) {
                  botaoGerarCitacao.addEventListener('click', gerarCitacaoAleatoria);
              }
              
              // Gerar a primeira citação ao carregar
              gerarCitacaoAleatoria();
          })
          .catch(error => console.error('Erro ao carregar citações:', error));
  }

  initializeApp();
});

// Atividade 05
// Aprofunde seu conhecimento após dominar o evento 'click' , explorando  agora o ' mouseover ' 
//: pratique alternando a imagem  'lampada.jpg  '  para  'lampada-on.jpg  '  
//sempre que o mouse for posicionado sobre ela, conforme  o exemplo ilustrado abaixo. 

let light = document.getElementById("lightBulb")
let btn = document.getElementById("buttonTurnON")
let bodyElement = document.getElementById("body")
btn.addEventListener("mouseover",() =>{
  light.src ="../assets/off.png"
  bodyElement.classList.add("darkmode")
  console.log("working")
  
})
btn.addEventListener("mouseout",() =>{
  light.src ="../assets/on.png"
  bodyElement.classList.remove("darkmode")
  console.log("working")
})


// Atividade 06
// Crie um evento que receba os valores que foram digitados nos campos
// “inputValorA” e “inputValorB”. Para isto, você deverá criar uma variável
// chamada botaoCalculo e utilizar o document.getElementById para
// selecionar o id do botão(“calculo”).

let inputValorA = document.getElementById("valorA")
let inputValorB = document.getElementById("valorB")
let btnCalculo = document.getElementById("calculo")
let resultado = document.getElementById("resultado")


btnCalculo.addEventListener("click",()=>{
  let calculo = Number(inputValorA.value) + Number(inputValorB.value)


  resultado.textContent = calculo
  resultado.style.backgroundColor = "lightgreen";
  resultado.style.padding = "10px";
  resultado.style.border = "1px solid green";
  resultado.style.margin = "10px"
  console.log("working")
})



// Atividade 07
// Desenvolva uma interação dinâmica usando o evento mouseover. Crie
// uma div em seu arquivo HTML e, quando o cursor do mouse for movido
// sobre ela, o background da div deve mudar de cor. Ao retirar o cursor de
// cima da div, o background deve retornar à cor original. Utilize JavaScript
// para implementar essa funcionalidade e crie um efeito visual interessante
// ao alterar as cores.

let divCor = document.getElementById("notSure")
let btnCor = document.getElementById("changeColor")
btnCor.addEventListener("mouseover",() =>{
  divCor.style.backgroundColor = "lightgreen"

  console.log("working")
  
})
btnCor.addEventListener("click",() =>{
  divCor.style.backgroundColor = "lightblue"

  console.log("working")
  
})
btnCor.addEventListener("mouseout",() =>{
  divCor.style.backgroundColor ="white"

  console.log("working")
})