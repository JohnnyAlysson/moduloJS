
// Atividade 01:

// Suponha que você está desenvolvendo um formulário web e
// deseja validar os dados inseridos pelo usuário. Utilize os blocos
// try e catch para garantir que os dados sejam processados
// corretamente e para mostrar mensagens de erro amigáveis
// quando ocorrerem erros de validação.

let submitBTN = document.getElementById("submitBTN");

submitBTN.addEventListener("click", () => {
  const user = document.getElementById("usuario").value;
  
  try {
    if (!user) {
      throw new Error("Usuário não pode estar vazio");
    }
    alert("Dados processados com sucesso!");
  } catch (error) {
    alert(error.message);
  }
});

//  Atividade 2
//Você está desenvolvendo um aplicativo que responde a
// eventos do usuário, como cliques em botões. Utilize blocos try
// e catch para lidar com exceções que podem ocorrer dentro
// dos event listeners e garantir que a aplicação continue
// respondendo.

let clickBTN = document.getElementById("cliqueBTN")
let resultado = document.getElementById("acaoBTN")

clickBTN.addEventListener("click",()=>{
  try{
    resultado.innerHTML = "Botao foi clicado"
  }
  catch{
    resultado.innerHTML = "Erro ao clicar no botao"
  }
})

clickBTN.addEventListener("mouseover",()=>{
  try{
    clickBTN.style.scale = 2.0
    clickBTN.style.transition = "ease-in-out 0.2s"
    resultado.innerHTML = "Mouse passando por cima"
  }
  catch{
    resultado.innerHTML = "Erro ao passar o mouse por cima"
  }
})

clickBTN.addEventListener("mouseout",()=>{
  try{
    clickBTN.style.scale = 1.0
    clickBTN.style.transition = "ease-in-out 0.2s"
    resultado.innerHTML = "Mouse saiu de cima"
  }
  catch{
    resultado.innerHTML = "Erro ao sair"
  }
})


// Atividade 03:

// Crie um formulário de cadastro para uma empresa que tem
// lojas espalhadas por todo o país. O formulário deve solicitar o
// nome da loja, a cidade e o valor total vendido no mês. Utilize
// uma estrutura “try/catch/throw/finally” para testar as seguintes
// regras:
// Se todos os campos estão preenchidos.
// Se o valor total de venda é maior ou igual a zero.

let nomeLoja  = document.getElementById("nomeLoja")
let cidade  = document.getElementById("cidade")
let valorTotal  = document.getElementById("valorTotal")
let submitForm = document.getElementById("submitForm")


submitForm.addEventListener("click",(e)=>{
  e.preventDefault()
  if (nomeLoja.value == ""|| cidade.value == ""|| valorTotal.value ==""){
    throw("Todos os campos devem estar preenchidos")
  }

  if(valorTotal.value <= 0){
    throw("Valo deve ser maior que zero")
  }

  try{
    alert("Dados cadastrados com sucesso")
    createBtn()
  }
  catch{
    console.log("Erro ao cadastrar usuario")
  }
  finally{
    console.log("Codigo executado, resetando valores")
    nomeLoja.value = ""
    cidade.value = ""
    valorTotal.value = ""
  };
})

// Atividade 04

// Exiba uma mensagem no formulário informando qualquer erro ou
// regra desobedecida. Ao final da validação, exiba um botão que
// recarrega a página.
// Importante: o botão só deve aparecer ao final da validação (antes
// disso, deve permanecer oculto).

function createBtn(){
  console.log("adding button")
  const newBTN = document.createElement("button")
  newBTN.id = "reloadBTN"
  newBTN.innerHTML = "Reload Button";
  document.body.appendChild(newBTN);
  let reloadBTN = document.getElementById("reloadBTN");
  reloadBTN.addEventListener("click",()=>{
    console.log("reloading...")
    location.reload()
  
  });
};




