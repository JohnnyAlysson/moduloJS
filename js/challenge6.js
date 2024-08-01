// DESAFIO PRÁTICO

// Você está desenvolvendo um sistema de
// autenticação para um aplicativo. Sua
// tarefa é implementar uma função

// chamada autenticarUsuario que aceita
// um nome de usuário, uma senha e duas
// funções de callback como argumentos. A
// função autenticarUsuario deve simular um
// processo de autenticação simples, onde o
// nome de usuário e a senha são
// verificados.

// Se as informações forem válidas, a primeira
// função de callback deve ser chamada e mostrar
// uma frase de login com o nome de usuário em
// letras minúsculas. Caso contrário, a segunda
// função de callback deve ser chamada para

// indicar a falha na autenticação..

//Senhas e usuario hipoteticos armazernar senha em variaveis e inseguro e pode causar problemas
function autenticarUsuario(username, password, onSuccess, onFailure){
  const validUsername = 'usuario'
  const validPassword = 'senha123'
  if (username === validUsername && password === validPassword) {
    onSuccess(username.toLowerCase())
  } 
  else {
    onFailure()
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
  const username = document.getElementById('username').value
  const password = document.getElementById('password').value

  autenticarUsuario(username, password, loginSuccess, loginFailure)
}

