# Chat com GLM-4.5 🏆

> **Desenvolvido para o HackTown 2025 - Competição AWS**

Um aplicativo de chat moderno e elegante com sistema de autenticação que se conecta ao modelo GLM-4.5 via Hugging Face Inference API. Este projeto foi criado especialmente para demonstrar as capacidades de desenvolvimento de aplicações web modernas utilizando tecnologias de ponta e integração com serviços de IA.

## 🎯 **HackTown 2025 - AWS Competition**

Este projeto foi desenvolvido como parte de uma ação da AWS no HackTown 2025, demonstrando:
- **Integração com APIs de IA** modernas
- **Interface de usuário** responsiva e acessível
- **Arquitetura escalável** e bem estruturada
- **Experiência do usuário** otimizada
- **Boas práticas** de desenvolvimento React

## Funcionalidades

### 🔐 Autenticação
- Sistema completo de login e cadastro
- Armazenamento local de usuários (localStorage)
- Validação de formulários
- Sessão persistente

### 💬 Chat
- Interface moderna com bolhas de mensagem
- Avatares personalizados para usuários
- Integração com modelo GLM-4.5 via Hugging Face
- Indicador de "digitando" animado
- Timestamps nas mensagens

### 🎨 Interface
- Design responsivo e moderno com Tailwind CSS
- Tela de boas-vindas com sugestões de conversa
- Estatísticas do usuário (dias ativo, mensagens enviadas)
- Tratamento visual de diferentes tipos de erro
- Função de limpar histórico do chat

## Tecnologias

- **React 19** - Framework frontend
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Estilização
- **@huggingface/inference** - Cliente para API Hugging Face

## Estrutura do Projeto

```
src/
├── components/
│   ├── ChatMessage.jsx     # Mensagens com design moderno
│   ├── ChatInput.jsx       # Campo de entrada estilizado
│   ├── TypingIndicator.jsx # Indicador de digitação animado
│   ├── LoginForm.jsx       # Formulário de login
│   ├── RegisterForm.jsx    # Formulário de cadastro
│   ├── WelcomeScreen.jsx   # Tela de boas-vindas
│   └── UserStats.jsx       # Estatísticas do usuário
├── hooks/
│   ├── useChat.js          # Gerenciamento do chat
│   └── useAuth.js          # Gerenciamento de autenticação
├── utils/
│   └── auth.js             # Funções de autenticação
├── data/
│   └── users.json          # Arquivo de usuários (exemplo)
├── App.jsx                 # Componente principal
├── huggingface.js          # Integração com API
└── main.jsx                # Ponto de entrada
```

## Configuração

1. Clone o repositório
2. Instale as dependências: `npm install`
3. Configure seu token Hugging Face no arquivo `.env`:
   ```
   VITE_HF_TOKEN=seu_token_aqui
   ```
4. Execute o projeto: `npm run dev`

## Como Usar

### Primeiro Acesso
1. Clique em "Cadastre-se" para criar uma conta
2. Preencha os dados (usuário, email, senha)
3. Faça login com suas credenciais

### Usando o Chat
1. Explore as sugestões na tela de boas-vindas
2. Digite sua mensagem no campo de entrada
3. Pressione Enter ou clique no botão de enviar
4. Aguarde a resposta da IA
5. Use o botão "Limpar" para resetar o histórico
6. Clique no seu avatar para ver estatísticas

### Credenciais de Teste
- **Usuário:** admin
- **Senha:** 123456

## Tratamento de Erros

O aplicativo trata diferentes tipos de erro:
- Token inválido (401)
- Rate limiting (429) 
- Problemas de conexão
- Erros inesperados da API

## 🏆 **HackTown 2025**

**Evento:** HackTown 2025  
**Categoria:** AWS Amazon Q
**Objetivo:** Demonstrar habilidades em desenvolvimento web moderno com integração de IA  
**Tecnologias Destacadas:** React, Tailwind CSS, Hugging Face API, Arquitetura Componentizada

---

*Desenvolvido com ❤️ para o HackTown 2025*