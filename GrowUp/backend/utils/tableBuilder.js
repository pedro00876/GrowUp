function formatValue(formatType, value) {
  if (typeof value !== 'number' || !formatType) return value;

  switch (formatType) {
    case 'currency':
      return `R$ ${value.toFixed(2).replace('.', ',')}`;
    case 'percent':
      return `${(value * 100).toFixed(1)}%`;
    case 'decimal':
      return value.toFixed(2);
    default:
      return value;
  }
}

exports.buildTableConfig = (data) => {
  const { headers = [], rows = [], columnFormats = [] } = data;

  const formattedRows = rows.map(row =>
    row.map((value, colIndex) => {
      const formatType = columnFormats[colIndex] || null;
      return formatValue(formatType, value);
    })
  );

  return {
    headers,
    data: formattedRows
  };
};
