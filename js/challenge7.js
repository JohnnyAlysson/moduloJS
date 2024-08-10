  // DESAFIO PRÁTICO AULA 8 Dom 1

  // Crie uma página HTML com uma caixa de entrada (input), um botão  "Adicionar Tarefa  "  e uma lista de  tarefas (ul).  
  // Escreva funções em JavaScript para realizar as  seguintes operações:  
  
  // - Adicionar uma nova tarefa à lista quando o botão  "Adicionar Tarefa  " for clicado. 
  // - Marcar uma tarefa como concluída quando ela for  clicada.  
  // - Remover uma tarefa da lista quando um botão de  exclusão associado a ela for clicado.

  // Cada tarefa na lista deve ter um checkbox para indicar  se está concluída e um botão de exclusão para remover  a tarefa.  
  // Adicione estilos CSS para melhorar a aparência da lista  de tarefas.  
  // Dicas:  Use o método document.createElement para criar  elementos (li, input, button) dinamicamente.  
  // Ao marcar uma tarefa como concluída, modifique  seu estilo visualmente   (por exemplo, alterando a  cor ou adicionando uma classe CSS).  
  // Considere armazenar as tarefas em uma estrutura  de dados, como um array, para facilitar a  manipulação.
  var lista = document.getElementById("taskList");
  var conteudoForm = document.getElementById("task");
  
  function addTask() {
      const newItem = document.createElement('li');
      const buttonDelete = document.createElement("button");
      const checkbutton = document.createElement("input");
      const textSpan = document.createElement("span");
  
      buttonDelete.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
      buttonDelete.classList.add('deleteBTN');
      buttonDelete.onclick = function() {
          deleteTask(this);
      };
  
      checkbutton.type = "checkbox";
      checkbutton.onchange = function() {
          toggleStrikethrough(this);
      };
  
      textSpan.textContent = conteudoForm.value;
  
      newItem.appendChild(checkbutton);
      newItem.appendChild(textSpan);
      newItem.appendChild(buttonDelete);
  
      lista.appendChild(newItem);
      conteudoForm.value = '';
      console.log("Task added");
  }
  
  function deleteTask(button) {
      const listItem = button.parentNode;
      lista.removeChild(listItem);
      console.log("Task deleted");
  }
  
  function toggleStrikethrough(checkbox) {
      const textSpan = checkbox.nextElementSibling;
      if (checkbox.checked) {
          textSpan.style.textDecoration = "line-through";
      } else {
          textSpan.style.textDecoration = "none";
      }
      console.log("Strikethrough toggled");
  }