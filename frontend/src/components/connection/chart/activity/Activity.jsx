import React from 'react';
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

import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const scales = {
    x: { display: false, grid: { display: false } },
    y: { display: false, grid: { display: false } }
}

const plugins = {
    legend: { display: false },
    title: {
        display: false,
        text: 'Chart.js Bar Chart',
    }
}

const options = {
    scales,
    maintainAspectRatio: false,
    
    plugins
};

const datasets = [
    {
        borderColor: 'rgba(0, 255, 30)',
        data: [3,2,3,4,5,6,10,7,7,3,2,3,4,5,6,10,7,7,2,3,4,5,6,10,7,7,3,2,3,4,5,6,10,7,7,2,3,4,5,6,10,7,7,3,2,3,4,5,6,10,7,7],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        pointRadius: 0, // скрыть точки
        cubicInterpolationMode: 'monotone', // сделать линию более гладкой
        borderWidth: 1
    }
]

var dbg_labels = new Array(); 

for(var i = 0; i < datasets[0].data.length ;i++){
    dbg_labels.push(i);
}

const labels = dbg_labels;

const data = {
  labels,
  datasets
};

const Activity = (props) => {
    return (
        <div style={{ width: '80%', height: '70px', background: 'black', borderRadius: '15px', padding: '8px'}}>
            <Line data={data} options={options} />
        </div>
    )
}

export default Activity;