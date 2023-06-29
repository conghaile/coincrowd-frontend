import { Chart } from 'react-chartjs-2'
import { Chart as ChartJS, TimeScale, Filler, LinearScale, BarElement, PointElement, LineElement, CategoryScale, Tooltip, LineController, BarController } from 'chart.js'
import 'chartjs-adapter-date-fns'
import { enUS } from 'date-fns/locale'

ChartJS.register({TimeScale, LinearScale, Filler, BarElement, PointElement, LineElement, CategoryScale, LineController, BarController, Tooltip})

const timescaleMap = {
    "24_hours": "minute",
    "7_days": "hour",
    "14_days": "day",
    "30_days": "day",
    "90_days": "day",
    "180_days": "day",
    "365_days": "day",
    "max": "day"

}

const CoinChart = ({ mentions, days }) => {    
    const data = () => {
        return {
            datasets: [{
                    yAxisID: 'y',
                    label: "Mentions",
                    data: mentions,
                    type: 'line',
                    borderColor: 'rgba(0,0,0,1',
                    backgroundColor: 'rgba(0,0,0,1'
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
        elements: {
            point: {
                borderWidth: 0,
                radius: 0,
                hoverRadius: 0,
                // backgroundColor: 'rgba(0,0,0,0)'
            }
        },
        scales: {
            y: {
                type: 'linear',
                position: 'left',
                grid: {
                    display: true
                },
                display: true,
                beginAtZero: true
            },
            x: {
                type: 'time',
                adapters: {
                    date: enUS
                },
                time: {
                    unit: timescaleMap[days],
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