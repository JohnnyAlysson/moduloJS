// // DESAFIO PRÁTICO
// // Crie um programa que apresente um menu com várias
// // opções de cálculos geométricos. O usuário deve ser
// // capaz de escolher uma opção e inserir os valores
// // necessários para realizar o cálculo correspondente.
// // Utilize condicionais para direcionar o programa com
// // base na escolha do usuário.

function showForm(formType) {
  let formHtml = '';
  switch (formType) {
      case 'triangulo':
          console.log("teste")
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
              <h2>Área do Retângulo</h2>
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
              <h2>Volume do Cubo</h2>
              <label for="lado">Lado:</label>
              <input type="number" id="lado" placeholder="Digite o lado">
              <button onclick="calcularCubo()">Calcular</button>
              <div id="resultado"></div>
          `;
          break;
      case 'circulo':
          formHtml = `
              <h2>Área do Círculo</h2>
              <label for="raio">Raio:</label>
              <input type="number" id="raio" placeholder="Digite o raio">
              <button onclick="calcularCirculo()">Calcular</button>
              <div id="resultado"></div>
          `;
          break;
  }
  document.getElementById('form-placement').innerHTML = formHtml;
}

function calcularTriangulo() {
  const base = document.getElementById('base').value;
  const altura = document.getElementById('altura').value;
  const area = (base * altura) / 2;
  document.getElementById('resultado').innerHTML = `Área do Triângulo: ${area}`;
}

function calcularRetangulo() {
  const base = document.getElementById('base').value;
  const altura = document.getElementById('altura').value;
  const area = base * altura;
  document.getElementById('resultado').innerHTML = `Área do Retângulo: ${area}`;
}

function calcularCubo() {
  const lado = document.getElementById('lado').value;
  const volume = lado ** 3;
  document.getElementById('resultado').innerHTML = `Volume do Cubo: ${volume}`;
}

function calcularCirculo() {
  const raio = document.getElementById('raio').value;
  const area = 3.14 * (raio ** 2);
  document.getElementById('resultado').innerHTML = `Área do Círculo: ${area}`;
}

function sair(){
    document.getElementById('form-placement').innerHTML = ``;
}