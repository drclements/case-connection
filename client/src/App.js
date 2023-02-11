import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login"
import Header from "./components/Header"
import Dashboard from "./components/Dashboard";
import SideBar from "./components/SideBar";
import MyCaseload from "./components/MyCaseload";
import NewClientForm from "./components/NewClientForm";
import ClientDetails from "./components/ClientDetails";
import ProgressNotes from "./components/ProgressNotes"
import TreatmentPlan from "./components/TreatmentPlan";
import Assessments from "./components/Assessments";
import FundingPage from "./components/FundingPage";
import FundingForm from "./components/FundingForm";
import ProgramAnnouncementForm from "./components/ProgramAnnouncementForm";
import Profile from "./components/Profile";
import ProfileUpdateForm from "./components/ProfileUpdateForm";

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [users, setUsers] = useState([])
  const [imageData, setImageData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  

  useEffect(() => {
    setIsLoading(true)
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          setCurrentUser(data)
        })
        
        .then(() => setIsLoading(false))
      }
    })
  }, [])

 
    useEffect(() => {
      fetch('/case_managers')
      .then(res => res.json())
      .then(data => {
          setUsers(data)

      })
  }, [])

  useEffect(() => {
    fetch('/images')
    .then(res => res.json())
    .then(data => {
        setImageData(data)

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
          <Profile imageDataList={imageData} users={users}  currentUser={currentUser} />
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
          <ClientDetails />
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
