import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components"
import FundingCard from "./FundingCard";
import PieChart from "./charts/PieChart";
import BarChart from "./charts/BarChart"

const PageFrame = styled.div`
margin: 25px;
`
const WelcomeTitle = styled.h2`

`

function FundingPage( {  }) {
    const history = useHistory()
    const [fundingList, setFundingList] = useState([])
    const [details, setDetails] = useState(false)
    const [toggleChart, setToggleChart] = useState(false)
 
    useEffect(() => {
        fetch(`/fundings`)
        .then(res => res.json())
        .then(fundingData => setFundingList(fundingData))
    }, [])

    function handleShowDetailsClick() {
        setDetails(!details)
    }

    function handleToggleClick() {
        setToggleChart(!toggleChart)
    }


    const fundingToDisplay = fundingList.map(funding => 
        <FundingCard key={funding.id} funding={funding} />
    )
    
    return (
        <PageFrame >
            <WelcomeTitle >
                Funding Overview
            </WelcomeTitle>
            <button onClick={() => history.push('/new-funding')}>Add New Funding Pool</button>
            {toggleChart === false? (
                <>
                <button onClick={handleToggleClick}>Toggle Bar Graph</button>
                <PieChart />
                </>
            ) : (
                <>
                <button onClick={handleToggleClick}>Toggle Pie Chart</button>
                <BarChart />
                </>
            )}
            {details === false ? (
                <>
                <button onClick={handleShowDetailsClick}>Show Details</button>
            </>
            ) : (
                <>
                <button onClick={handleShowDetailsClick}>Hide Details</button>
                <div className="flex" >
                {
                    fundingToDisplay
                }
                </div>
                </>
            )}
            
        </PageFrame>
    )
}

export default FundingPage