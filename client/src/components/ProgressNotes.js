import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import {useState, useEffect} from 'react'
import ProgressNoteForm from "./ProgressNoteForm";
import ProgressNoteCard from "./ProgressNoteCard";
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

function ProgressNotes(){
    const { id } = useParams();
    const [client, setClient] = useState([])
    const [progressNotes, setProgressNotes] = useState([])
    const [progressNoteMenu, setProgressNoteMenu] = useState(false)
    const {firstname, lastname, county, isActive, case_manager, funding} = client
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
        <ProgressNoteCard key={progressNote.id} progressNote={progressNote} />
        )

    return(
        <div >
            <h2 style={{margin: "2rem 5rem"}}>Mentee Progress Notes</h2>
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
            <div >
                <div style={{margin:"0 5rem"}}>
                    {progressNoteMenu === false ? (
                        <Button onClick={handleCreateProgressNoteClick} >Create New Progress Note</Button>
                    ) : (
                        <>
                        <Button onClick={handleCreateProgressNoteClick} >Close Form</Button>
                        <ProgressNoteForm client={client} onNewProgressNote={setUpdateProgressNotes} onCloseForm={handleCreateProgressNoteClick} />
                        </>
                    )}
                </div>
                <CardDiv className="flex">
                    { displayProgressNotes }
                </CardDiv>
            </div>     
        </div>
    )
}

export default ProgressNotes

