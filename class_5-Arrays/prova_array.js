// Você foi convidado(a) a desenvolver um aplicativo web para ajudar a gerenciar as tarefas domésticas de uma família agitada.
//  O objetivo é criar um "Gerenciador de Tarefas Domésticas" que permita que todos os membros da família adicionem, 
//  removam e atualizem suas tarefas diárias, garantindo que tudo seja feito de forma organizada.


var array = []

function showAdd(){
  var formHtml = `
              <div class = "space">
              <h2>Qual tarefa gostaria de adicionar?</h2>
              <label for="word">tarefa:</label>
              <input type="text" id="word" placeholder="Digite a tarefa">
              <button onclick="addWord()"><i class="fa fa-plus" aria-hidden="true"></i> Adicionar</button>
              </div>
          `
  document.getElementById('form-placement').innerHTML = formHtml;
}

function showRemove() {
  let formHtml = `
    <div class="space">
      <h2>Qual tarefa gostaria de remover?</h2>
      <ul id="word-list">
  `;

  array.forEach((word, index) => {
    formHtml += `
      <li>
        ${word}
        <button onclick="removeWord(${index})"><i class="fa fa-minus" aria-hidden="true"></i> Remover</button>
      </li>
    `;
  });

  formHtml += `
      </ul>
    </div>
  `;
  
  document.getElementById('form-placement').innerHTML = formHtml;
}

function addWord(){
  const new_word= document.getElementById('word').value
  array.push(`${new_word}\n`)
  document.getElementById('array').innerHTML = array
}

function removeWord(index) {
  array.splice(index, 1);
  document.getElementById('array').innerHTML = array.join(', ');
  showRemove();
}

function clearArray() {
  array = [];
  document.getElementById('array').innerHTML = '';
  document.getElementById('form-placement').innerHTML = '';
}