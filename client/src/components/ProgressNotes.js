import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import {useState, useEffect} from 'react'
import ProgressNoteForm from "./ProgressNoteForm";
import ProgressNoteCard from "./ProgressNoteCard";

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

function ProgressNotes(){
    const { id } = useParams();
    const [client, setClient] = useState([])
    const [progressNotes, setProgressNotes] = useState([])
    const [progressNoteMenu, setProgressNoteMenu] = useState(false)
    const {firstname, lastname, image, county, isActive, mentor_id, funding_id} = client
    const history = useHistory()

    
  
    useEffect(() => {
        Promise.all([
            fetch(`/clients/${id}`),
            fetch('/progress_notes'),
        ])
        .then(([resClient, resProgressNotes]) =>
            Promise.all([resClient.json(), resProgressNotes.json()])
        )
        .then(([dataClient, dataProgressNotes]) => {
            setClient(dataClient);
            setProgressNotes(dataProgressNotes)
        })
    }, [])

    function handleCreateProgressNoteClick(){
        setProgressNoteMenu(!progressNoteMenu)
    }

    function setUpdateProgressNotes(newProgressNote) {
        setProgressNotes([...progressNotes, newProgressNote])
    }

    let clientId = parseInt(id)

    const findClientProgressNotes = progressNotes.filter(progressNote => (progressNote.client_id === clientId))

    const displayProgressNotes = findClientProgressNotes.map(progressNote => 
        <ProgressNoteCard progressNote={progressNote} />
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
                    <h2>Mentee Progress Notes</h2>
                    {progressNoteMenu === false ? (
                        <button onClick={handleCreateProgressNoteClick} >Create New Progress Note</button>
                    ) : (
                        <>
                        <button onClick={handleCreateProgressNoteClick} >Close Form</button>
                        <ProgressNoteForm onNewProgressNote={setUpdateProgressNotes} onCloseForm={handleCreateProgressNoteClick} />
                        </>
                    )}
                    {
                        displayProgressNotes
                    }
                </section>
                
        </Card>
    )
}

export default ProgressNotes

