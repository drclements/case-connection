import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components"
import FundingCard from "./FundingCard";
import PieChart from "./charts/PieChart";
import BarChart from "./charts/BarChart"
import { Button } from "../styled-components/Buttons";

const PageFrame = styled.div`
margin: 2rem 3rem
`
const WelcomeTitle = styled.h2`
margin: 2rem 5rem
`

const ButtonDiv = styled.div`
    margin: 0 5rem;
`

const CardDiv = styled.div`
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 0 3rem
    
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
            <ButtonDiv >
                <Button onClick={() => history.push('/new-funding')}>Add New Funding Pool</Button>
                {toggleChart === false? (
                    <>
                    <Button style={{marginLeft:'1rem'}} onClick={handleToggleClick}>Toggle Bar Graph</Button>
                    <PieChart />
                    </>
                ) : (
                    <>
                    <Button style={{marginLeft:'1rem'}} onClick={handleToggleClick}>Toggle Pie Chart</Button>
                    <BarChart />
                    </>
                )}

            </ButtonDiv>
            <ButtonDiv>
                {details === false ? (
                    <>
                    <Button onClick={handleShowDetailsClick}>Show Details</Button>
                </>
                ) : (
                    <>
                    <Button onClick={handleShowDetailsClick}>Hide Details</Button>
                    </>
                )}
            </ButtonDiv>
                {details === false ? null : <CardDiv className="flex" >{fundingToDisplay}</CardDiv>}                  
        </PageFrame>
    )
}

export default FundingPage