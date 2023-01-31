import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login"
import Header from "./components/Header"
import Dashboard from "./components/Dashboard";

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
      <Header currentUser={currentUser} onLogout={handleLogout} />
      <Switch>
        <Route exact path="/"> 
          <Dashboard />
        </Route>
     </Switch>
    </div>
  );
}

export default App;
