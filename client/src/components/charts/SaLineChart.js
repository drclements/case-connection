import React, {useState, useEffect} from "react"
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import { Line } from "react-chartjs-2"
import { useParams } from "react-router-dom"


const SaLineChart = ({paramId, client}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [chartData, setChartData] = useState([])
    console.log(paramId)
    
    
    useEffect(() => {
        const fetchFunding = async () => {
            await fetch(`/sample_assessments`)
            .then(res => res.json())
            .then (data => setChartData(data))
            setIsLoading(false)
        }
        fetchFunding()
    }, [])

    let clientId = parseInt(paramId)

    const findClientSas = chartData.filter(sa => (sa.client_id === clientId))

let data = {
    labels: findClientSas?.map(x => x.date),
    datasets: [{
        label: "Distress Over Time",
        data: findClientSas?.map(x => x.sa_total),
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
}

let options = {
    maintainAspectRatio: false, 
    legend: {
        labels: {
            fontSize: 25
        }
    }
}

    return (
        <div>
            <Line 
            data={data}
            height={400}
            options={options}
            />
        </div>
    )
}

export default SaLineChart