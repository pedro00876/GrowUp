📊 Biblioteca de Gráficos e Tabelas – ITP Soluções
Este projeto foi desenvolvido como parte da disciplina Residência II, com o objetivo de criar uma biblioteca de gráficos e tabelas para a empresa ITP Soluções. O sistema centraliza e organiza dados em representações visuais, facilitando a análise por meio de gráficos 📈 e tabelas 📋 interativas.

🔗 Repositório no GitHub: https://github.com/pedro00876/GrowUp.git

🎯 Objetivo
Desenvolver uma ferramenta 💻 que permita visualizar dados 📊 de forma clara, dinâmica e moderna, utilizando gráficos e tabelas com tecnologias atuais e de fácil manutenção 🚀.

🚀 Tecnologias Utilizadas
💻 Frontend – React.js
Chart.js 📊 – Gráficos dinâmicos

react-chartjs-2 🔁

DataTables 📋 – Tabelas interativas

faker-js/faker 🧪 – Geração de dados fictícios

react-rnd 🎯 – Componentes arrastáveis/redimensionáveis

jquery 🔧

json-server 🖥️ – API fake para simulação

🌐 Backend – Node.js
express ⚙️

cors 🌍

body-parser 🧩

node-fetch 🔗

📦 Instalação
1️⃣ Clone o repositório

git clone https://github.com/pedro00876/GrowUp.git
cd GrowUp
2️⃣ Instale as dependências
🧪 Frontend

cd frontend
npm install faker-js/faker chart.js datatables.net jquery react-chartjs-2 react-rnd json-server
🛠️ Backend

cd ../backend
npm install body-parser cors express node-fetch
▶️ Como Usar
🟡 1. Inicie o json-server (simulação de API)
No terminal, dentro da pasta frontend, execute:

npm run server
🚨 O json-server será iniciado na porta 3001, usando o arquivo db.json.

🟢 2. Inicie o Backend
Em um novo terminal, vá até a pasta backend:

node app.js
🔵 3. Inicie o Frontend
Ainda em outro terminal, dentro da pasta frontend:

npm run dev
🌐 A aplicação estará disponível em: http://localhost:3000

✨ Funcionalidades
✅ Gráficos interativos com Chart.js
✅ Tabelas com paginação e ordenação usando DataTables
✅ Geração de dados de teste com faker.js
✅ Simulação de API com json-server
✅ Interface moderna, responsiva e modular com React.js

🤝 Contribuições
Contribuições são super bem-vindas! 💡
Sinta-se à vontade para abrir issues, enviar pull requests ou sugerir melhorias diretamente no repositório.
