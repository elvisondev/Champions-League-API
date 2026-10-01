# ⚽ API de Jogadores

API REST desenvolvida com **Node.js**, **Express** e **TypeScript** para praticar a construção e organização de uma aplicação backend em camadas.

O projeto trabalha com listagem e busca de jogadores, separando as responsabilidades entre rotas, controllers, services e repositories.

## 🚀 Tecnologias

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [TSX](https://tsx.is/)

## 📁 Estrutura do projeto

```text
src/
├── controllers/
├── models/
├── repositories/
├── routes/
├── services/
├── utils/
├── app.ts
└── server.ts
```

### Responsabilidades

- **Routes:** define as rotas e direciona as requisições.
- **Controllers:** recebe as requisições HTTP e retorna as respostas.
- **Services:** concentra as regras e tratamentos da aplicação.
- **Repositories:** responsável pelo acesso aos dados.
- **Models:** define os modelos e contratos utilizados pela aplicação.
- **Utils:** contém funções e recursos auxiliares.
- **app.ts:** configura a aplicação, middlewares e rotas.
- **server.ts:** inicializa o servidor.

## 🔄 Fluxo da aplicação

```text
Request
   ↓
Server
   ↓
App
   ↓
Routes
   ↓
Controller
   ↓
Service
   ↓
Repository
   ↓
Data
```

A resposta percorre o fluxo de volta até ser enviada ao cliente.

## 📌 Funcionalidades

- Listagem de jogadores
- Busca de jogador por ID
- Tratamento de respostas HTTP
- Organização da aplicação em camadas
- Middleware para leitura de requisições JSON

## ▶️ Executando o projeto

Instale as dependências:

```bash
npm install
```

Execute o projeto em ambiente de desenvolvimento:

```bash
npm run dev
```

## 📄 Licença

Projeto desenvolvido com foco no estudo prático de **APIs REST com Express e TypeScript**, explorando conceitos como rotas, controllers, services, repositories, middlewares e separação de responsabilidades.