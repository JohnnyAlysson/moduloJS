// Atividade 01
// Faça um programa que mostre na tela o dobro de cada número do
// seguinte array [50, 45, 67, 89, 10, 5].
const numbers = [50, 45, 67, 89, 10, 5];

const original = document.getElementById("arrayOriginal");
const modificado = document.getElementById("arrayModificado");


const multiplyByTwo = numbers.map(multiply);

function multiply(number){
  var newNumber = number * 2
  return newNumber
};

original.innerText = numbers;
modificado.innerText = multiplyByTwo;



// Atividade 02
// Faça um Programa que mostre na tela apenas os número pares do
// seguinte array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const original2 = document.getElementById("arrayOriginal2");
const modificado2 = document.getElementById("arrayModificado2");


const even = numbers2.filter(filterEven);

function filterEven(number2){
  if (number2 % 2 ===0){
    return number2
  }  
};

original2.innerText = numbers2;
modificado2.innerText = even;


// Atividade 03
// Faça um Programa que calcule a soma de todos os números do seguinte
// array [1, 2, 3, 4, 5, 6].

const number3 = [1, 2, 3, 4, 5, 6];

const original3 = document.getElementById("arrayOriginal3");
const modificado3 = document.getElementById("arrayModificado3");


const sum = number3.reduce(reduceSum);

function reduceSum(acumulator,number3){
  return acumulator + number3

};

original3.innerText = number3;
modificado3.innerText = sum;

// Atividade 04

// Dada uma lista de números imprima cada elemento elevado ao
// quadrado.

// Get DOM elements
const inputElement = document.getElementById("inputNumber");
const btn = document.getElementById("confirmBTN");
const original4 = document.getElementById("arrayOriginal4");
const modificado4 = document.getElementById("arrayModificado4");

// Add click event listener to the button
btn.addEventListener("click", () => {
    // Get input value and convert to array of numbers
    const inputValue = inputElement.value.trim();
    const numbers4 = inputValue.split(',').map(num => Number(num.trim()));

    // Calculate squares
    const squares = numbers4.map(number => number ** 2);

    

    // Display results
    original4.innerText = numbers4.join(', ');
    modificado4.innerText = squares.join(', ');
});

// Atividade 05
// Dada uma lista de strings, use a função map para criar uma nova lista
// onde cada string é convertida para maiúsculas.

const inputElementText = document.getElementById("inputText");
const btn2 = document.getElementById("confirmBTN2");
const original5 = document.getElementById("arrayOriginal5");
const modificado5 = document.getElementById("arrayModificado5");

btn2.addEventListener("click", () => {
    
    const inputValue = inputElementText.value.trim();
    const newText = inputValue.split(',');

    const upper = newText.map(toUpper);

    function toUpper(text){
      let newText = text.toUpperCase()
      return newText
    };


    original5.innerText = newText.join(', ');
    modificado5.innerText = upper.join(', ');
});



// Atividade 06
// Dada uma lista de strings, use a função filter para criar uma nova lista
// contendo apenas as palavras que têm mais de 5 caracteres.

const inputElementArray = document.getElementById("inputArray");
const btn3 = document.getElementById("confirmBTN3");
const original6 = document.getElementById("arrayOriginal6");
const modificado6 = document.getElementById("arrayModificado6");

btn3.addEventListener("click", () => {

    console.log("working")
    
    const inputValue = inputElementArray.value.trim();
    const newText = inputValue.split(',');

    const upper = newText.filter(five);

    function five(text){
      if (text.length > 5){
      return text
      }
    };


    original6.innerText = newText.join(', ');
    modificado6.innerText = upper.join(', ');
});