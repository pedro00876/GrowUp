const defaultColors = [
  'rgba(255, 99, 132, 0.6)',
  'rgba(54, 162, 235, 0.6)',
  'rgba(255, 206, 86, 0.6)',
  'rgba(75, 192, 192, 0.6)',
  'rgba(153, 102, 255, 0.6)',
  'rgba(255, 159, 64, 0.6)'
];

function formatValue(formatType, value) {
  if (!formatType) return value;

  switch (formatType) {
    case 'currency':
      return `R$ ${parseFloat(value).toFixed(2).replace('.', ',')}`;
    case 'percent':
      return `${(parseFloat(value) * 100).toFixed(1)}%`;
    case 'decimal':
      return parseFloat(value).toFixed(2);
    default:
      return value;
  }
}

exports.buildChartConfig = (data) => {
  const {
    chartType = 'bar',
    labels = [],
    datasets = [],
    title = '',
    format = null
  } = data;

  const finalDatasets = datasets.map((ds, i) => ({
    ...ds,
    backgroundColor: ds.backgroundColor || defaultColors[i % defaultColors.length],
    borderColor: ds.borderColor || defaultColors[i % defaultColors.length],
    fill: chartType === 'line' ? false : true
  }));

  return {
    type: chartType,
    data: {
      labels,
      datasets: finalDatasets
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: !!title,
          text: title
        }
      }
    }
  };
};
