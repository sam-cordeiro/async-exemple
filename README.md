# Cadastro de Alunos (Async/Await Example)
### Este projeto foi desenvolvido como atividade prática em sala de aula, com o objetivo de aplicar e fixar os conceitos de Async/Await em TypeScript. O tema escolhido foi um sistema simples de cadastro de alunos via terminal.

## ✨ Funcionalidades
- Cadastro de novos alunos com validação de matrícula.

- Persistência de dados em um arquivo JSON (src/database/database.json).

- Interface de interação via terminal com a biblioteca Inquirer.

- Utilização do Spread Operator, recurso moderno do TypeScript para manipulação de objetos de forma eficiente.

## 🛠️ Tecnologias e ferramentas
- TypeScript

- Node.js

- Inquirer (para entrada de dados via terminal)

- FS (File System) do Node para manipulação de arquivos

- JSON como banco de dados simples

## 📁 Estrutura do Projeto

`
projeto-alunoss/
├── src/
│   ├── database/
│   │   └── database.json          # Arquivo com os dados dos alunos
│   ├── interface/
│   │   └── IAluno.ts              # Interface do aluno
│   ├── managers/
│   │   └── AlunoManager.ts        # Lógica de manipulação de alunos
│   ├── models/
│   │   └── AlunoModel.ts          # Estrutura da classe Aluno
│   ├── utils/
│   │   └── prompts.ts             # Prompts do Inquirer
│   └── index.ts                   # Arquivo principal
├── package.json
├── package-lock.json
└── tsconfig.json
`

## 🚀 Como executar
- Instale as dependências:

`npm install`

- Execute o projeto:
- 
`npx ts-node src/index.ts`

## 💡 Objetivo educacional
- Além de praticar Async/Await, este projeto também serviu para aplicar recursos novos que venho aprendendo, como o Spread Operator. Ele permite copiar todas as propriedades de um objeto para outro de forma limpa e prática — recurso que utilizei para atualizar os dados do JSON sem sobrescrevê-lo completamente.
