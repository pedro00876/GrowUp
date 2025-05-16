const { buildChartConfig } = require('../utils/chartBuilder');
const { buildTableConfig } = require('../utils/tableBuilder');

exports.renderHandler = (req, res) => {
  const payload = req.body;

  if (!payload.type) {
    return res.status(400).json({ error: 'Tipo não especificado (chart ou table).' });
  }

  try {
    if (payload.type === 'chart') {
      const chartConfig = buildChartConfig(payload);
      return res.json(chartConfig);
    } else if (payload.type === 'table') {
      const tableConfig = buildTableConfig(payload);
      return res.json(tableConfig);
    } else {
      return res.status(400).json({ error: 'Tipo inválido. Use "chart" ou "table".' });
    }
  } catch (err) {
    return res.status(500).json({ error: 'Erro ao processar a visualização.', detail: err.message });
  }
};
