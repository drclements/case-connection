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

function App() {
  const [currentUser, setCurrentUser] = useState(null)
 

  useEffect(() => {
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((data) => setCurrentUser(data))
      }
    })

  }, [])



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
      <Header currentUser={currentUser}  />
      <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} onLogout={handleLogout}  />
      <Switch>
        <Route exact path="/"> 
          <Dashboard currentUser={currentUser} />
        </Route>
        <Route path="/caseload">
          <MyCaseload />
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
