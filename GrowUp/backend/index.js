const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());

app.get('/api/atendimentos', async (req, res) => {
    try {
        const resposta = await axios.get('http://localhost:3000/dados_atendimento');
        const dados = resposta.data;
        res.json(dados);
    } catch (erro) {
        console.error('Erro ao buscar dados do JSON Server:', erro.message);
        res.status(500).json({ erro: 'Falha ao obter dados dos atendimentos' });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Backend rodando em http://localhost:${PORT}`);
});
