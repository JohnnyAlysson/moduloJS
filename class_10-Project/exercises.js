// ATIVIDADE PRÁTICA

// Atividade 01
// Crie um formulário com campos de nome, email e senha. Adicione um
// evento de submit ao formulário que valida se todos os campos foram
// preenchidos. Se não, exiba uma mensagem de erro.


function autenticar(username, password, email, onSuccess, onFailure){
  if (username === "usuario" && password === "senha123" && email === "hadouken@email.com") {
    onSuccess(username.toLowerCase());
    cleanForm();
    } 
  else {
    onFailure();
    cleanForm();
}
}

const loginSuccess = (username) => {
  const messageElement = document.getElementById('message');
  messageElement.textContent = `Login bem-sucedido! Bem-vindo, ${username}.`;
  messageElement.style.color = 'green';
}

const loginFailure = () => {
  const messageElement = document.getElementById('message');
  messageElement.textContent = 'Falha na autenticação. Por favor, verifique suas credenciais.';
  messageElement.style.color = 'red';
};

const submitForm = () => {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const email = document.getElementById('email').value;

  autenticar(username, password, email, loginSuccess, loginFailure);
}

const cleanForm = () =>{
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  let email = document.getElementById('email').value;

  username = "";
  password = "";
  email = "";
}



// Atividade 02
// Crie um formulário com um campo de texto e um botão. Ao clicar no
// botão, adicione um novo elemento à página com o texto digitado no
// campo de texto.

let addtextBTN = document.getElementById("addtextBTN")

addtextBTN.addEventListener("click",() =>{
  var container = document.getElementById("textContainer");
  var conteudoForm = document.getElementById("conteudo");
  const textSpan = document.createElement("p");

  textSpan.textContent = conteudoForm.value;

  container.appendChild(textSpan);
  conteudoForm.value = '';
  console.log("Paragraph added");
})



// Atividade 03
// Crie uma função que recebe um array de números e retorna a soma deles.

let sumBTN =document.getElementById("sumBTN");

sumBTN.addEventListener("click",() =>{
  let numeros = document.getElementById("numeros").value;
  console.log(numeros);
  let listaNumeros = numeros.split(",");
  console.log(listaNumeros);
  var sum = 0;
  for(var i = 0 ; i < listaNumeros.lenght; i++){
    sum += Number(listaNumeros[i]);
    console.log("working");
    console.log(listaNumeros[i],sum);
  }
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = sum;
  console.log("sum", sum);
})

// Atividade 04
// Crie uma função que calcula o Índice de Massa Corporal (IMC) e
// retorna se a pessoa está abaixo do peso, no peso ideal ou acima do
// peso.


//Realizado em outro arquivo, copiar link