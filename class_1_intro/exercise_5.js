/* 
Atividade 05
Crie um programa que solicite ao usuário que insira um valor em dólares
usando o prompt. Em seguida, converta esse valor para euros (1 dólar =
0,85 euros) e exiba o resultado no console.
*/
var money

money= prompt("How many Dollars do you have?")

var moneyNow = Number(money) * 0.85  //try to do with dynamic currency

console.log(`Now you have ${moneyNow} Euros`)


alert(`Now you have ${moneyNow} Euros`)
