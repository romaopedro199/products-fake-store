# Fake Store Admin

![alt text](https://i.ibb.co/SDQfvSqt/Captura-de-tela-2025-02-28-191731.png)

## Requisitos Funcionais

:white_check_mark: O usuário deve ser capaz de listar todos os produtos de forma paginada;
:white_check_mark: O usuário deve ser capaz de filtrar produtos de uma determinada categoria;
:white_check_mark: O usuário deve ser capaz de ordenar os produtos por preço;
:white_check_mark: O nome dos produtos não podem ter mais que 30 caracteres;
:white_check_mark: Produtos com o rate acima de 4.5 devem ser listado com prioridade/destaque;
:white_check_mark: Durante o processo de atualização, o usuário não deve ser capaz de alterar a categoria de um produto;
:white_check_mark: O usuário deve ser capaz de visualizar os dados de um produto de forma individual;
:white_check_mark: A exclusão de produtos não deve ser permitida de forma imediata, o usuário deve confirmar a ação;

## Tecnologias utilizadas

:white_check_mark: Next.js;
:white_check_mark: Zustand;
:white_check_mark: Zod;
:white_check_mark: Jest;
:white_check_mark: Storybook;
:white_check_mark: Material UI;
:white_check_mark: Husky;

## Cobertura dos testes

:white_check_mark: 33.61%;
![alt text](https://i.ibb.co/hRFCz3tM/Captura-de-tela-2025-02-28-191615.png)

## Como executar o projeto

Após clonar o repositório, na raíz do projeto execute o seguinte comando no seu terminal para instalar as dependências do projeto:

```
npm install
```

Execute o seguinte comando para iniciar o projeto:

```
npm run dev
```

## Testes

Execute o seguinte comando para executar os testes unitários:

```
npm test
```

## Storybook

Execute o seguinte comando para executar o storybook:

```
npm run storybook
```
