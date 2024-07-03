// DESAFIO PRÁTICO  Você foi desafiado a criar um simulador de caixa eletrônico em JavaScript. 
// O programa deve permitir que o usuário interaja com sua conta bancária simulada, 
// realizando operações como verificar o saldo, fazer saques, fazer  depósitos e sair do programa.  
// Aqui estão os requisitos do programa: 

// O programa deve começar com um saldo inicial de $1000.  
// Utilize um loop while para manter o programa em execução  até que o usuário escolha sair. 

// A cada iteração do loop, o programa deve exibir um menu com as seguintes opções:  
// Ver Saldo - Fazer Saque - Fazer Depósito - Sair  
// Se o usuário escolher  "Ver Saldo " , o programa  deve exibir o saldo atual.  
// Se o usuário escolher  "Fazer Saque " , o programa deve solicitar o valor do saque. 
// Certifique-se de validar se o valor é numérico,  maior que zero e não excede o saldo  disponível. 
// Se a validação for bem-sucedida, atualize o saldo e exiba uma mensagem  indicando o sucesso da transação.  

// Se o usuário escolher  "Fazer Depósito " , o programa deve solicitar o valor do depósito. 
// Certifique-se de validar se o valor é numérico e maior que zero. Se a validação for bem sucedida,  
// atualize o saldo e exiba uma mensagem indicando o sucesso da transação.  

// Se o usuário escolher  "Sair " , encerre o programa  exibindo uma mensagem de despedida. 
// Se o usuário escolher uma opção inválida, exiba uma mensagem indicando isso e permita que o  usuário faça uma nova escolha.


// // Codigo original:
// var saldo = 1000;
// var extrato = '' ;
// var now ;

// alert("Simulador de caixa eletrônico")
// while(true){
//   var user = prompt(`
//     Escolha uma opção:
//     1 - Ver saldo;
//     2 - Fazer saque;
//     3 - Fazer depósito;
//     4 - Extrato
//     0 - Sair;
//     `)
//   if (user == "0"){
//     break
//   }
//   switch(user){
//     case "1":
//       alert(`Seu saldo é atual é : ${saldo}`)
//       console.log(`Seu saldo é atual é : ${saldo}`)
//       continue

//     case "2":
//       var saque = Number(prompt(" 2-Quanto você gostaria de sacar?"))
//       if(saque > 0 && saque < saldo){
//         saldo = saldo - saque
//         alert("Saque realizado com sucesso")
//         now = new Date()
//         extrato = extrato + `\n${now} = - ${saque} `
//       }
//       else if(saque > saldo){
//         alert("Saldo insuficiente")
//       }
//       else{
//         alert("Input Inválido, tente novamente")
//       }
//       continue

//       case "3":

//       var deposito = Number(prompt(" 3-Quanto você gostaria de depositar?"))
//       if(deposito > 0){
//         saldo = saldo + deposito
//         alert("Deposito realizado com sucesso")
//         now = new Date()
//         extrato = extrato + `\n${now} = - ${deposito} `
//       }
//       else{
//         alert("Input Inválido, tente novamente")
//       }
//       continue

//     case "4":

//       alert(`Extrato completo:
//         ${extrato}
//         Saldo atual :${saldo}
//         `)
//       console.log(`Extrato completo:
//         ${extrato}
//         Saldo atual :${saldo}
//         `)
//       continue

//     default:
//       alert("Opção inválida tente novamente")
//       console.log("Opção inválida tente novamente")
//       continue

//   }
// }

// alert("Fim do programa")
// console.log("Fim do programa")

//Codigo 2.0:
var saldo = 1000;
var extrato = '' ;
var now ;


function showForm(formType) {
  var formHtml = '';
  switch (formType) {
      case 'saldo':
          formHtml = `
              <h2>Saldo disponível:</h2>
              <div class = "saldo"><div id="resultado">R$ </div></div>
              <button onclick="mostrarSaldo()">Clique para ver seu saldo</button>
          `;
          break;
      case 'deposito':
        formHtml = `
              <h2>Fazer depósito:</h2>
              <label for="deposito">Quanto gostaria de depositar?</label>
              <input type="number" id="deposito" placeholder="Digite o valor">
              <button onclick="depositar()">Depositar</button>
              <div id="resultado"></div>
          `;
          break;

      case 'saque':
        formHtml = `
              <h2>Realizar Saque:</h2>
              <label for="saque">Quanto gostaria de sacar?</label>
              <input type="number" id="saque" placeholder="Digite o valor">
              <button onclick="sacar()">Sacar</button>
              <div id="resultado"></div>
          `;
          break;

      case 'extrato':
        formHtml = `
              <h2>Extrato completo:</h2>
              <button onclick="mostrarExtrato()">Mostrar Extrato</button>
              <div id="resultado"></div>
          `;
          break;
    }
    document.getElementById('form-placement').innerHTML = formHtml;
  }


function mostrarSaldo(){
  document.getElementById('resultado').innerHTML = `R$ ${saldo}`;
}

function depositar(){
  const deposito = Number(document.getElementById('deposito').value);
  if(deposito > 0){
    saldo = saldo + deposito
    alert("Deposito realizado com sucesso")
    document.getElementById('resultado').innerHTML = `Deposito realizado com sucesso`;
    now = new Date()
    extrato = extrato + `\n${now} = + ${deposito}\n `
  }
  else{
    alert("Input Inválido, tente novamente")
    document.getElementById('resultado').innerHTML = `Input Inválido, tente novamente`;
  }
}

function sacar(){
  const saque = Number(document.getElementById('saque').value);
  if(saque > 0 && saque < saldo){
    saldo = saldo - saque
    alert("Saque realizado com sucesso")
    document.getElementById('resultado').innerHTML = `Saque realizado com sucesso`;
    now = new Date()
    extrato = extrato + `\n${now} = - ${saque}\n `
  }
  else if(saque > saldo){
    alert("Saldo insuficiente")
  }
  else{
    alert("Input Inválido, tente novamente")
    document.getElementById('resultado').innerHTML = `Input Inválido, tente novamente`;
  }
}
function mostrarExtrato(){
  document.getElementById('resultado').innerHTML = `Extrato completo:\n ${extrato}\n Saldo atual :${saldo}`;
}


function sair(){
  document.getElementById('form-placement').innerHTML = ``;
}