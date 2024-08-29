// Array de números
const numeros = [1, 2, 3, 4, 5];

// Função que multiplica cada número por 2
const multiplicarPorDois = numeros.map(multiplicar);

function multiplicar(numero){
  var number = numero * 2
  return number
}

// Função que calcula o quadrado de cada número
const calcularQuadrado = numeros.map(numero => numero ** 2);

// Exibindo os resultados
console.log("Array original:", numeros);
console.log("Cada número multiplicado por dois:", multiplicarPorDois);
console.log("Quadrado de cada número:", calcularQuadrado);