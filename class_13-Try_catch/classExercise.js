
// let num = 1;
// try {
//   num.toUpperCase();  // não tem como usar o toUpperCase em numeros
// } 
// catch (err) {
//   alert(err.name);
// }  


// try {
// const valor = 10 / 2;  // Isso vai lançar uma exceção de 'Divisão por zero'
// console.log("Valor:", valor);  // Esta linha não será executada devido à exceção
// } 
// catch (erro) {
// console.error("Ocorreu um erro:", erro.message);  // Saída: Ocorreu um erro: Divisão por zero
// } 
// finally {
// // Saída: Este código é executado independentemente de exceções.
// console.log("Este código é executado independentemente de exceções.");
// }



  function validarIdade(idade) {
    if (typeof idade !== 'number' || idade < 0) {
      throw "A idade deve ser um número positivo.";
    }
    if (idade < 18) {
      throw "Você é menor de idade e não pode acessar este conteúdo.";
    }
    console.log("Acesso permitido. Bem-vindo!");
  }

  try {
    validarIdade(21);  // Tente alterar a idade para ver diferentes cenários
  } 
  catch (erro) {
    console.error("Ocorreu um erro:", erro);  // Aqui, usamos diretamente 'erro' sem acessar 'erro.message'
  }

