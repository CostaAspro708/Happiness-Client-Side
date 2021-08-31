import { useState, useEffect,useRef } from "react";
import React from 'react';
import Chart from 'chart.js/auto';



export function ExampleChart(props){
 
   
    const chartRef = useRef(null);
    const [myChart, setMyChart] = useState(null);
    useEffect(() => {
      if (!chartRef) return;
      const ctx = chartRef.current.getContext("2d");
      const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: props.labels,
            datasets: [{
                label: 'Rank of hapiness',
                data: props.data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                
                y: {
                    beginAtZero: true,
                    reverse: true,
                }
            }
        }
    });
      setMyChart(myChart);
    }, [chartRef]);
  
    
  
    return <canvas ref={chartRef} id="myChart" width="600" height="100" />;
}

