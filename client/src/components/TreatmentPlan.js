import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import {useState, useEffect} from 'react'
import TreatmentPlanForm from "./TreatmentPlanForm";
import TreatmentPlanCard from "./TreatmentPlanCard";
import ClientPhoto from "./ClientPhoto";

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
    
`

function TreatmentPlan(){
    const { id } = useParams();
    const [client, setClient] = useState([])
    const [treatmentPlans, setTreatmentPlans] = useState([])
    const [treatmentPlanMenu, setTreatmentPlanMenu] = useState(false)
    const {firstname, lastname, image, county, isActive, funding_id, age, gender, race, ethnicity, street_address, city, state, zip, case_manager, funding} = client
   
    
  
    useEffect(() => {
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
        })
    }, [])

    function handleCreateTreatmentPlanClick(){
        setTreatmentPlanMenu(!treatmentPlanMenu)
    }

    let clientId = parseInt(id)
  
    const findClientTreatmentPlans = treatmentPlans.filter(treatmentPlan => (treatmentPlan.client_id === clientId))

    const displayTreatmentPlans = findClientTreatmentPlans.map(treatmentPlan => 
       <TreatmentPlanCard key={treatmentPlan.id} treatmentPlan={treatmentPlan} />
        )
    
    return(
        <div className="">
            <Profile className="flex">
            <div style={{margin: "2rem 2rem 2rem 4rem"}}>
                <ClientPhoto />
            </div>
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
        </Profile>
                <section style={{marginLeft:"20px"}}>
                    <h2>Mentee Treatment Plan</h2>
                    
                        {treatmentPlanMenu === false ? (
                            <button onClick={handleCreateTreatmentPlanClick} >Create New Treatment Plan</button>
                        ) : (
                            <>
                            <button onClick={handleCreateTreatmentPlanClick} >Close Form</button>
                            <TreatmentPlanForm onCloseForm={handleCreateTreatmentPlanClick} />
                            </>
                        )}
                    <CardDiv className="flex">
                        { displayTreatmentPlans }
                    </CardDiv>
                </section>
                
        </div>
    )
}

export default TreatmentPlan