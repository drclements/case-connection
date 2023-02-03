import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import {useState, useEffect} from 'react'
import TreatmentPlanForm from "./TreatmentPlanForm";
import TreatmentPlanCard from "./TreatmentPlanCard";

const Card = styled.li`
border: 1px solid;
max-width: 90%;
min-width: 90%;
flex-wrap: wrap;
border-radius: 10px;
background-color: var(--white);
box-shadow: 0px 0px 2px 2px;
min-height: 40rem;
overflow: clip;
list-style-type: none;
margin: 10px
`;

const Profile = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-right: solid;
min-width: 20rem;
max-width: 20rem;
text-align: center;
`

function TreatmentPlan(){
    const { id } = useParams();
    const [client, setClient] = useState([])
    const [treatmentPlans, setTreatmentPlans] = useState([])
    const [treatmentPlanMenu, setTreatmentPlanMenu] = useState(false)
    const {firstname, lastname, image, county, isActive, mentor_id, funding_id} = client
    const history = useHistory()

    
  
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
       <TreatmentPlanCard treatmentPlan={treatmentPlan} />
        )
    

    return(
        <Card className="flex">
            <Profile className="center">
                    <h2>{`${firstname} ${lastname}`}</h2>
                    <h4>County: {county}</h4>
                    <label><strong>Mentee ID</strong></label>
                    <p>{client.id}</p>
                    {mentor_id === null ? (
                        <button>Assign Mentor to Case</button>
                    ) : (
                    <p>{`Funding: ${mentor_id}`}</p>
                    )}
                    {funding_id === null ? (
                        <button>Add Funding</button>
                    ) : (
                    <p>{`Funding: ${funding_id}`}</p>
                    )
                    }
                    {isActive === true? (
                        <p>
                        <strong>Status:</strong> Active
                        </p>  
                        ) : (
                            <p>
                        <strong>Status:</strong> Inactive
                        </p> 
                        )}
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
                    {
                        displayTreatmentPlans
                    }
                </section>
                
        </Card>
    )
}

export default TreatmentPlan