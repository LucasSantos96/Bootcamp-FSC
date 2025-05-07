Bootcamp FullStack - Node.js API
Este repositório contém o código desenvolvido durante o Aulão de Node.js, parte do Bootcamp FullStack. Aqui você encontrará uma API RESTful construída com Express.js e MongoDB, seguindo boas práticas de desenvolvimento.

🚀 Tecnologias Utilizadas
Node.js - Ambiente de execução JavaScript

Express - Framework para construção de APIs

MongoDB - Banco de dados NoSQL

Mongoose - ODM para MongoDB

Dotenv - Gerenciamento de variáveis de ambiente

EJS - Template engine para renderização de views

Nodemon - Reinício automático do servidor em desenvolvimento

📋 Funcionalidades
✅ CRUD completo de usuários
✅ Rotas RESTful
✅ Middlewares para logging
✅ Conexão com MongoDB Atlas
✅ Renderização de views com EJS
✅ Tratamento de erros

⚙️ Como Executar
Clone o repositório:

bash
git clone https://github.com/LucasSantos96/Bootcamp-FSC.git
Instale as dependências:

bash
npm install
Configure suas variáveis de ambiente no arquivo .env:

env
MONGODB_USERNAME=seu_usuario
MONGODB_PASSWORD=sua_senha
Inicie o servidor:

bash
npm run start:dev
📌 Endpoints da API
Método	Endpoint	Descrição
GET	/home	Página inicial
GET	/users	Lista todos os usuários
GET	/users/:id	Obtém um usuário específico
POST	/users	Cria um novo usuário
PATCH	/users/:id	Atualiza um usuário
DELETE	/users/:id	Remove um usuário
GET	/views/users	Renderiza view com usuários
🏗️ Estrutura do Projeto
Bootcamp-FSC/
├── src/
│   ├── database/
│   │   └── connect.js        # Conexão com MongoDB
│   ├── models/
│   │   └── user.model.js     # Modelo de usuário
│   └── views/
│       └── index.ejs         # Template EJS
├── modules/
│   ├── express.js            # Configuração do Express
│   ├── fs.js                 # Operações com arquivos
│   └── path.js               # Manipulação de caminhos
├── index.js                  # Ponto de entrada
└── package.json              # Dependências e scripts
📚 Aprendizados
Fundamentos do Node.js

Criação de APIs RESTful com Express

Operações CRUD com MongoDB/Mongoose

Middlewares e tratamento de erros

Renderização server-side com EJS

Organização de projetos Node.js

📝 Licença
Este projeto está sob a licença MIT - veja o arquivo LICENSE para detalhes.

Desenvolvido com 💙 por Lucas Santos
Parte do Bootcamp FullStack
