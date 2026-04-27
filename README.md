# ConsentID Kids – Versão Produção

Este é o repositório oficial do ConsentID Kids, uma plataforma SaaS de Proteção de Imagem e Marketing Seguro.

## 🚀 Como Rodar Localmente

### 1. Pré-requisitos
- Node.js 18 ou superior
- NPM ou Yarn

### 2. Instalação
```bash
npm install
```

### 3. Configuração
Crie um arquivo `.env` na raiz do projeto (use o `.env.example` como base):
```bash
cp .env.example .env
```
Adicione sua `GEMINI_API_KEY`.

### 4. Iniciar Desenvolvimento
```bash
npm run dev
```
O projeto estará disponível em `http://localhost:3000`.

---

## 📦 Estrutura do Projeto

- `/src`: Código fonte do Frontend (React + Tailwind)
  - `/components`: Componentes modulares (UI, Seções)
  - `/services`: Chamadas de API e integrações
- `/dist`: Arquivos compilados para produção
- `server.ts`: Servidor Node/Express (Híbrido para Dev e Prod)

---

## 🚢 Como Fazer Deploy

### Deploy no GitHub
1. Crie um novo repositório no GitHub.
2. Siga os comandos:
```bash
git init
git add .
git commit -m "Initial production ready commit"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPO.git
git push -u origin main
```

### Deploy na Vercel (Frontend + Serverless)
1. Conecte seu repositório GitHub na Vercel.
2. A Vercel detectará automaticamente o Vite.
3. Configure as **Environment Variables** no dashboard da Vercel.
4. **Nota:** Para o servidor Express funcionar na Vercel, você pode precisar de um adaptador como `vercel-express`. Para sites puramente estáticos, use apenas o comando `npm run build`.

### Deploy no Render/Railway (Full-stack)
1. Conecte o repositório.
2. Build Command: `npm run build`
3. Start Command: `npm start`
4. Adicione as variáveis de ambiente no dashboard.

---

## 🔒 Segurança
- Todas as chaves de API estão protegidas via `dotenv`.
- O servidor Express atua como proxy para chamadas sensíveis de IA.
