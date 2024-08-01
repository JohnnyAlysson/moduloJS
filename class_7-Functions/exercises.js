// Atividade 01
// Crie uma arrow function chamada multiplicar que recebe dois
// números como argumentos e retorna o resultado da multiplicação
// desses números.

const multiply = (a,b) => a * b
console.log(`${multiply(3,3)}`)

// // // // // // // // // // // // // // // // // // // // // // // // // // 
// Atividade 02
// Crie uma arrow function chamada contarVogais que recebe uma
// string como argumento e retorna a quantidade de vogais na string.


const contarVogais = str => {
  let count = 0;
  const vogais = 'aeiouAEIOU';
  for (let char of str) vogais.includes(char) && count++;
  return count;
};
contarVogais("johnny")

// Atividade 03
// Crie uma função chamada converterTemperatura que recebe uma
// temperatura em graus Celsius e uma função de callback para conversão
// como argumentos. A função deve aplicar a função de callback à
// temperatura e retornar o resultado.

function converterTemperatura(celcius){
  return newtemp = (celcius*9/5)+32
}

console.log(converterTemperatura(36))

function chamadaCallback(){
  var calc = prompt(`Digite a temperatura em celcius`)
  console.log(converterTemperatura(calc))
}

chamadaCallback()


// Atividade 04
// Implemente uma função (callback) que receba um número como
// parâmetro e informe o cubo desse número

// function saudacao(nome){
//   alert(`Ola ${nome}`)
// }

// function chamadaCallback(callback){
//   var nome = prompt(`Digite seu nome aqui:`)
//   callback(nome)
// }

// chamadaCallback(saudacao)

var user = prompt("Digite um numero")
const cubo = x => x ** 3;

function imprimirResultado(value){
  console.log(cubo(value))
  
}

imprimirResultado(3)



// Atividade 05
// Crie uma função que aceita um número e retorna uma função que, por sua
// vez, aceita outro número e retorna a soma dos dois.

var num = 2


function num1(a){
  var num2 = 4
  return soma(a,num2)
}

function soma(a,b){
  return a + b
}

console.log(num1(num))

// Atividade 06
// Crie uma função chamada operacoesMatematicas que recebe dois
// números e uma função de callback como argumentos. A função deve
// aplicar a função de callback aos dois números e retornar o resultado.


