# ⚽ API Champions League

API REST desenvolvida com **Node.js**, **Express** e **TypeScript** para praticar a construção e organização de uma aplicação backend em camadas.

O projeto trabalha com jogadores e clubes da Champions League, permitindo operações de consulta, criação e exclusão, com responsabilidades separadas entre routes, controllers, services e repositories.

## 🚀 Tecnologias

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [TSX](https://tsx.is/)

## 📁 Estrutura do projeto

```text
src/
├── controllers/
├── data/
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
- **Repositories:** responsável pelo acesso e manipulação dos dados.
- **Data:** armazena os dados utilizados pela aplicação.
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

### 👤 Jogadores

- Listagem de jogadores
- Busca de jogador por ID
- Cadastro de novos jogadores
- Exclusão de jogadores
- Atualização de estatísticas

### 🏆 Clubes

- Listagem de clubes
- Busca de clube por ID
- Dados dos clubes armazenados em arquivo JSON

### ⚙️ Aplicação

- Tratamento de respostas HTTP
- Middleware para leitura de requisições JSON
- Middleware de log das requisições
- Organização da aplicação em camadas

## 🧪 Próximas implementações

Expansão das operações disponíveis para clubes:

- [ ] Cadastrar novo clube
- [ ] Excluir clube
- [ ] Avaliar implementação de atualização de clube

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

Projeto desenvolvido com foco no estudo prático de **APIs REST com Express e TypeScript**, explorando conceitos como rotas, controllers, services, repositories, middlewares, manipulação de arquivos JSON e separação de responsabilidades.