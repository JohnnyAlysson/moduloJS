// // DESAFIO PRÁTICO
// // Crie um programa que apresente um menu com várias
// // opções de cálculos geométricos. O usuário deve ser
// // capaz de escolher uma opção e inserir os valores
// // necessários para realizar o cálculo correspondente.
// // Utilize condicionais para direcionar o programa com
// // base na escolha do usuário.
function showForm(formType) {
  var formHtml = '';
  switch (formType) {
      case 'triangulo':
          formHtml = `
              <h2>Área do Triângulo</h2>
              <label for="base">Base:</label>
              <input type="number" id="base" placeholder="Digite a base">
              <label for="altura">Altura:</label>
              <input type="number" id="altura" placeholder="Digite a altura">
              <button onclick="calcularTriangulo()">Calcular</button>
              <div id="resultado"></div>
          `;
          break;
      case 'retangulo':
        formHtml = `
              <h2>Área do retângulo</h2>
              <label for="base">Base:</label>
              <input type="number" id="base" placeholder="Digite a base">
              <label for="altura">Altura:</label>
              <input type="number" id="altura" placeholder="Digite a altura">
              <button onclick="calcularRetangulo()">Calcular</button>
              <div id="resultado"></div>
          `;
          break;

      case 'cubo':
        formHtml = `
              <h2>Área do cubo</h2>
              <label for="lado">Lado:</label>
              <input type="number" id="lado placeholder="Digite o lado>
              <button onclick="calcularCubo()">Calcular</button>
              <div id="resultado"></div>
          `;
          break;
            
      case 'circulo':
        formHtml = `
              <h2>Área do retângulo</h2>
              <label for="base">Base:</label>
              <input type="number" id="base" placeholder="Digite a base">
              <label for="altura">Altura:</label>
              <input type="number" id="altura" placeholder="Digite a altura">
              <button onclick="calcularRetangulo()">Calcular</button>
              <div id="resultado"></div>
          `;
          break;
    }
    document.getElementById('form-placement').innerHTML = formHtml;
  }




// // 1. Calcular Área do Triângulo
//     console.log("Calculo da area do triangulo:")
//     var base = prompt("Digite a base")
//     var altura = prompt("Digite a altura")
//     var calculo = (base*altura)/2
//     console.log(`area do triangulo e ${calculo}`)
//     break
// // 2. Calcular Área do Retângulo
//     console.log("Calculo da area do retangulo:")
//     var base = prompt("Digite a base")
//     var altura = prompt("Digite a altura")
//     var calculo = base*altura
//     console.log(`area do retangulo e ${calculo}`)
//     break
// // 3. Calcular Volume do Cubo
//     console.log("Calculo do volume do cubo:")
//     var lado = prompt("Digite o lado")
//     var calculo = lado**3
//     console.log(`o volume do cuboe e ${calculo}`)
//     break
// // 4. Calcular Área do Círculo
//     console.log("Calculo do circulo")
//     var raio = prompt("Digite o raio")
//     var calculo = 3.14 * (raio **2)
//     console.log(`area do raio e ${calculo}`)
//     break

// // 5. Sair
//     close
