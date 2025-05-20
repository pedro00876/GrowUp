async function buildTableConfig(payload) {
  const dataset = payload.dataset;
  const response = await fetch('http://localhost:3000/data');
  const data = await response.json();

  let rows = [];

  if (dataset === 'lista_atendimentos') {
    rows = data.map(item => ({
      codigo_atendimento: item.codigo_atendimento,
      descricao_atendimento: item.descricao_atendimento,
      cliente: item.cliente,
      solicitante: item.solicitante,
      data_solicitacao: item.data_solicitacao,
      servico: item.servico,
      atendente: item.atendente,
      prioridade: item.prioridade,
      nota: item.nota,
      interacoes: item.interacoes,
      tempo_resolucao_hrs: item.tempo_resolucao_hrs,
    }));

  } else if (dataset === 'soma_interacoes_por_cliente') {
    const grupos = {};
    data.forEach(item => {
      const cliente = item.cliente;
      grupos[cliente] = (grupos[cliente] || 0) + item.interacoes;
    });
    rows = Object.entries(grupos).map(([cliente, totalInteracoes]) => ({
      cliente,
      totalInteracoes,
    }));

  } else if (dataset === 'media_tempo_resolucao_por_servico') {
    const grupos = {};
    data.forEach(item => {
      const servico = item.servico;
      if (!grupos[servico]) grupos[servico] = { soma: 0, count: 0 };
      grupos[servico].soma += item.tempo_resolucao_hrs;
      grupos[servico].count += 1;
    });
    rows = Object.entries(grupos).map(([servico, stats]) => ({
      servico,
      mediaTempoResolucao: Number((stats.soma / stats.count).toFixed(2)),
    }));

  } else if (dataset === 'media_nota_por_prioridade') {
  const notaMap = {
    "Péssimo": 1,
    "Ruim": 2,
    "Regular": 3,
    "Bom": 4,
    "Ótimo": 5
  };

  const grupos = {};
  data.forEach(item => {
    const prioridade = item.prioridade;
    const notaNumerica = notaMap[item.nota];

    if (notaNumerica !== undefined) {
      if (!grupos[prioridade]) grupos[prioridade] = { soma: 0, count: 0 };
      grupos[prioridade].soma += notaNumerica;
      grupos[prioridade].count += 1;
    }
  });

  rows = Object.entries(grupos).map(([prioridade, stats]) => ({
    prioridade,
    media_nota: stats.count > 0 ? Number((stats.soma / stats.count).toFixed(2)) : 0,
  }));

  } else if (dataset === 'tempo_total_resolucao_por_cliente') {
    const grupos = {};
    data.forEach(item => {
      const cliente = item.cliente;
      grupos[cliente] = (grupos[cliente] || 0) + item.tempo_resolucao_hrs;
    });
    rows = Object.entries(grupos).map(([cliente, totalHoras]) => ({
      cliente,
      tempo_total_resolucao_hrs: Number(totalHoras.toFixed(2)),
    }));

  } else if (dataset === 'interacoes_por_atendente') {
    const grupos = {};
    data.forEach(item => {
      const atendente = item.atendente;
      grupos[atendente] = (grupos[atendente] || 0) + item.interacoes;
    });
    rows = Object.entries(grupos).map(([atendente, totalInteracoes]) => ({
      atendente,
      total_interacoes: totalInteracoes,
    }));

  } else if (dataset === 'atendimentos_por_data') {
    const grupos = {};
    data.forEach(item => {
      const dataFormatada = new Date(item.data_solicitacao).toISOString().split('T')[0];
      grupos[dataFormatada] = (grupos[dataFormatada] || 0) + 1;
    });
    rows = Object.entries(grupos).map(([data, total]) => ({
      data,
      total_atendimentos: total,
    }));

  } else if (dataset === 'nota_media_por_servico') {
  const notaMap = {
    "Péssimo": 1,
    "Ruim": 2,
    "Regular": 3,
    "Bom": 4,
    "Ótimo": 5
  };

  const grupos = {};
  data.forEach(item => {
    const servico = item.servico;
    const notaNumerica = notaMap[item.nota];

    if (notaNumerica !== undefined) {
      if (!grupos[servico]) grupos[servico] = { soma: 0, count: 0 };
      grupos[servico].soma += notaNumerica;
      grupos[servico].count += 1;
    }
  });

  rows = Object.entries(grupos).map(([servico, stats]) => ({
    servico,
    media_nota: stats.count > 0 ? Number((stats.soma / stats.count).toFixed(2)) : 0,
  }));

} else {
    rows = [];
  }

  return {
    data: rows,
  };
}

module.exports = { buildTableConfig };

