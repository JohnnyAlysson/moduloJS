/* 
Atividade 4
Crie um programa que solicite ao usuário que insira o raio de um círculo
usando o prompt e, em seguida, calcule e exiba a área do círculo usando o
console.
*/
var radius
const pi = 3.14


radius= prompt("What is the radius of the circle? ")

var area = pi *(Number(radius)**2)

console.log(`The area of the circle with the radius of ${radius} is ${area}`)


alert(`The area of the circle with the radius of ${radius} is ${area}`)
