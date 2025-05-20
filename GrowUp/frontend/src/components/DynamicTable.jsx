import { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'datatables.net';

export default function DynamicTable() {
  const tableRef = useRef();
  const dataset = "lista_atendimentos"

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:4000/render', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'table',
          dataset: dataset,
        }),
      });

      const result = await response.json();

      if ($.fn.dataTable.isDataTable(tableRef.current)) {
        $(tableRef.current).DataTable().destroy();
        $(tableRef.current).empty();
      }

      if (result.data.length > 0) {
        const columns = Object.keys(result.data[0]).map(key => ({
          title: key.replace(/_/g, ' ').toUpperCase(),
          data: key,
        }));

        $(tableRef.current).DataTable({
          data: result.data,
          columns: columns,
        });
      }
    };

    fetchData();
  }, [dataset]);

  return <table ref={tableRef} className="display" style={{ width: '100%' }} />;
}
