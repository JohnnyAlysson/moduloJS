// Crie no seu HTML dois inputs do tipo "number" e um botão.
//  Quando clicado, o botão irá chamar uma função que calcula o IMC (Índice de Massa Corporal) e exibe o resultado na tela. 
//  Defina uma função que recebe os valores dos inputs (peso e altura), calcula o IMC e exibe o resultado na tela.

function calcularIMC(){
  const peso = document.getElementById('peso').value;
  const altura = document.getElementById('altura').value;
  const calc = peso/ ((altura/100)**2);
  document.getElementById('resultado').innerHTML = `Seu IMC é: ${calc}`;
  showStatus(calc)
}


function showStatus(calc){
    if (calc < 16){
        document.getElementById('status').innerHTML = `Voce está na magreza grave`;
      console.log("Voce está na magreza grave")
    }
    
    else if (16 >= calc && calc <= 16.9){
        document.getElementById('status').innerHTML = `Voce está na magreza moderada`;
              console.log("Voce está na magreza moderada")
            }
    else if (17 >= calc && calc <= 18.5){
        document.getElementById('status').innerHTML = `Voce está na magreza leve`;
      console.log("Voce está na magreza leve")
    }
    else if (18.6 >= calc && calc <= 24.9){
        document.getElementById('status').innerHTML = `Voce está no peso ideal`;
      console.log("Voce está no peso ideal")
    }
    else if (25 >= calc && calc <= 29.9){
        document.getElementById('status').innerHTML = `Voce está no sobre peso`;
      console.log("Voce está no sobre pese")
    }
    else if (30 >= calc && calc <= 34.9){
        document.getElementById('status').innerHTML = `Voce está no obesidade grau 1`;
      console.log("Voce está no obesidade grau 1")
    }
    else if (35 >= calc && calc <= 40){
        document.getElementById('status').innerHTML = `Voce está no obesidade grau 2`;
      console.log("Voce está no obesidade grau 2")
    }
    else if (calc > 40){
        document.getElementById('status').innerHTML = `Voce está no obesidade grave`;
      console.log("Voce está no obesidade grave")
    }
    else{
        document.getElementById('status').innerHTML = `INPUT INVÁLIDO`;
      console.log("INPUT INVALIDO")
    }

}