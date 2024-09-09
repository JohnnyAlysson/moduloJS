
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
    const modalContainer = document.createElement('div');
    modalContainer.id = 'modal-container';
    document.body.appendChild(modalContainer);

    let posts = [
        {
            id: 1,
            title: "The Joys of Coding",
            content: "Discover the thrill of bringing ideas to life through code.",
            publishedOn: "2023-06-15",
            comments: []
        },
        {
            id: 2,
            title: "Mastering CSS: The Key to Stunning Web Design",
            content: "Unlock the power of CSS and transform your web pages into visual masterpieces.",
            publishedOn: "2023-07-01",
            comments: []
        },
        {
            id: 3,
            title: "Exploring the Wonders of React.js",
            content: "Discover the power of React.js and build dynamic, interactive user interfaces.",
            publishedOn: "2023-07-15",
            comments: []
        }
    ];

    function formatDate(date) {
        return new Date(date).toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    function renderPosts() {
        postsContainer.innerHTML = '';
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.content.substring(0, 100)}${post.content.length > 100 ? '...' : ''}</p>
                <small>Published on: ${formatDate(post.publishedOn)}</small>
                <button class="view-post" data-post-id="${post.id}">View Post</button>
            `;
            postsContainer.appendChild(postElement);
        });

        // Add event listeners to view post buttons
        document.querySelectorAll('.view-post').forEach(button => {
            button.addEventListener('click', openPostModal);
        });
    }

    function openPostModal(e) {
        const postId = parseInt(e.target.getAttribute('data-post-id'));
        const post = posts.find(p => p.id === postId);
        if (post) {
            const modalContent = `
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <h2>${post.title}</h2>
                    <p>${post.content}</p>
                    <small>Published on: ${formatDate(post.publishedOn)}</small>
                    <div class="comments">
                        <h4>Comments:</h4>
                        <ul class="comment-list">
                            ${post.comments.map(comment => `
                                <li>
                                    <p>${comment.content}</p>
                                    <small>Commented on: ${formatDate(comment.date)}</small>
                                </li>
                            `).join('')}
                        </ul>
                        <form class="comment-form" data-post-id="${post.id}">
                            <input type="text" class="comment-input" placeholder="Add a comment" required>
                            <button type="submit">Add Comment</button>
                        </form>
                    </div>
                </div>
            `;
            modalContainer.innerHTML = modalContent;
            modalContainer.style.display = 'block';

            // Add event listener to close modal
            document.querySelector('.close-modal').addEventListener('click', closeModal);

            // Add event listener to comment form
            document.querySelector('.comment-form').addEventListener('submit', addComment);
        }
    }

    function closeModal() {
        modalContainer.style.display = 'none';
    }

    function addNewPost(e) {
        e.preventDefault();
        const newPost = {
            id: posts.length + 1,
            title: postTitle.value,
            content: postContent.value,
            publishedOn: postDate.value,
            comments: []
        };
        posts.push(newPost);
        renderPosts();
        postForm.reset();
    }

    function addComment(e) {
        e.preventDefault();
        const postId = parseInt(e.target.getAttribute('data-post-id'));
        const commentInput = e.target.querySelector('.comment-input');
        const commentContent = commentInput.value;

        const post = posts.find(p => p.id === postId);
        if (post) {
            const newComment = {
                content: commentContent,
                date: new Date().toISOString()
            };
            post.comments.push(newComment);
            openPostModal({ target: { getAttribute: () => postId } }); // Refresh the modal
        }

        commentInput.value = '';
    }

    postForm.addEventListener('submit', addNewPost);

    renderPosts();

    // Close modal when clicking outside of it
    window.addEventListener('click', (e) => {
        if (e.target === modalContainer) {
            closeModal();
        }
    });
});