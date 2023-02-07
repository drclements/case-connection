import { useState, useEffect } from "react";
import { UserData } from "../Data";
import { useHistory } from "react-router-dom";
import styled from "styled-components"

import FundingCard from "./FundingCard";
import PieChart from "./charts/PieChart";

const PageFrame = styled.div`
margin: 25px;
`
const WelcomeTitle = styled.h2`

`

function FundingPage( {  }) {
    const history = useHistory()
    const [fundingList, setFundingList] = useState([])
 
    useEffect(() => {
        fetch(`/fundings`)
        .then(res => res.json())
        .then(fundingData => setFundingList(fundingData))
    }, [])


    const fundingToDisplay = fundingList.map(funding => 
        <FundingCard key={funding.id} funding={funding} />
    )
    
    return (
        <PageFrame >
            <WelcomeTitle >
                Funding Overview
            </WelcomeTitle>
            <button onClick={() => history.push('/new-funding')}>Add New Funding Pool</button>
            <PieChart />
            <div className="flex" >
            {
                fundingToDisplay
            }
            </div>
        </PageFrame>
    )
}

export default FundingPage