// "id":1,
// "username":"admin",
// "email":"teste@email.com",
// "password" : "senha123"


let currentUser = null

function autenticar(username, password){
  return fetch('data/credentials.json')
  .then(response => response.json())
  .then(users => {
    const user = users.find(u => u.username === username && u.password ===password);
    if(user){
      currentUser = user;
      localStorage.setItem('isLogggedIn','true');
      localStorage.setItem('currentUser',JSON.stringify(user))
      alert("login bem sucedido")
      window.location.href = 'taskmanager.html';
      return user
    }
    throw new Error('Usuário ou senha inválidos')
    loginFailure()
  })
}

function isLoggedIn(){
  return localStorage.getItem('isLoggedIn') === 'true'
}

function getCurrentUser(){
  if(isLoggedIn()){
    if (!currentUser){
      currentUser = JSON.parse(localStorage.getItem('currentUser'))
    }
    return currentUser;
  }
  return null
}

const loginFailure = () => {
  const messageElement = document.getElementById('message');
  messageElement.textContent = 'Falha na autenticação. Por favor, verifique suas credenciais.';
  messageElement.style.color = 'red';
};

const submitForm = () => {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  autenticar(username, password);
}

