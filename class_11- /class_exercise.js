const botao = document.getElementById("meuBotao");
const mensagemParagrafo = document.getElementById("mensagem");

botao.addEventListener("click", ()=>{
  mensagemParagrafo.innerHTML = "Ola fulano"
});
botao.addEventListener("mouseover", ()=>{
  mensagemParagrafo.innerHTML = "teste"
});
botao.addEventListener("mouseout", ()=>{
  mensagemParagrafo.innerHTML = "saindo"
});


const input = document.getElementById("meuInput")
input.addEventListener('input', (event) =>{
  console.log(`texto digitado foi : ${event.target.value}`)
});

const novoDiv = document.createElement("div");

novoDiv.textContent = "Este e um novo elemento div.";
novoDiv.style.backgroundColor = "lightblue";
novoDiv.style.padding = "10px";
novoDiv.style.border = "1px solid blue";
novoDiv.style.marginTop = "10px"

const conteudo = document.getElementById("conteudo");
conteudo.appendChild(novoDiv);


function criar(){
  let box = document.querySelector(".box")
  box.style.width= "100px";
  box.style.height= "100px";
  box.style.background= "#f98";
  box.style.color= "#f98";
  box.style.marginTop = "10px"
  box.style.borderRadius = "50%"
};

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