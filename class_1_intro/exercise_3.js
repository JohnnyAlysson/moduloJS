/* 
Atividade 03
Peça ao usuário para digitar sua idade usando o prompt e, em seguida,
calcule e exiba o ano de nascimento com uma frase personalizada usando
o console.
*/
var age
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
console.log(currentYear);

age= prompt("type your age:")

var birth = currentYear - age

console.log(`You were born in ${birth}`)


alert(`You were born in ${birth}`)
