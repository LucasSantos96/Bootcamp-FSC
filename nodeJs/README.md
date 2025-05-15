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
bash
git clone https://github.com/LucasSantos96/Bootcamp-FSC.git
cd Bootcamp-FSC
Instale as dependências:

bash
npm install
Configure o ambiente:

bash
cp .env.example .env
Edite o .env com suas credenciais do MongoDB.

### Inicie o servidor:

bash
npm run start:dev <br>
### 🌐 Rotas da API <br>
Método	Endpoint	Descrição	Status <br>
GET	/home	Página inicial	200 <br>
GET	/users	Lista todos usuários	200 <br>
POST	/users	Cria novo usuário	201 <br>
GET	/users/:id	Busca usuário específico	200/404 <br>
PATCH	/users/:id	Atualiza usuário	200 <br>
DELETE	/users/:id	Remove usuário	204 <br>
GET	/views/users	Renderiza view EJS	200 <br>

## 🛠️ Tecnologias Backend:
Node.js

Express

Mongoose

Dotenv

Frontend:

EJS (para views)

Dev Tools:

Nodemon

Postman/Insomnia (para testar API)

### 🏗️ Estrutura <br>
├── src/
│   ├── controllers/    # Lógica das rotas <br>
│   ├── models/         # Schemas do MongoDB <br>
│   ├── routes/         # Definição de rotas <br>
│   ├── views/          # Templates EJS <br>
│   └── utils/          # Helpers e middlewares <br>
├── .env.example        # Modelo de variáveis <br>
├── index.js            # Entry point <br>
└── package.json        # Dependências <br>
### 📌 Exemplo de Uso
Criar usuário:

bash
curl -X POST http://localhost:8080/users \ <br>
  -H "Content-Type: application/json" \ <br>
  -d '{ <br>
    "firstName": "Lucas", <br>
    "lastName": "Santos", <br>
    "email": "lucas@example.com", <br>
    "password": "senha123" <br>
  }' <br>
### 📄 Licença
Este projeto está licenciado sob a MIT License - veja LICENSE.md para detalhes. <br>

<div align="center"> Feito com ❤️ por <a href="https://github.com/LucasSantos96">Lucas Santos</a> </div> 
