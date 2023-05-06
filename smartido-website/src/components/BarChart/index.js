import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(
    CategoryScale, LinearScale, BarElement, Tooltip, Legend
);

const BarChart = ({ title, titleGraph, labels, dataBarGraph }) => {

    const data = {
        labels: labels,
        datasets: [
        {
            label: titleGraph,
            data: dataBarGraph,
            backgroundColor: ['#420F38','#974E8A']
        }
        ]
    }

    const options = {
        scales: {
        yAxes: [{
            ticks: {
            beginAtZero: true
            }
        }]
        }
    }

    return (
        <div className="statistic_large_container">
            <div className="statistic_title">{title}</div>
            <div>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
}

export default BarChart;