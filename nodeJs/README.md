# 📚 Bootcamp FullStack - Node.js API

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

Projeto desenvolvido durante o Aulão de Node.js do Bootcamp FullStack, apresentando uma API RESTful com operações CRUD.

## 🚀 Começando

### Pré-requisitos
- Node.js (v18+)
- MongoDB Atlas ou local
- NPM/Yarn

### Instalação
1. Clone o repositório:
```bash
git clone https://github.com/LucasSantos96/Bootcamp-FSC.git
cd Bootcamp-FSC
Instale as dependências:

bash
npm install
Configure o ambiente:

bash
cp .env.example .env
Edite o .env com suas credenciais do MongoDB.

Inicie o servidor:

bash
npm run start:dev
🌐 Rotas da API
Método	Endpoint	Descrição	Status
GET	/home	Página inicial	200
GET	/users	Lista todos usuários	200
POST	/users	Cria novo usuário	201
GET	/users/:id	Busca usuário específico	200/404
PATCH	/users/:id	Atualiza usuário	200
DELETE	/users/:id	Remove usuário	204
GET	/views/users	Renderiza view EJS	200
🛠️ Tecnologias
Backend:

Node.js

Express

Mongoose

Dotenv

Frontend:

EJS (para views)

Dev Tools:

Nodemon

Postman/Insomnia (para testar API)

🏗️ Estrutura
├── src/
│   ├── controllers/    # Lógica das rotas
│   ├── models/         # Schemas do MongoDB
│   ├── routes/         # Definição de rotas
│   ├── views/          # Templates EJS
│   └── utils/          # Helpers e middlewares
├── .env.example        # Modelo de variáveis
├── index.js            # Entry point
└── package.json        # Dependências
📌 Exemplo de Uso
Criar usuário:

bash
curl -X POST http://localhost:8080/users \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Lucas",
    "lastName": "Santos",
    "email": "lucas@example.com",
    "password": "senha123"
  }'
📄 Licença
Este projeto está licenciado sob a MIT License - veja LICENSE.md para detalhes.

<div align="center"> Feito com ❤️ por <a href="https://github.com/LucasSantos96">Lucas Santos</a> </div> ```
