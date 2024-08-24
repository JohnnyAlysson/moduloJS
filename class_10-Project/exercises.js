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



// Atividade 03
// Crie uma função que recebe um array de números e retorna a soma deles.

// Atividade 04
// Crie uma função que calcula o Índice de Massa Corporal (IMC) e
// retorna se a pessoa está abaixo do peso, no peso ideal ou acima do
// peso.