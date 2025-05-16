const express = require('express');
const bodyParser = require('body-parser');
const renderRoutes = require('./routes/renderRoutes');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/render', renderRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
