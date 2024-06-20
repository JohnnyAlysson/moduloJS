// DESAFIO PRÁTICO

// Crie um programa que apresente um menu com várias
// opções de cálculos geométricos. O usuário deve ser
// capaz de escolher uma opção e inserir os valores
// necessários para realizar o cálculo correspondente.
// Utilize condicionais para direcionar o programa com

// base na escolha do usuário.

// Opções do Menu:

// 1. Calcular Área do Triângulo
// 2. Calcular Área do Retângulo
// 3. Calcular Volume do Cubo
// 4. Calcular Área do Círculo

// 5. Sair

var choice = Number(prompt(`
  Digite sua escolha:

  1. Calcular Área do Triângulo
  2. Calcular Área do Retângulo
  3. Calcular Volume do Cubo
  4. Calcular Área do Círculo

  0. Sair
`))

switch(choice){
  case 1:
    console.log("Calculo da area do triangulo:")
    var base = prompt("Digite a base")
    var altura = prompt("Digite a altura")
    var calculo = (base*altura)/2
    console.log(`area do triangulo e ${calculo}`)
    break
  case 2:
    console.log("Calculo da area do retangulo:")
    var base = prompt("Digite a base")
    var altura = prompt("Digite a altura")
    var calculo = base*altura
    console.log(`area do retangulo e ${calculo}`)
    break
  case 3:
    console.log("Calculo do volume do cubo:")

    var lado = prompt("Digite o lado")
    var calculo = lado**3
    console.log(`o volume do cuboe e ${calculo}`)
    break
  case 4:
    console.log("Calculo do circulo")
    var raio = prompt("Digite o raio")
    var calculo = 3.14 * (raio **2)
    console.log(`area do raio e ${calculo}`)
    break
  case 0:
    break

}