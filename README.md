📊 Dashboard de Gráficos e Tabelas

Projeto desenvolvido pela Squad 11 da Residência II, com o objetivo de criar um dashboard interativo para visualização de dados da empresa ITP Soluções, por meio de gráficos e tabelas dinâmicas.

A proposta central foi desenvolver um sistema modularizado, componentizado e de fácil reaproveitamento, tanto no front-end quanto no back-end. O back-end foi estruturado como uma biblioteca reutilizável, permitindo que outros sistemas ou dashboards possam integrá-lo com facilidade.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🎯 Objetivos

✅ Centralizar os dados da empresa em um único painel visual.

✅ Apresentar os dados de maneira clara e intuitiva com gráficos e tabelas.

✅ Desenvolver uma arquitetura escalável, com foco em reutilização de componentes e módulos.

✅ Utilizar dados simulados com JSON Server para representar cenários reais.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🚀 Tecnologias Utilizadas

Front-end React.js Usado para criar uma interface moderna, componentizada e reativa. Permite reutilização de componentes para diferentes dashboards e visualizações.

Chart.js Biblioteca para exibir gráficos de forma visual e interativa. Possui fácil integração com React através do react-chartjs-2.

DataTables (via jQuery) Responsável pela exibição de tabelas organizadas, com recursos como ordenação, paginação e filtros.

Back-end Node.js Utilizado para criar um servidor modularizado, com rotas e lógica separadas. Desenvolvido com foco em reutilização como biblioteca.

Express.js Framework para construção de APIs de forma rápida e eficiente.

JSON Server Simula um banco de dados com um arquivo .json contendo dados mockados, facilitando o desenvolvimento e testes.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🔄 Reutilização

Uma das premissas do projeto foi a modularização. O back-end funciona como uma biblioteca genérica que pode ser integrada a qualquer front-end. Isso permite:

🚀 Facilidade de integração em novos sistemas;

🎨 Configuração personalizada de gráficos e tabelas diretamente no front-end;

📈 Escalabilidade para múltiplas visualizações de dados.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

📦 Como Rodar o Projeto

Clone o repositório git clone https://github.com/pedro00876/GrowUp.git \ cd dashboard-graficos-tabelas

Instale as dependências do Front-end cd frontend npm install npm i chart.js datatables.net datatables.net-dt jquery react-chartjs-2 json-server

Instale as dependências do Back-end cd ../backend npm install npm i body-parser cors express node-fetch

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🚀 Execução do Projeto

⚠️ Certifique-se de estar na pasta correta ao executar cada comando!

✅ Rodar o JSON Server com dados simulados

cd frontend npm run server Esse comando executa o json-server, que usa o arquivo db.json como base de dados (geralmente localizado na pasta frontend).

✅ Rodar o Back-end (Node + Express)

cd ../backend node app.js Inicia o servidor Node.js responsável por servir os dados de forma modularizada.

✅ Rodar o Front-end (React + Vite)

cd ../frontend npm run dev Inicia a aplicação React, que se conecta tanto ao JSON Server quanto ao back-end Express para exibir os dados.

✅ Após esses passos:

📁 O JSON Server estará rodando, simulando os dados da empresa;

🔧 O Back-end estará modularizado e pronto para integração com qualquer front-end;

🖥️ O Front-end apresentará os dados em gráficos e tabelas, com uma interface fluida e reutilizável
