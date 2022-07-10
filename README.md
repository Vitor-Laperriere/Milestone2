# JP²V Watches - Online Store Development

### Group 15 
- Pedro Calciolari Jardim 11233668
- Pedro Dias Batista 10768909
- Vitor Laperriere de Faria 12689085
- João Pedro Matos de Deus 12677492 

# Milestone 3 -Final Version
## Fully Functional Application


### Requirements
Como relatado anteriormente, a parte do backend foi adiantada na segunda entrega, para esta etapa, foi implementado o que estava faltando, principalmente algumas funções de adiministrador, que serão detalhadas a seguir, assim como ajustes na parte visual, além da tradução do conteúdo em inglês para português para manter o site inteiro no mesmo idioma.


### Project Description
As funcionalidades de adiministrador que foram adicionadas são
- Alterar usuários e torná-los adiministradores
- Remover um produto
- Editar um produto ****
- Adicionar um produto ****
- Nossa funcionalidade especial, utilizando a API do google, uma páginda de Dashboard com estatísticas de vendas, organizadas por data e categoria.

** ****Na página inicial, o banner temporário foi substituido e agora os links para as coleções funcionam e filtram os produtos pela categoria.

### Comments About The Code
No comments.

### Test Plan
##### Teste do ponto de vista do usuário (o mesmo do Milestone 2):

Para testar as funcionalidades do site, vamos percorrer um caminho realista entre as páginas, simulando uma compra.

Da página inicial vamos direto para página com os produtos, clicando no botão do header "watches".

Clicamos em algum deles e abrimos a página do produto.

Clicamos em Add To Cart e somos redirecionados ao carrinho.

Clicamos em Proceed To Checkout, como não estamos logados, somos redirecionados para a página de login.

Para criar uma conta, clicamos em Create your account.

Preenchemos todos os dados, clicamos em Sign Up e somos redirecionados para a página Shipping Adress.

Preechemos os dados e clicamos em continue, chegando a página Payment.

Escolhemos o método e finalizamos o pedido.

##### Teste do ponto de vista do administrador:

Da página inicial, vamos para a área de login.

Inserimos: 
- admin@usp.com
- 123456

No header agora temos o botão do admin, ele nos leva para 4 páginas.
- Dashboard com as informações
- Página dos produtos ****
    - Podemos adicionar, editar e remover produtos.
- Página dos pedidos
    - Num pedido individual, podemos ver seus detalhes em sua página ou remove-lo
- Página dos usuários
    - Podemos tornar um usuário adiministrador

### Test Results
Os testes ocorreram como o esperado.

### Build Procedures
Após clonar o repositório, mude o diretório para a pasta do Backend e use os seguintes comandos:

      npm install --force

      node server.js (Considerando que o node ja está instalado)
      
Crie uma pasta chamada .env e adicione:

JWT_SECRET=segredinho

MONGODB_URI=mongodb+srv://jjonhy:123coxinha@cluster0.tyj9ulu.mongodb.net/jjonhy?retryWrites=true&w=majority

Abra outro terminal, va para o diretório do Frontend e use:

      npm install --force
      
      npm start
      
Usuario de admin para teste: 

admin@usp.com

senha: 123456

### Problems
No problems.

### Comments
No comments.