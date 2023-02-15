import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import {useState, useEffect} from 'react'
import TreatmentPlanForm from "./TreatmentPlanForm";
import TreatmentPlanCard from "./TreatmentPlanCard";
import ClientPhoto from "./ClientPhoto";
import { Button } from "../styled-components/Buttons";

const Profile = styled.div`
    background-color: var(--light-blue);
    margin: 2rem 5rem;
    border-radius: 15px;
`
const ButtonDiv = styled.div`
    margin: 0 5rem;
`

const CardDetails = styled.div`
    background-color: white;
    margin: 4rem 1rem; 
    border-radius: 10px;
    overflow: clip;  
`

const CardDiv = styled.div`
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 0 3rem
    
`

const Loading = styled.div`
    background-color: white;
    margin: 4rem 1rem; 
    border-radius: 10px;
    min-width: 50%
`

const LoadingMessage = styled.h3`
    text-align: center;
    margin-top: 3rem
`


function TreatmentPlan(){
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(false)
    const [client, setClient] = useState([])
    const [treatmentPlans, setTreatmentPlans] = useState([])
    const [treatmentPlanMenu, setTreatmentPlanMenu] = useState(false)
    const {firstname, lastname, county, isActive, case_manager, funding} = client

    useEffect(() => {
        setIsLoading(true)
        Promise.all([
            fetch(`/clients/${id}`),
            fetch('/treatment_plans'),
        ])
        .then(([resClient, resTreatmentPlans]) =>
            Promise.all([resClient.json(), resTreatmentPlans.json()])
        )
        .then(([dataClient, dataTreatmentPlans]) => {
            setClient(dataClient);
            setTreatmentPlans(dataTreatmentPlans)
            setIsLoading(false)
        })
    }, [])

    function handleCreateTreatmentPlanClick(){
        setTreatmentPlanMenu(!treatmentPlanMenu)
    }

    function updateTPList(updatedData) {
        setTreatmentPlans([...treatmentPlans, updatedData]);
    }

    let clientId = parseInt(id)

    const findClientTreatmentPlans = treatmentPlans.filter(treatmentPlan => (treatmentPlan.client_id === clientId))

    const displayTreatmentPlans = findClientTreatmentPlans.map(treatmentPlan => 
        <TreatmentPlanCard key={treatmentPlan.id} treatmentPlan={treatmentPlan} />
        )
    
        return(
            <div >
            <h2 style={{margin: "2rem 5rem"}}>Mentee Treatment Plan</h2>
            <Profile className="flex">
            <div style={{margin: "2rem 2rem 2rem 4rem"}}>
                <ClientPhoto />
            </div>

            {isLoading === true ? (
                            <Loading >
                                <LoadingMessage><strong>Loading...</strong></LoadingMessage>
                            </Loading>
                            
                        ) : (
                        <>
                        <CardDetails>
                            <div style={{margin:"1rem 7rem 0 2rem"}}>
                            <h2 className="no-margin font-sort-mill-goudy">{`${firstname} ${lastname}`}</h2>
                            <p className="no-margin font-sort-mill-goudy"><strong>County: </strong>{county}</p>
                            <p className="no-margin font-sort-mill-goudy"><strong>Mentee ID: </strong>{client.id}</p>
                            </div>
                            </CardDetails>
                            <CardDetails>
                                <div style={{margin:"1rem 7rem 1rem 2rem"}}>
                                    <label className="font-sort-mill-goudy" style={{fontSize:"22px"}}><strong>Case Status</strong></label>
                                    <br/>
                                        {case_manager === null || case_manager === undefined ? <p className="no-margin font-sort-mill-goudy" style={{color: "red"}}>Assign Case Worker</p> : <p className="no-margin font-sort-mill-goudy"><strong>Case Worker: </strong>{case_manager.firstname} {case_manager.lastname}</p>}
                                        {funding === null || funding === undefined ? (
                                            <p className="no-margin font-sort-mill-goudy" style={{color: "red"}}>Unfunded</p>
                                        ) : (
                                        <p className="no-margin font-sort-mill-goudy"><strong>Funding: </strong>{` ${funding.name}`}</p>
                                        )
                                        }
                                    {isActive === true? (
                                        <p className="no-margin font-sort-mill-goudy">
                                        <strong>Status:</strong> Active
                                        </p>  
                                        ) : (
                                            <p className="no-margin font-sort-mill-goudy">
                                        <strong>Status:</strong> Inactive
                                        </p> 
                                        )}
                                </div>
                            </CardDetails>
                            </>
                        )}
            </Profile>
            <div >
                <div style={{margin:"0 5rem"}} >
                    {treatmentPlanMenu === false ? (
                        <Button onClick={handleCreateTreatmentPlanClick} >Create New Treatment Plan</Button>
                    ) : (
                        <>
                        <Button onClick={handleCreateTreatmentPlanClick} >Close Form</Button>
                        <TreatmentPlanForm onUpdateTP={updateTPList} client={client} onCloseForm={handleCreateTreatmentPlanClick} />
                        </>
                    )}
                </div>
                <CardDiv className="flex">
                    { displayTreatmentPlans }
                </CardDiv>
            </div>
                
        </div>
    )
}

export default TreatmentPlan