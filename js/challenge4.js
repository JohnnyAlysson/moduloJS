// // Crie um array chamado animais contendo os seguintes elementos,
// // Cachorro, Gato, Papagaio. Em seguida:

// var animais = ["Cachorro", "Gato", "Papagaio"]
// alert(animais)

// // 1 - Adicione o elemento Tartaruga ao final do array
// animais.push("Tartaruga")
// alert(animais)
// // 2 - Remova o primeiro elemento e adicione o elemento Coelho no
// // início.
// animais.shift()
// animais.unshift("Coelho")
// alert(animais)
// // 3 - Depois, substitua o elemento na posição 2 por Hamster.
// animais.splice(1,1,"Hamster")
// alert(animais)
// // 4 - Exiba o comprimento atual do array.
// alert(animais.length)
// // 5 - Acesse e exiba no console o elemento na posição 1.
// console.log(animais[0])
// alert(animais[0])
// // 6 - Finalmente, exiba o array final no console.
// console.log(animais)
// alert(animais)

// // Objetivo: Praticar operações básicas de criação, acesso e
// // modificação de elementos em arrays.

// // Estrutura:
// // Crie um array chamado cores contendo as seguintes cores,
// // Vermelho, Verde, Azul.
// var cores = ["Vermelho", "Verde", "Azul"]
// alert(cores)

// // 1 - Adicione as cores Amarelo e Roxo ao final do array.
// cores.push("Amarelo","Roxo")
// alert(cores)
// // 2 - Em seguida, remova a última cor.
// cores.pop()
// alert(cores)
// // 3 - Use o método splice para remover "Verde" e adicionar "Laranja"
// // e "Marrom" em seu lugar.
// cores.splice(1,2,"Laranja","Marrom")
// alert(cores)
// // 4 - Crie um novo array chamado novasCores contendo as primeiras
// // duas cores do array cores.
// var novasCores = cores.slice(0,2)
// alert(novasCores)
// // 5 - Use o método join para criar uma string com todas as cores do
// // array cores, separadas por uma vírgula.
// var todasCores = cores.join(", ")
// // 6 - Inverta a ordem dos elementos no array cores.
// cores.reverse
// alert(cores)
// // 7 - Exiba os arrays cores e novasCores, e a string resultante no
// // console.
// console.log(cores)
// console.log(novasCores)
// console.log(todasCores)


// REAL CHALLENGE:
// Criar programa para manipular arrays com interaface grafica

var array = []

function showAdd(){
  var formHtml = `
              <div class = "space">
              <h2>Qual palavra gostaria de adicionar?</h2>
              <label for="word">Palavra:</label>
              <input type="text" id="word" placeholder="Digite a palavra">
              <button onclick="addWord()"><i class="fa fa-plus" aria-hidden="true"></i> Adicionar</button>
              </div>
          `
  document.getElementById('form-placement').innerHTML = formHtml;
}

function showRemove(){
  var formHtml = `
              <div class = "space">
              <h2>Qual palavra gostaria de remover?</h2>
              <label for="word">Palavra:</label>
              <input type="text" id="word" placeholder="Digite a palavra">
              <button onclick="addWord()"><i class="fa fa-plus" aria-hidden="true"></i> Adicionar</button>
              </div>
          `
  document.getElementById('form-placement').innerHTML = formHtml;
}


function addWord(){
  const new_word= document.getElementById('word').value
  alert(new_word)
  array.push(` ${new_word}`)
  document.getElementById('array').innerHTML = array
}
