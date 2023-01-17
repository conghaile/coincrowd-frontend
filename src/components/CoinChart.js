import { Chart } from 'react-chartjs-2'
import { Chart as ChartJS, TimeScale, Filler, LinearScale, BarElement, PointElement, LineElement, CategoryScale, Tooltip, LineController, BarController } from 'chart.js'
import 'chartjs-adapter-date-fns'
import { enUS } from 'date-fns/locale'

ChartJS.register({TimeScale, LinearScale, Filler, BarElement, PointElement, LineElement, CategoryScale, LineController, BarController, Tooltip})



const CoinChart = ({ mentions, price }) => {

    
    const data = () => {
        return {
            datasets: [{
                    yAxisID: 'y',
                    label: "Mentions",
                    data: mentions,
                    type: 'bar'
                },
                {
                    yAxisID: 'y1',
                    label: "Price",
                    data: price,
                    type: 'line',
                    borderColor: 'rgb(25,225,81)',
                    pointRadius: 0.1,
                    pointHoverRadius: 0.1,
                    fill: true,
                    backgroundColor: (context) => {
                        var ctx = context.chart.ctx
                        var gradient = ctx.createLinearGradient(0, 0, 0, 500)
                        gradient.addColorStop(0,'rgba(25,225,81,0.25)')
                        gradient.addColorStop(1, 'rgba(25,225,81,0.01)')
                        return gradient
                    },
                    borderWidth: 2
                },
            ]
        }
    }

    const options = {
        responsive: 'true',
        animation: {
            duration: 0
        },
        interaction: {
            intersect: false,
            mode: 'index'
        },
        scales: {
            y: {
                type: 'linear',
                position: 'right',
                grid: {
                    display: false
                },
                display: false
            },
            y1 : {
                type: 'linear',
                display: 'true',
                position: 'left'
            },
            x: {
                type: 'time',
                adapters: {
                    date: enUS
                },
                time: {
                    unit: 'day',
                },
                grid: {
                    display: false
                }
            },
        }
    }

    return (
        <Chart type='line' data={data()} options={options}/>
    )

}

export default CoinChart