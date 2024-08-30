
// Crie um sistema simples de blog onde os usuários
// podem visualizar postagens existentes, adicionar
// novas postagens e ver detalhes sobre cada postagem.

// Funcionalidades:
// Visualização de Postagens:
// Mostre ao usuário uma lista de postagens existentes
// com títulos e resumos.
// Detalhes da Postagem:
// Ao clicar em uma postagem, exiba o conteúdo
// completo da postagem, incluindo a data de
// publicação.
// Adicionar Nova Postagem:
// Permita que os usuários adicionem novas postagens.
// Cada postagem deve ter um título, conteúdo e data de
// publicação.
// Comentários:
// Adicione a capacidade de os usuários deixarem
// comentários nas postagens.

// EXTRA CHALLENGE:
// aba de postagem bonito com titulo,com rich text editor simples, com sistema de tag, visualizar postagem e comentar postagem (com modal)
// sistema de pesquisa, sistema de paginas com limites de publicacoes visualizadas, comentario e postagens com data e hora, deletar e com possibilidade de excluir.
// adicionar imagem


document.addEventListener('DOMContentLoaded', () => {
  const postsContainer = document.getElementById('posts-list');
  const postForm = document.getElementById('post-form');
  const postTitle = document.getElementById('post-title');
  const postDate = document.getElementById('post-date');
  const postContent = document.getElementById('post-content');

  let posts = [
      {
          id: 1,
          title: "The Joys of Coding",
          content: "Discover the thrill of bringing ideas to life through code.",
          publishedOn: "2023-06-15"
      },
      {
          id: 2,
          title: "Mastering CSS: The Key to Stunning Web Design",
          content: "Unlock the power of CSS and transform your web pages into visual masterpieces.",
          publishedOn: "2023-07-01"
      },
      {
          id: 3,
          title: "Exploring the Wonders of React.js",
          content: "Discover the power of React.js and build dynamic, interactive user interfaces.",
          publishedOn: "2023-07-15"
      }
  ];

  function renderPosts() {
      postsContainer.innerHTML = '';
      posts.forEach(post => {
          const postElement = document.createElement('div');
          postElement.classList.add('post');
          postElement.innerHTML = `
              <h3>${post.title}</h3>
              <p>${post.content}</p>
              <small>Published on: ${post.publishedOn}</small>
          `;
          postsContainer.appendChild(postElement);
      });
  }

  function addNewPost(e) {
      e.preventDefault();
      const newPost = {
          id: posts.length + 1,
          title: postTitle.value,
          content: postContent.value,
          publishedOn: postDate.value
      };
      posts.push(newPost);
      renderPosts();
      postForm.reset();
  }

  postForm.addEventListener('submit', addNewPost);

  renderPosts();
});