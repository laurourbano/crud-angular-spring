**Nome do projeto:** CRUD Angular + Spring

**Descrição:**

Este repositório contém o código fonte do projeto de um CRUD simples desenvolvido com Angular e Spring. O projeto foi criado seguindo o curso do YouTube da Loiane Groner.

**Tecnologias utilizadas:**

* Angular
* Spring Boot
* MySQL

**Requisitos:**

* Node.js
* Java 11
* MySQL

**Como executar o projeto:**

1. Clone o repositório:

```
git clone https://github.com/<seu-usuário>/crud-angular-spring.git
```

2. Instale as dependências:

```
cd crud-angular-spring
npm install
```

3. Crie um banco de dados MySQL e execute o script `src/main/resources/db/create-database.sql` para criar o banco de dados e as tabelas necessárias.

4. Altere o arquivo `src/main/resources/application.properties` para configurar as informações de conexão com o banco de dados.

5. Execute o projeto:

```
npm start
```

**O projeto será executado na porta 4200.**

**Como testar o projeto:**

Acesse o endereço `http://localhost:4200/` no seu navegador.

Você deve ver uma tela com uma lista de cursos.

Para criar um novo curso, clique no botão "Novo curso".

Preencha os campos do formulário e clique no botão "Salvar".

Para editar um curso, clique no botão "Editar" ao lado do curso desejado.

Faça as alterações necessárias e clique no botão "Salvar".

Para excluir um curso, clique no botão "Excluir" ao lado do curso desejado.

**Contribuição:**

Contribuições são bem-vindas. Para contribuir com o projeto, faça um fork do repositório e envie uma pull request com suas alterações.

**Licença:**

O projeto é licenciado sob a licença MIT.
