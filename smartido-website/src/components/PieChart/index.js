import { Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(
    ArcElement, Tooltip, Legend 
);

const PieChart=({title, labels, dataPie})=>{
    
    const data = {
        labels: labels,
        datasets: [
            {
                data: dataPie,
                backgroundColor: ['#420F38','#974E8A']
            }
        ]
    }
    const options = {
    }

    return(
        <div className="statistic_large_container">
            <div className="statistic_title">{title}</div>
            <div className="container_pie_chart">
                <Pie
                data={data}
                options={options}>
                </Pie>
            </div>
        </div>

            );
}


export default PieChart;