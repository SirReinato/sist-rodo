# 📌 Pelas Estradas

> **Pelas Estradas** é um sistema web desenvolvido para cadastrar e gerar relatórios sobre a situação de rodovias, estradas e sinalizações. O sistema permite que usuários registrem novas ocorrências e visualizem relatórios detalhados, auxiliando na gestão e manutenção de infraestruturas viárias.

# Status do Projeto
> :white_check_mark: Projeto em constante evolução :white_check_mark:

## 🚀 Tecnologias Utilizadas

- **Frontend**: React.js com styled-components, Inertia.js, ShadCN UI
- **Backend**: Laravel com Laravel Breeze (React)
- **Banco de Dados**: SQLite
- **Gerenciamento de Estado**: useState e useEffect
- **Deploy**: Vercel 

## 🛠 Funcionalidades Principais

Cadastro de ocorrências de problemas em rodovias

Listagem e filtro de ocorrências por tipo, rodovia e data

Autenticação de usuários com Laravel Breeze

Mapa interativo com localização das ocorrências utilizando React-Leaflet
  

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




## 📜 Licença

Este projeto está licenciado sob a **MIT License** 





