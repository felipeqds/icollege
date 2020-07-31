Requisitos: isntalar o yarn (https://yarnpkg.com/)<br>

Para rodar o back-end, no diretorio do projeto "icollege-api" utilize o comando:<br>

##yarn dev

Caso ao rodas o comando de erro d endereço ja utilizado:<br>
Error: listen EADDRINUSE: address already in use :::2222<br>

alterar a porta no arquivo "index.js" no prjeto "icollege.api" <br>
linha 22: server.listen(2222);

Obs: o banco de dados esta sendo armazenado no mongodb atlas (https://www.mongodb.com/cloud/atlas)<br>
