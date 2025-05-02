//componente para deixar os gráficos personalizaveis 


import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function CustomChart({
  data,
  options,
  width = '100%',
  height = '400px',
  position = 'relative',
}) {
  return (
    <div
      style={{
        width,
        height,
        position,
        margin: 'auto',
      }}
    >
      <Line data={data} options={options} />
    </div>
  );
}
