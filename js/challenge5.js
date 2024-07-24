// Faça um programa que implemente um jogo de Craps. 
// O jogador lança um par de dados, obtendo um valor entre 2 e 12. 
// Se, na primeira jogada, você tirar 7 ou 11, você um " natural" e ganhou. Se você tirar 2, 3 ou 12 na primeira jogada, isto é chamado de " craps " e você perdeu. Se, na primeira jogada,
//  você fez um 4, 5, 6, 8, 9 ou 10,este é seu
//  "Ponto ". Seu objetivo agora é continuar jogando os dados até tirar este número novamente. 
// Você perde, no entanto, se tirar um 7 antes de tirar este Ponto novamente.
alert("Jogo de craps")

var jogada = []

function rollDice(){
  var dado_1 = Math.floor(Math.random()*6)+1;
  var dado_2 = Math.floor(Math.random()*6)+1;

  console.log(dado_1)
  console.log(dado_2)

  var result = dado_1 + dado_2

  jogada.push(result)
  alert(`Resultado da rolagem: ${result}`)

  console.log(jogada)

  if (jogada[0]== 7 || jogada[0]== 11){
    alert(`Voce e natural e venceu parabens, vamos reniciar o jogo!`)
    location.reload()
  }
  else if(jogada[0]== 2 || jogada[0]== 3 || jogada[0]== 12){
    alert(`CRAPS voce perdeu pois tirou ${result} tente novamente`)
    location.reload()
  }
  else if(result == 7 ){
    alert(`CRAPS voce perdeu pois tirou um 7 antes do ponto ${jogada[0]}, tente novamente`)
    location.reload()  
  }

  else if(result ==jogada[0] && jogada.includes(result, 1)== true){
    alert(`Parabens voce acertou o ponto ${jogada[0]}!`)
    location.reload()
  }
}





