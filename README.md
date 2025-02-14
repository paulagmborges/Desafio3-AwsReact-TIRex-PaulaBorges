# 🛋️ Furniro - E-commerce de Móveis

## 📌 Sobre o Projeto
Projeto desenvolvido para o desafio-3 do PB - AWS / REACTJS da Compass.uol. Furniro é um e-commerce de móveis desenvolvido em ReactJS com TypeScript, utilizando JSON Server para simular um banco de dados. O projeto inclui funcionalidades como autenticação de usuários, carrinho de compras com Context API, paginação e filtros, carregamento dinâmico de dados e integração com a API ViaCEP.

## 🚀 Tecnologias Utilizadas
- **ReactJS** + **TypeScript** + **Tailwind CSS**
- **React Router** para gestão de rotas
- **Context API** para gerenciamento de estado do carrinho
- **Clerk** para autenticação
- **Axios** para requisições HTTP
- **JSON Server** para simular um backend RESTful
- **SplideJS** para carrossel de produtos
- **API ViaCEP** para preenchimento automático do endereço
- **AWS EC2** para hospedagem
- **AWS S3** para armazenamento de imagens

## 🎯 Funcionalidades e requisitos
- Layout fiel ao design do Figma.
- **Header fixo** com navegação entre Home, Shop, About, Contact e botão de login/carrinho.
- **Footer fixo** com links para redes sociais e campo para e-mail.
- **Listagem de produtos** com paginação e filtros.
- **Detalhes do produto**, permitindo adicionar ao carrinho.
- **Carrinho de compras** com overlay e página dedicada, permitindo adicionar/remover itens.
- **Checkout protegido**, obrigando login antes da compra.
- **Autofill de endereço** via API do ViaCEP.
- **Loading spinners** para feedback de carregamento.
- **Armazenamento de imagens no AWS S3**.
- **Hospedagem da aplicação na AWS EC2**.


## 📥 Instalação e Execução
### 1️⃣ Clone o repositório
```bash
  git clone git@github.com:paulagmborges/Desafio3-AwsReact-TIRex-PaulaBorges.git 
```

### 2️⃣ Instale as dependências
```bash
  npm install
```

### 3️⃣ Inicie o JSON Server e o projeto
```bash
  npm run start
```


## 🔒 Proteção de Rotas
- Rotas de checkout são protegidas e exigem autenticação via Clerk.

## 📌 Autor
Paula Borges

---


