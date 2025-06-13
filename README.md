📊 Biblioteca de Gráficos e Tabelas – ITP Soluções
Este projeto foi desenvolvido como parte da disciplina Residência II, com o objetivo de criar uma biblioteca de gráficos e tabelas para a empresa ITP Soluções. O sistema centraliza e organiza dados em representações visuais, facilitando a análise por meio de gráficos e tabelas interativas.

🔗 Repositório no GitHub: https://github.com/pedro00876/GrowUp.git

🎯 Objetivo
Desenvolver uma ferramenta que permita visualizar dados de forma clara e dinâmica, utilizando gráficos e tabelas integradas, com tecnologias modernas e de fácil manutenção.

🚀 Tecnologias Utilizadas
Frontend: React.js
→ Modularização e componentização da interface.

Backend: Node.js
→ Gerenciamento da lógica e estrutura da biblioteca.

Bibliotecas e Ferramentas

Chart.js – Gráficos dinâmicos

DataTables – Tabelas com ordenação e paginação

faker-js/faker – Geração de dados fictícios para testes

json-server – Simulação de API REST fake

react-chartjs-2, react-rnd, jquery

📦 Instalação
1. Clone o repositório

git clone https://github.com/pedro00876/GrowUp.git
cd GrowUp
2. Instale as dependências
Frontend

cd frontend
npm install faker-js/faker chart.js datatables.net jquery react-chartjs-2 react-rnd json-server
Backend

cd ../backend
npm install body-parser cors express node-fetch
▶️ Como Usar
1. Inicie o json-server (Simulador de API)
No terminal, dentro da pasta frontend, execute:


npm run server
Isso iniciará o json-server na porta 3001, simulando uma API REST baseada no arquivo db.json.

2. Inicie o Backend
Abra um novo terminal, vá para a pasta backend e execute:


node app.js
3. Inicie o Frontend
Em outro terminal (ou aba), dentro da pasta frontend, rode:

npm run dev
O frontend será iniciado em: http://localhost:3000

📈 Funcionalidades
Gráficos interativos com Chart.js

Tabelas dinâmicas com DataTables

Geração automática de dados com faker.js

Simulação de API com json-server

Layout responsivo e modular com React.js
