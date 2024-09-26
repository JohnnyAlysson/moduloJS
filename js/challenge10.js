
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
                <p>${stripHtml(post.content).substring(0, 100)}${stripHtml(post.content).length > 100 ? '...' : ''}</p>
                <small>Published on: ${formatDate(post.publishedOn)}</small>
                <button class="view-post" data-post-id="${post.id}">View Post</button>
                <button class="delete-post" data-post-id="${post.id}">Delete Post</button>
            `;
            postsContainer.appendChild(postElement);
        });

        document.querySelectorAll('.view-post').forEach(button => {
            button.addEventListener('click', openPostModal);
        });

        document.querySelectorAll('.delete-post').forEach(button => {
            button.addEventListener('click', deletePost);
        });
    }

    function stripHtml(html) {
        const tmp = document.createElement('DIV');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    }

    function openPostModal(e) {
        const postId = parseInt(e.target.getAttribute('data-post-id'));
        const post = posts.find(p => p.id === postId);
        if (post) {
            const modalContent = `
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <h2>${post.title}</h2>
                    <div>${post.content}</div>
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

            document.querySelector('.close-modal').addEventListener('click', closeModal);
            document.querySelector('.comment-form').addEventListener('submit', addComment);
        }
    }

    function closeModal() {
        modalContainer.style.display = 'none';
    }

    function addNewPost(e) {
        e.preventDefault();
        const newPost = {
            id: posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1,
            title: postTitle.value,
            content: postContent.innerHTML,
            publishedOn: postDate.value,
            comments: []
        };
        posts.push(newPost);
        renderPosts();
        postForm.reset();
        postContent.innerHTML = '';
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
            openPostModal({ target: { getAttribute: () => postId.toString() } });
        }

        commentInput.value = '';
    }

    function deletePost(e) {
        const postId = parseInt(e.target.getAttribute('data-post-id'));
        if (confirm('Are you sure you want to delete this post?')) {
            posts = posts.filter(post => post.id !== postId);
            renderPosts();
        }
    }

    postForm.addEventListener('submit', addNewPost);

    renderPosts();

    window.addEventListener('click', (e) => {
        if (e.target === modalContainer) {
            closeModal();
        }
    });

    const toolbar = document.getElementById('rich-text-toolbar');
    const buttons = toolbar.querySelectorAll('button');

    toolbar.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON' || e.target.parentElement.tagName === 'BUTTON') {
            const button = e.target.tagName === 'BUTTON' ? e.target : e.target.parentElement;
            const command = button.getAttribute('data-command');
            document.execCommand(command, false, null);
            postContent.focus();
            updateActiveButtons();
        }
    });

    postContent.addEventListener('keyup', updateActiveButtons);
    postContent.addEventListener('mouseup', updateActiveButtons);

    function updateActiveButtons() {
        buttons.forEach(button => {
            const command = button.getAttribute('data-command');
            if (document.queryCommandState(command)) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    postContent.addEventListener('focus', function() {
        if (this.innerHTML === this.getAttribute('placeholder')) {
            this.innerHTML = '';
        }
        updateActiveButtons();
    });

    postContent.addEventListener('blur', function() {
        if (this.innerHTML === '') {
            this.innerHTML = this.getAttribute('placeholder');
        }
        updateActiveButtons();
    });

    postContent.innerHTML = postContent.getAttribute('placeholder');
});