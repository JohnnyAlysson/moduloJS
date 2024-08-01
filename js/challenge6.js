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

function autenticarUsuario(usuario,senha,sucesso,falha){
  if (usuario == usuarioDB && senha == senhaDB){
    return sucesso()
  }
  else if (usuario != usuarioDB && senha != senhaDB){
    return falha()
  }
}

const sucesso = () => alert(`Usuário logado com sucesso\n Seja bem vindo ${usuario}`)
const falha = () => alert(" Falha na autenticação..")