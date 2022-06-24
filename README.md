# JP²V Watches - Online Store Development

### Group 15 
- Pedro Calciolari Jardim 11233668
- Pedro Dias Batista 10768909
- Vitor Laperriere de Faria 12689085
- João Pedro Matos de Deus 12677492 

# Milestone 2 -Project Report
## Client side functionalities


### Requirements
Seguindo a estrutura básica apresentada no Milestone 1, porém atualizada para uma loja de relógios, nessa etapa desenvolveremos todas as funcionalidades do Cliente, usando o Framework React, serão apresentados todos os arquivos HTML/CSS e Javascript. Além disso, mesmo não sendo necessário para esta etapa, adiantamos algumas funcionalidades do Backend, usando o MongoDB, por acharmos que seria vantajoso ja ter essa estrutura pronta.


### Project Description
Nesta etapa o objetivo é  apresentar o Frontend basicamente completo, podendo ser possível simular a experiência do usuário em todas as etapas e com todas as variações. Para isso foi desenvolvida uma Single Page Application, de maneira que não seja necessário abrir uma nova guia para cada página nova, isso é feito dinamicamente com a mesma página podendo apontar para todas as outras. O projeto possui todas as páginas necessárias para simular uma compra, desde as páginas individuais dos produtos até a parte de pegar informações de entrega e pagamento, passando pela área de login se necessário, processo que será realizado e detalhado na seção de teste.
Complementando, no footer temos algumas páginas auxiliares com esclarecimentos sobre políticas de entrega e reembolso, um About Us com informação sobre o grupo e o Help, que seria uma maneira dos usuários comunicarem problemas.


### Comments About The Code
No comments.

### Test Plan
Para testar as funcionalidades do site, vamos percorrer um caminho realista entre as páginas, simulando uma compra.

Da página inicial vamos direto para página com os produtos, clicando no botão do header "watches".

Clicamos em algum deles e abrimos a página do produto.

Clicamos em Add To Cart e somos redirecionados ao carrinho.

Clicamos em Proceed To Checkout, como não estamos logados, somos redirecionados para a página de login.

Para criar uma conta, clicamos em Create your account.

Preenchemos todos os dados, clicamos em Sign Up e somos redirecionados para a página Shipping Adress.

Preechemos os dados e clicamos em continue, chegando a página Payment.

Escolhemos o método e finalizamos o pedido.

### Test Results
O teste ocorreu como o esperado.

### Build Procedures
Após clonar o repositório, mude o diretório para a pasta do Backend e use os seguintes comandos:

      npm install

      node server.js (Considerando que o node ja está instalado)
      
Crie uma pasta chamada .env e adicione:

JWT_SECRET=segredinho
MONGODB_URI=mongodb+srv://jjonhy:123coxinha@cluster0.tyj9ulu.mongodb.net/jjonhy?retryWrites=true&w=majority

Abra outro terminal, va para o diretório do Frontend e use:

      npm install
      
      npm start
      

### Problems
No problems.

### Comments
No comments.
