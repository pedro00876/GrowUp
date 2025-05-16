import React, { useEffect, useRef, useState } from 'react';
import $ from 'jquery';
import 'datatables.net-dt';

const DynamicTable = () => {
  const tableRef = useRef();
  const [headers, setHeaders] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    // Requisição para o backend
    fetch('http://localhost:3000/render', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'table',
        headers: ['Prioridade', 'Quantidade', 'Porcentagem'],
        rows: [
          ['Baixa', 1500, 0.10],
          ['Urgente', 1800, 0.13],
          ['Média', 2400, 0.21]
        ],
        columnFormats: ['text', 'null', 'percent']
      })
    })
      .then(res => res.json())
      .then(data => {
        setHeaders(data.headers);
        setRows(data.data);
        // Inicializa DataTable depois de pequeno delay (após renderização)
        setTimeout(() => {
          if ($.fn.DataTable.isDataTable(tableRef.current)) {
            $(tableRef.current).DataTable().destroy();
          }
          $(tableRef.current).DataTable();
        }, 100);
      });
  }, []);

  return (
    <div>
      <table ref={tableRef} className="display" style={{ width: '100%' }}>
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th key={i}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
