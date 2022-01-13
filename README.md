<h1>Desafio Vai na Web(Back-end)</h1>

<h2>Descrição</h2>
<span>Desenvolver uma api que realize a gestão de cadastro de usúarios com os seguintes métodos:</span>
<li>Buscar usuário por cpf</li>
<li>Listar todos os usuários</li>
<li>Criar novo usuário</li>
<li>Editar usuário</li>
<li>Deletar usuário</li>
<li>Buscar endereço pelo CEP buscando no endpoint <a href='https://viacep.com.br'>https://viacep.com.br</a></li>

<h2>Tecnologias</h2>
<li>Typescript</li>
<li>NestJS</li>
<li>PostgreSQL</li>
<li>TypeORm</li>
<li>Docker</li>

### Pré-Requisitos

Certifique-se de ter o <a href="https://www.docker.com/products/docker-desktop">Docker</a> instalado na sua máquina.

Clone este repositório 
```
$ git clone https://github.com/victorfrts/backend-challenge.git
```

Instale as dependências
```
$ npm install
```

Execute a aplicação em modo de desenvolvimento
```
$ npm run start:dev
```

### O servidor inciará na porta:3773 
#### Utilize o endpoit <http://localhost:3773/api> 

Para realizar os teste unitários 
```
$ npm run test
```