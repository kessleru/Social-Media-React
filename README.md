# 🐕 Dogs - Rede Social

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=flat-square&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.18-06B6D4?style=flat-square&logo=tailwindcss)
![React Router](https://img.shields.io/badge/React_Router-7.11.0-CA4245?style=flat-square&logo=reactrouter)

Uma rede social completa para compartilhamento de fotos de cachorros, desenvolvida com React 19, Vite e Tailwind CSS. A aplicação conta com sistema de autenticação JWT, feed com scroll infinito, upload de fotos, comentários em tempo real e dashboard com estatísticas interativas.

> ⚠️ **Aviso Importante:** A API utilizada neste projeto é uma API de demonstração que **reseta todos os dados a cada 10 minutos**. Isso significa que usuários, fotos e comentários serão apagados periodicamente. Ideal para testes e demonstrações.

## 🌐 Demo

🔗 **Live:** [Acessar aplicação](#)

## 📸 Screenshots

<!-- Adicione screenshots do projeto aqui -->

## ✨ Funcionalidades

### 🔐 Autenticação

- Login e logout com JWT (JSON Web Token)
- Cadastro de novos usuários com validação
- Recuperação de senha por email
- Reset de senha com token de segurança
- Auto-login persistente via localStorage
- Rotas protegidas para usuários autenticados

### 📷 Fotos

- Upload de fotos com preview em tempo real
- Informações detalhadas: nome, peso e idade do cachorro
- Visualização em modal com animações
- Contador de visualizações
- Exclusão de fotos próprias

### 💬 Comentários

- Sistema de comentários em tempo real
- Scroll automático para novos comentários
- Apenas usuários logados podem comentar

### 📊 Estatísticas

- Dashboard com gráficos interativos (Victory)
- Gráfico de pizza com distribuição de acessos
- Gráfico de barras comparativo
- Total de visualizações acumuladas
- Lazy loading para otimização de performance

### 🌀 Feed

- Scroll infinito com carregamento automático
- Paginação otimizada
- Grid responsivo de fotos
- Modal para visualização detalhada

### 👤 Perfis

- Perfis públicos de usuários
- Visualização de todas as fotos do usuário
- Navegação entre perfis

## 🛠️ Tecnologias

### Core

- **[React 19](https://react.dev/)** - Biblioteca para construção de interfaces
- **[Vite 7](https://vitejs.dev/)** - Build tool e dev server ultrarrápido
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utilitário
- **[React Router 7](https://reactrouter.com/)** - Roteamento SPA

### Bibliotecas

- **[Victory](https://formidable.com/open-source/victory/)** - Gráficos interativos em React
- **[vite-plugin-svgr](https://github.com/pd4d10/vite-plugin-svgr)** - SVGs como componentes React

### Ferramentas de Qualidade

- **ESLint** - Linting de código
- **Prettier** - Formatação de código

## 🏗️ Arquitetura

```
src/
├── api.jsx                    # Configuração da API e endpoints
├── App.jsx                    # Componente raiz e rotas principais
├── UserContext.jsx            # Context API para estado global do usuário
├── Components/
│   ├── Feed/                  # Feed de fotos
│   │   ├── Feed.jsx           # Container principal com scroll infinito
│   │   ├── FeedModal.jsx      # Modal de visualização
│   │   ├── FeedPhotos.jsx     # Lista de fotos paginada
│   │   └── FeedPhotosItem.jsx # Item individual do feed
│   ├── Forms/                 # Componentes de formulário reutilizáveis
│   │   ├── Button.jsx         # Botão estilizado
│   │   └── Input.jsx          # Input com validação
│   ├── Helper/                # Componentes utilitários
│   │   ├── Error.jsx          # Exibição de erros
│   │   ├── Image.jsx          # Imagem com skeleton loading
│   │   ├── Loading.jsx        # Indicador de carregamento
│   │   ├── PageHead.jsx       # SEO e meta tags
│   │   └── ProtectedRoute.jsx # HOC para rotas protegidas
│   ├── Login/                 # Sistema de autenticação
│   │   ├── Login.jsx          # Container de rotas de login
│   │   ├── LoginForm.jsx      # Formulário de login
│   │   ├── LoginCreate.jsx    # Formulário de cadastro
│   │   ├── LoginPasswordLost.jsx  # Recuperação de senha
│   │   └── LoginPasswordReset.jsx # Reset de senha
│   ├── Photo/                 # Visualização de fotos
│   │   ├── Photo.jsx          # Página de foto individual
│   │   ├── PhotoContent.jsx   # Conteúdo da foto
│   │   ├── PhotoComments.jsx  # Lista de comentários
│   │   ├── PhotoCommentsForm.jsx # Formulário de comentário
│   │   └── PhotoDelete.jsx    # Botão de exclusão
│   └── User/                  # Área do usuário
│       ├── User.jsx           # Container da conta
│       ├── UserHeader.jsx     # Cabeçalho do perfil
│       ├── UserHeaderNav.jsx  # Navegação do perfil
│       ├── UserPhotoPost.jsx  # Upload de fotos
│       ├── UserProfile.jsx    # Perfil público
│       ├── UserStats.jsx      # Página de estatísticas
│       └── UserStatsGraphs.jsx # Gráficos de estatísticas
└── Hooks/                     # Custom Hooks
    ├── useFetch.jsx           # Hook para requisições HTTP
    ├── useForm.jsx            # Hook para validação de formulários
    └── useMedia.jsx           # Hook para media queries
```

## 🪝 Custom Hooks

### `useFetch`

Hook para gerenciamento de requisições HTTP com estados de loading, error e data.

```jsx
const { data, loading, error, request } = useFetch();
```

### `useForm`

Hook para validação de formulários com suporte a tipos: email, password e number.

```jsx
const email = useForm('email');
const password = useForm('password');
```

### `useMedia`

Hook para detecção de media queries e responsividade.

```jsx
const mobile = useMedia('(max-width: 640px)');
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/dogs-social-media.git

# Entre no diretório
cd dogs-social-media

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev
```

### Scripts Disponíveis

| Comando           | Descrição                            |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Inicia o servidor de desenvolvimento |
| `npm run build`   | Gera a build de produção             |
| `npm run preview` | Preview da build de produção         |
| `npm run lint`    | Executa o ESLint                     |

## 🔌 API

A aplicação consome a API REST **Dogs API** da Origamid:

```
https://dogsapi.origamid.dev/json
```

### Endpoints Utilizados

| Método | Endpoint                      | Descrição                        |
| ------ | ----------------------------- | -------------------------------- |
| POST   | `/jwt-auth/v1/token`          | Autenticação e obtenção do token |
| POST   | `/jwt-auth/v1/token/validate` | Validação do token JWT           |
| GET    | `/api/user`                   | Dados do usuário autenticado     |
| POST   | `/api/user`                   | Cadastro de novo usuário         |
| GET    | `/api/photo`                  | Lista de fotos com paginação     |
| GET    | `/api/photo/:id`              | Detalhes de uma foto             |
| POST   | `/api/photo`                  | Upload de nova foto              |
| DELETE | `/api/photo/:id`              | Exclusão de foto                 |
| POST   | `/api/comment/:id`            | Adicionar comentário             |
| GET    | `/api/stats`                  | Estatísticas do usuário          |
| POST   | `/api/password/lost`          | Solicitar recuperação de senha   |
| POST   | `/api/password/reset`         | Resetar senha                    |

## 📱 Responsividade

A aplicação é totalmente responsiva, adaptando-se a diferentes tamanhos de tela:

- **Desktop:** Layout em grid de 2 colunas
- **Tablet:** Layout adaptativo
- **Mobile:** Layout em coluna única com navegação otimizada

## 🎨 Características Técnicas

- **Context API** para gerenciamento de estado global
- **Lazy Loading** de componentes com `React.lazy()` e `Suspense`
- **Skeleton Loading** para melhor UX durante carregamento de imagens
- **Animações CSS** para transições suaves
- **Validação de formulários** em tempo real
- **SEO otimizado** com meta tags dinâmicas via `PageHead`
- **Acessibilidade** com ARIA labels e roles semânticos

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido com 💛 e ☕
