/* 
Atividade 06
Peça ao usuário que insira um preço de um produto usando o prompt. Em
seguida, aplique um desconto de 10% a esse preço e exiba o preço com
desconto no console.
*/

var price
var discountedPrice

price= prompt("Type the price of the product")

discountedPrice = price- ((price *10) /100)

console.log(`The price with the discout is ${discountedPrice}`)
alert(`The price with the discout is ${discountedPrice}`)
