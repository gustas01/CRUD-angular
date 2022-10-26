## Sobre o projeto
### Frontend
A aplicação se trata de um CRUD simples de um lista de produtos eletrônicos onde se pode cadastrar, ler, editar e apagar os produtos.
![image](https://user-images.githubusercontent.com/50846424/198087054-7d553e93-2d6b-4a5a-bbbd-c24bf1308a22.png)

Quando alguma ação é feita de forma bem sucedida, é exibida uma mensagem com fundo verdo confirmado o processo.
![image](https://user-images.githubusercontent.com/50846424/198088147-e9abea80-a7f0-4be2-80cc-f7d248e57efe.png)
Caso não seja uma ação bem sucedida (como a API não estar em execução, por exemplo) é capturado o erro e exibida uma mensagem com fundo vermelho.
![image](https://user-images.githubusercontent.com/50846424/198088490-b97b0909-2777-4c38-984d-1fd6c5547687.png)


### backend
Para simular o backend dessa aplicação, foi utilizado o json-server já que o foco era o frontend nesse caso. O json-server é uma biblioteca usada para simular uma API e aceita todos os ações de uma API Rest (Create, Read, Update e Delete).

## Instruções para executar a aplicação localmente
1° passo - De dentro da pasta `backend` que se encontra na raiz do projeto, abra um terminal e execute o comando `npm i`, para instalar as dependências necessárias.<br>
2° passo - Ainda dentro da pasta backend, execute o comando `npm start` para executar o backend com json-server.<br>
3° passo - Agora com o terminal aberto na raiz da apliação, rode o comando `npm i` para instalar as dependências do frontend.<br>
4° passo - Ainda na raiz, execute o comando `npm start` para subir o frontend.<br>
5° passo - Abra o navegador no endereço `http://localhost:4200/`<br>
