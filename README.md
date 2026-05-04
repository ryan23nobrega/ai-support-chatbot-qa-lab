# 🤖 AI Support Chatbot QA Lab

Projeto focado em **testes de qualidade para aplicações com IA**, simulando cenários reais de validação de um chatbot de suporte.

---

## 🎯 Objetivo

Demonstrar, na prática, como validar o comportamento de um chatbot utilizando testes automatizados que vão além de validações simples, cobrindo:

* Intenção (NLP)
* Qualidade da resposta
* Segurança (Prompt Injection)
* Robustez de linguagem (variações de input)
* Tratamento de erro

---

## 🧠 Cenário

O projeto simula um chatbot de atendimento de e-commerce, responsável por responder dúvidas como:

* Troca e devolução
* Prazo de entrega
* Descontos
* Solicitações inválidas ou maliciosas

---

## 🧪 Tipos de Testes Implementados

### ✅ Testes de Intenção (NLP)
Valida se o chatbot identifica corretamente a intenção do usuário, mesmo com variações de linguagem.

### 🧠 Testes de Variação de Linguagem
Garante que diferentes formas de escrita levam ao mesmo entendimento (ex: "trocar", "devolver", "reembolso").

### 🔐 Testes de Segurança (Prompt Injection)
Simula tentativas de manipulação e valida se o chatbot bloqueia respostas sensíveis.

### 📊 Testes de Conteúdo
Verifica se a resposta contém informações corretas (ex: política de devolução e prazos).

### ⚠️ Testes de Fallback
Garante que perguntas fora do escopo são tratadas corretamente.

### 🚫 Testes de Anti-Alucinação
Evita que o chatbot invente informações (ex: cupons ou descontos inexistentes).

### ❌ Testes de Erro
Valida comportamento quando inputs inválidos são enviados.


---

## ⚙️ Tecnologias Utilizadas

* Node.js
* Express
* Jest
* Supertest
* Jest HTML Reporter

---

## 🚀 Como rodar o projeto

### Instalar dependências

```bash
npm install
```

### Rodar a API

```bash
npm run dev
```

### Rodar testes

```bash
npm test
```

### Gerar relatório de testes

```bash
npm run test:report
```

---

## 📊 Relatório de Testes

Após rodar:

```bash
npm run test:report
```

Um relatório em HTML será gerado em:

```txt
reports/test-report.html
```

---

## 💡 Aprendizados

Durante esse projeto, foram explorados conceitos importantes de QA aplicado a IA:

* Testes não determinísticos
* Validação de comportamento em vez de igualdade exata
* Cobertura de cenários reais de uso
* Segurança em aplicações com LLM

---

## 📌 Possíveis melhorias

* Integração com API real de IA (OpenAI, etc)
* Avaliação semântica de respostas
* Testes de performance
* CI/CD com execução automática dos testes

---

## 🧠 Insight

Testar IA não é verificar igualdade de resposta.
É validar **intenção, segurança, consistência e confiabilidade**.

---

## 📎 Autor

Projeto desenvolvido como estudo prático de QA aplicado a IA.
