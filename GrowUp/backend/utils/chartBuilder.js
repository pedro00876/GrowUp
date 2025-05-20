async function buildChartConfig(payload) {
  const dataset = payload.dataset;
  const chartType = payload.chartType || 'bar';
  const title = payload.title || '';

  const response = await fetch('http://localhost:3000/data');
  const data = await response.json();

  let labels = [];
  let chartData = [];

  if (dataset === 'tempo_resolucao_hrs_por_prioridade') {
    // Média do tempo_resolucao_hrs por prioridade
    const grupos = {};
    data.forEach(item => {
      const prioridade = item.prioridade;
      const tempo = item.tempo_resolucao_hrs;
      if (!grupos[prioridade]) grupos[prioridade] = { soma: 0, count: 0 };
      grupos[prioridade].soma += tempo;
      grupos[prioridade].count += 1;
    });
    labels = Object.keys(grupos);
    chartData = labels.map(prio => Number((grupos[prio].soma / grupos[prio].count).toFixed(2)));

  } else if (dataset === 'contagem_por_cliente') {
    // Contagem de atendimentos por cliente
    const grupos = {};
    data.forEach(item => {
      const cliente = item.cliente;
      grupos[cliente] = (grupos[cliente] || 0) + 1;
    });
    labels = Object.keys(grupos);
    chartData = labels.map(cliente => grupos[cliente]);

  } else if (dataset === 'media_interacoes_por_servico') {
    // Média de interações por serviço
    const grupos = {};
    data.forEach(item => {
      const servico = item.servico;
      const interacoes = item.interacoes;
      if (!grupos[servico]) grupos[servico] = { soma: 0, count: 0 };
      grupos[servico].soma += interacoes;
      grupos[servico].count += 1;
    });
    labels = Object.keys(grupos);
    chartData = labels.map(servico => Number((grupos[servico].soma / grupos[servico].count).toFixed(2)));

  } else if (dataset === 'media_tempo_fechamento_por_prioridade') {
    // Média do tempo_fechamento_hrs por prioridade
    const grupos = {};
    data.forEach(item => {
      const prioridade = item.prioridade;
      const tempo = item.tempo_fechamento_hrs;
      if (!grupos[prioridade]) grupos[prioridade] = { soma: 0, count: 0 };
      grupos[prioridade].soma += tempo;
      grupos[prioridade].count += 1;
    });
    labels = Object.keys(grupos);
    chartData = labels.map(prio => Number((grupos[prio].soma / grupos[prio].count).toFixed(2)));

  } else if (dataset === 'contagem_atendimentos_por_atendente') {
    // Contagem de atendimentos por atendente
    const grupos = {};
    data.forEach(item => {
      const atendente = item.atendente;
      grupos[atendente] = (grupos[atendente] || 0) + 1;
    });
    labels = Object.keys(grupos);
    chartData = labels.map(atendente => grupos[atendente]);

  } else if (dataset === 'media_tempo_inicio_por_prioridade') {
    // Média do tempo_inicio_hrs por prioridade
    const grupos = {};
    data.forEach(item => {
      const prioridade = item.prioridade;
      const tempo = item.tempo_inicio_hrs;
      if (!grupos[prioridade]) grupos[prioridade] = { soma: 0, count: 0 };
      grupos[prioridade].soma += tempo;
      grupos[prioridade].count += 1;
    });
    labels = Object.keys(grupos);
    chartData = labels.map(prio => Number((grupos[prio].soma / grupos[prio].count).toFixed(2)));

  } else if (dataset === 'media_nota_por_prioridade') {
    // Média da nota por prioridade
    // Nota pode ser 'Excelente', 'Regular', etc, vamos converter em números pra gráfico:
    const valorNota = { 'Excelente': 3, 'Bom': 2, 'Regular': 1, 'Ruim': 0 };
    const grupos = {};
    data.forEach(item => {
      const prioridade = item.prioridade;
      const nota = valorNota[item.nota] || 0;
      if (!grupos[prioridade]) grupos[prioridade] = { soma: 0, count: 0 };
      grupos[prioridade].soma += nota;
      grupos[prioridade].count += 1;
    });
    labels = Object.keys(grupos);
    chartData = labels.map(prio => Number((grupos[prio].soma / grupos[prio].count).toFixed(2)));

  } else if (dataset === 'total_interacoes_por_cliente') {
    // Soma total de interações por cliente
    const grupos = {};
    data.forEach(item => {
      const cliente = item.cliente;
      grupos[cliente] = (grupos[cliente] || 0) + item.interacoes;
    });
    labels = Object.keys(grupos);
    chartData = labels.map(cliente => grupos[cliente]);

  } else {
    // Dataset não reconhecido
    return {
      type: chartType,
      data: {
        labels: [],
        datasets: [{
          label: 'Nenhum dado disponível',
          data: [],
          backgroundColor: [],
        }],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Dataset não reconhecido',
          },
        },
      },
    };
  }

  const defaultColors = ['#4dc9f6', '#f67019', '#f53794', '#54f8ea', '#00a896', '#a05195'];
  const backgroundColors = labels.map((_, i) => defaultColors[i % defaultColors.length]);

  return {
    type: chartType,
    data: {
      labels,
      datasets: [
        {
          label: title,
          data: chartData,
          backgroundColor: backgroundColors,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: title,
        },
      },
    },
  };
}

module.exports = { buildChartConfig };

