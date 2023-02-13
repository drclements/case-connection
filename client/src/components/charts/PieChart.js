import React, {useState, useEffect} from "react"
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import { Pie } from "react-chartjs-2"


const PieChart = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [chart, setChart] = useState([])
    
    useEffect(() => {
        const fetchFunding = async () => {
            await fetch('/fundings')
            .then(res => res.json())
            .then (data => setChart(data))
            setIsLoading(false)
        }
        fetchFunding()
    }, [])

let data = {
    labels: chart?.map(x => x.name),
    datasets: [{
        label: "Funding Pool",
        data: chart?.map(x => x.amount),
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
            <Pie 
            data={data}
            height={400}
            options={options}
            />
        </div>
    )
}

export default PieChart