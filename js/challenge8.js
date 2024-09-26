  // DESAFIO PRÁTICO Aula 9 DOM 2

// Imagine que você está construindo um menu de
// navegação para um site. Cada item do menu é representado por um link 
// em uma lista não ordenada (ul) com a classe ' menu-item '. 
// Ao passar o mouse sobre cada item do menu, você deseja que o texto fique em 
// negrito e a cor de fundo mude para destacar a seleção. Além disso, quando o 
// mouse sair do item do menu, tanto o negrito quanto a cor de fundo devem ser 
// restaurados. Utilize o evento ' mouseover ' e ' mouseout' para implementar esse 
// comportamento e melhore a usabilidade do menu de navegação.


document.addEventListener('DOMContentLoaded', function() {
  const menuItems = document.querySelectorAll(".menu-item");

  function addHighlight(event) {
      event.target.style.fontWeight = "bold";
      event.target.style.backgroundColor = "#555";
      event.target.style.borderRadius="10px";
      
  }

  function removeHighlight(event) {
      event.target.style.fontWeight = "normal";
      event.target.style.backgroundColor = "";
  }

  menuItems.forEach(item => {
      item.addEventListener("mouseover", addHighlight);
      item.addEventListener("mouseout", removeHighlight);
  });
});
