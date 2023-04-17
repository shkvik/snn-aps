import React , { useState, useEffect }from 'react';
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

var updatedData;

try{
  const ws = new WebSocket('ws://192.168.0.131:8080');

  ws.onopen = () => {
    console.log('WebSocket connection opened');
  };

  ws.onclose = () => {
    console.log('WebSocket connection closed');
  };

  ws.onmessage = (event) => {
    updatedData = JSON.parse(event.data);
    console.log(updatedData.Modbus);
  };

  ws.send('Hello, WebSocket Server!');
}
catch(error){
  console.log(error);
}



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
}

const elements = {
    line: {
        borderColor: "black",
        borderWidth: 2,
        tension: 0.1,
        fill: false,
    }
}

const options = {
    scales,
    maintainAspectRatio: false,
    elements,
    plugins,
    animation: false
};

function generateRandomArray() {
    const arr = [];
    for (let i = 0; i < 200; i++) {
      const randomNum = Math.floor(Math.random() * 100);
      arr.push(randomNum);
    }
    return arr;
  }


const datasets = [
    {
        borderColor: 'rgba(0, 255, 30)',
        data: generateRandomArray(),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        pointRadius: 0, // скрыть точки
        // cubicInterpolationMode: 'monotone', // сделать линию более гладкой
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


const HoldingRegisters = (props) => {

    const [data, setData] = useState({
        labels: [],
        datasets: [
            {
                borderColor: 'rgba(22, 119, 255, 1)',
                // data: generateRandomArray(),
                data: generateRandomArray(),
                // backgroundColor: 'rgba(255, 99, 132, 0.5)',
                pointRadius: 0, // скрыть точки
                borderWidth: 1
            },
        ]
    });

    useEffect(() => {
        try
        {
            const ws = new WebSocket('ws://192.168.0.131:8080');
          
            ws.onopen = () => {
              console.log('WebSocket connection opened');
            };
          
            ws.onclose = () => {
              console.log('WebSocket connection closed');
            };
          
            ws.onmessage = (event) => {
                updatedData = JSON.parse(event.data);

                const newData = {
                    labels: dbg_labels,
                    datasets: [
                      {
                        data: updatedData.Modbus.HoldingRegisters[0].Values,
                      },
                    ]
                  };
                
                setData(newData)
            };
          
            ws.send('Hello, WebSocket Server!');
          }
          catch(error){
            console.log(error);
          }

        // const intervalId = setInterval(() => {
        //   // Генерация случайных данных для графика
        //   console.log(updatedData.Modbus)
        //   const newData = {
        //     labels: dbg_labels,
        //     datasets: [
        //       {
        //         // data: generateRandomArray(),
        //         data: updatedData.Modbus.HoldingRegisters[0].Values,
        //       },
        //     ]
        //   };
        //   setData(newData);
        // }, 1000);

        // return () => clearInterval(intervalId);
    }, [data]);

    return (
        <div style={{ width: '100%', height: '50px',/* background: 'black',*/ borderRadius: '15px', padding: '8px'}}>
            <Line data={data} options={options} />
        </div>
    )
}

export default HoldingRegisters;