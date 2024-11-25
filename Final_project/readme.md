PROJETO:
- Sistema de Gerenciamento de Segurança:
Desenvolva um sistema de controle de acesso que permita apenas
usuários autorizados a acessar áreas restritas das instalações das Indústrias
Wayne.
Implemente autenticação e autorização para diferentes tipos de usuários,
como funcionários, gerentes e administradores de segurança.
- Gestão de Recursos:
Desenvolva uma interface para gerenciar recursos internos, como
inventário de equipamentos, veículos e dispositivos de segurança.
Permita que os administradores possam adicionar, remover e atualizar
informações sobre esses recursos de forma eficiente.
- Dashboard de Visualização:
Crie um painel de controle visualmente atraente que exiba dados relevantes
sobre segurança, recursos e atividades dentro das Indústrias Wayne.


# Sistema de Gerenciamento Wayne Industries

Sistema de segurança e gerenciamento de inventário para Wayne Industries. Gerencia acesso de usuários, controla inventário e fornece dashboard administrativo.

## Stack de Tecnologia

- Frontend: HTML, CSS, JavaScript (Vanilla)
- Backend: Node.js, Express
- Banco de Dados: PostgreSQL (Supabase)
- Hospedagem: Render (API), GitHub Pages (Frontend)

## Demonstração

- Frontend: `https://your-frontend-url.github.io`
- API: `https://modulojs.onrender.com`
- Banco de Dados: Projeto Supabase - `wayne-industries-db`

## Configuração do Banco (Supabase)

1. Acesso ao projeto: `https://supabase.com/dashboard/project/wayne-industries-db`
2. Estrutura:
```sql
users (
  id SERIAL PRIMARY KEY,
  user_name VARCHAR(250),
  user_role VARCHAR(100),
  password VARCHAR(100)
);

stock (
  id SERIAL PRIMARY KEY,
  item_name VARCHAR(200),
  category VARCHAR(100),
  qtde INTEGER,
  in_use INTEGER
);
```

## Desenvolvimento Local

1. Clonar repositório:
```bash
git clone https://github.com/your-username/wayne-industries.git
cd wayne-industries
```

2. Instalar dependências:
```bash
npm install
```

3. Configurar variáveis de ambiente:
```env
DATABASE_URL=sua_string_conexao_supabase
PORT=3000
```

4. Iniciar servidor:
```bash
npm run dev
```

## Endpoints da API

```
GET /api/users      - Listar usuários
POST /api/user      - Criar usuário
PUT /api/user/:id   - Atualizar usuário
DELETE /api/user/:id - Deletar usuário

GET /api/items      - Listar itens
POST /api/item      - Criar item
PUT /api/item/:id   - Atualizar item
DELETE /api/item/:id - Deletar item
```

## Deploy

### Frontend (GitHub Pages)
1. Push para repositório GitHub
2. Ativar GitHub Pages nas configurações
3. Site é implantado automaticamente

### Backend (Render)
1. Conectar repositório GitHub ao Render
2. Configurar variáveis de ambiente
3. Comando build: `npm install`
4. Comando start: `node index.js`

## Usuários Padrão

```
Usuário: Clark Kent
Senha: hashed_password_401
Cargo: funcionário

Usuário: Oliver Queen
Senha: hashed_password_501
Cargo: gerente

Usuário: Victor Stone
Senha: hashed_password_601
Cargo: administrador de segurança
```

## Notas de Segurança

- Senhas devem ser criptografadas em produção
- CORS configurado para domínios específicos
- Cargos: funcionários, gerentes, administradores de segurança

## Recursos Extras

- Modo claro/escuro
- Dashboard com estatísticas
- Gerenciamento de usuários e inventário
- Validação de dados

