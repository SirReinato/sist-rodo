# 📌 Pelas Estradas

> **Pelas Estradas** é um sistema web desenvolvido para cadastrar e gerar relatórios sobre a situação de rodovias, estradas e sinalizações. O sistema permite que usuários registrem novas ocorrências e visualizem relatórios detalhados, auxiliando na gestão e manutenção de infraestruturas viárias.

# Status do Projeto
> :white_check_mark: Projeto em constante evolução :white_check_mark:

## 🚀 Tecnologias Utilizadas

- **Frontend**: React.js com styled-components Inertia.js
- **Backend**: Laravel com Laravel Breeze (React)
- **Banco de Dados**: SQLite
- **Gerenciamento de Estado**: useState e useEffect
- **Deploy**: Vercel 

## 📂 Como Rodar o Projeto Localmente

### 1. Clonar o repositório
```sh
git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/SirReinato/sist-rodo)
cd pelas-estradas
```

### 2. Configurar o Backend (Laravel)
```sh
cd backend
cp .env.example .env
composer install
php artisan key:generate
php artisan migrate --seed
php artisan serve
```

### 3. Configurar o Frontend (React)
```sh
cd frontend
npm install
npm run dev
```

## 🌎 Deploy na Vercel

1. Conecte o repositório na Vercel.
2. Configure as variáveis de ambiente, se necessário.
3. A Vercel gerará automaticamente um link para acesso: `https://seu-projeto.vercel.app`

## 🛠 Funcionalidades Principais

- 📌 Descreva funcionalidades principais do seu sistema.
- 🔍 Pesquisa de ocorrências.
- 📄 Geração de relatórios.

## 📜 Licença

Este projeto está licenciado sob a **MIT License** - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Se precisar personalizar mais alguma coisa, me avise!




