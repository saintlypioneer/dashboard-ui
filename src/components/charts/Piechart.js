import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart(props){

    const chartDataValues = props.data.map((item) => {
        return item.value;
    });

    const chartDataLabels = props.data.map((item) => {
        return item.name;
    });

    console.log(chartDataLabels);

    const options = {
        plugins: {
          legend: {
            display: false, // Set this to false to remove the legend
          },
        },
      };

      const data = {
        labels: chartDataLabels,
        datasets: [
          {
            label: 'Top Products',
            data: chartDataValues,
            backgroundColor: [
                '#98D89E',
                '#F6DC7D',
                '#EE8484'
            ],
            borderColor: [
                '#98D89E',
                '#F6DC7D',
                '#EE8484'
            ],
            borderWidth: 1,
          },
        ],
      };

    return (
        <Pie data={data} options={options} />
    );
}

export default PieChart;