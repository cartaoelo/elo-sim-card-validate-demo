# **elo-simcard-validation-demo**

## O que é esse projeto?

Este projeto servirá como um exemplo de como consumir e utilizar a API "Elo Valida Sim Card".
---

## Ambiente / Tecnologias

O projeto foi criado utilizando [`React`](https://pt-br.reactjs.org/) juntamente com [TypeScript](https://www.typescriptlang.org/), uma linguagem que engloba as versões mais atuais do JavaScript/ES6+ e adiciona uma camada de tipagem que o JavaScript não possui por si só.


> **Atenção:** Esta demo foi criado com a ferramenta [Create React App](https://create-react-app.dev/) para ajudar na criação do projeto. Ela fornece uma base de código em `React` evitando _boilerplate code_. Portanto o código conta com algumas partes que foram geradas, packages instalados mas não utilizados, e algumas features dentro do projeto que podem não ser totalmente utilizadas.

### Packages usados no processo

Serão somente listados os _packages_ mais importantes para o processo:

- `node-rsa`: Utilizado para encriptar os dados sensíveis do cartão do usuário. Seu uso é melhor visto em [sign-card.ts](https://www.npmjs.com/package/node-rsa))
  - `crypto`: lib nativa do node.js utilizada para realizar criptografias, necessário pelo `node-rsa`
  - `randombytes`: requerido pelo `crypto`
- `bcrypt`: lib auxiliar para realizar as criptografias necessárias para o login no Portal ELo. Seu uso é melhor visto em [bcrypter.ts](./src/services/Challenge/bcrypter.ts).
- `isomorphic-fetch`: lib para realizar chamadas HTTP.

---

## Como rodar o app

Requisitos:
- node.js 8 ou versão superior
- yarn (opcional, mas recomendado)

Após clonar o projeto, dentro da pasta do mesmo, execute:

```shell
yarn install
yarn start
```

---

## Processos de execução

Todas as configurações de chamadas para a API Elo podem ser encontradas no arquivo [`api.ts`](./src/configs/api.ts).

### **Configuração inicial**
Altere os campos de *client_id*, *secret* e, se disponível, o id da sua aplicação Google disponível.

>Obs: caso não tiver um id na plataforma Google Cloud, siga os passos presentes na documentação de [login social](./src/docs/Social.md)

Realize login na página [login](./src/pages/Home/index.tsx) com seu usuário Elo ou Google, caso haja algum erro, a aplicação devolverá com a descrição do erro. Os dados do login, como o *access token*, serão salvos localmente no seu navegador para facilitar integrações.

### **Elo Valida Sim Card - Identificar alterações recentes de *SIM card* realizadas em um número de celular**

Após realizar login, insira o número de celular que deseja verificar as alterações, o retorno da API será exibida por um modal.

> A documentação dessa API está disponível no Portal Elo, em [Elo Valida Sim Card](https://hml-dev.elo.com.br/documentacao/elo-valida-sim-card?lng=pt)
