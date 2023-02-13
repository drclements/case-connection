import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Login from "./components/Login"
import Header from "./components/Header"
import Dashboard from "./components/Dashboard";
import SideBar from "./components/SideBar";
import MyCaseload from "./components/MyCaseload";
import NewClientForm from "./components/NewClientForm";
import ClientChart from "./components/ClientChart";
import ProgressNotes from "./components/ProgressNotes"
import TreatmentPlan from "./components/TreatmentPlan";
import Assessments from "./components/Assessments";
import FundingPage from "./components/FundingPage";
import FundingForm from "./components/FundingForm";
import ProgramAnnouncementForm from "./components/ProgramAnnouncementForm";
import Profile from "./components/Profile";
import ProfileUpdateForm from "./components/ProfileUpdateForm";
import ClientDetails from "./components/ClientDetails";
import ClientUpdateForm from "./components/ClientUpdateForm";

function App() {
  const history = useHistory()
  const [currentUser, setCurrentUser] = useState(null)
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [clients, setClients] = useState([]) 
  

  useEffect(() => {
    setIsLoading(true)
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          setCurrentUser(data)
        })
      }
    })
  }, [])

  useEffect(() => {
    fetch('/clients')
    .then(res => res.json())
    .then(data => setClients(data))
  }, [])

 
    useEffect(() => {
      fetch('/case_managers')
      .then(res => res.json())
      .then(data => {
          setUsers(data)
      })
  }, [])



  function handleUserUpdate (updatedInfo) {
    setCurrentUser(updatedInfo)
  }

  function handleLogout() {
    fetch("/logout", {method: "DELETE"}).then((r) => {
      if (r.ok) {
        setCurrentUser(null)
      }
    });
  }

  if(!currentUser) return(
    <div >
    <Login onLogin={setCurrentUser}/>
   </div>
  )


  return (
    <div >
      <Header isLoading={isLoading} users={users}  currentUser={currentUser}  />
      <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} onLogout={handleLogout}  />
      <Switch>
        <Route exact path="/"> 
          <Dashboard currentUser={currentUser} />
        </Route>
        <Route path='/profile'>
          <Profile users={users}  currentUser={currentUser} />
        </Route>
        <Route path='/update-profile'>
          <ProfileUpdateForm setCurrentUser={handleUserUpdate} currentUser={currentUser} />
        </Route>
        <Route path="/caseload">
          <MyCaseload />
        </Route>
        <Route path="/funding">
          <FundingPage />
        </Route>
        <Route path="/new-funding">
          <FundingForm />
        </Route>
        <Route path="/clients/:id"> 
          <ClientChart />
        </Route>
        <Route path="/client-details/:id"> 
          <ClientDetails clients={clients} />
        </Route>
        <Route path="/treatment-plan/:id"> 
          <TreatmentPlan />
        </Route>
        <Route path="/progress-note/:id"> 
          <ProgressNotes />
        </Route>
        <Route path="/assessment/:id"> 
          <Assessments />
        </Route>
        <Route path="/create-announcement">
          <ProgramAnnouncementForm />
        </Route>
        <Route path="/new-client">
          <NewClientForm />
        </Route>
        <Route path="*">
            <h1>404 not found</h1>
          </Route>
     </Switch>
    </div>
  );
}

export default App;
