import { useState } from 'react'

import './App.css'
import Login from './component/login.tsx'
import Chat from './component/chat.tsx'
import { logoutUser } from './actions/login.tsx'
import FreeSpaces from './component/free_spaces.tsx'
import { Link } from 'react-router'
function App() {

  let [isLogged] = useState(localStorage.getItem("logged"))

  return (
    <>
      <header>
        <h1>ERP Dolo</h1>

        {isLogged === "true" ?
          <div id='welcome'><p >Welcome back, <b>{localStorage.getItem("user")}</b>.</p>
            <button id='logout' onClick={logoutUser}>Logout</button>
          </div>

          : <Login />}
        {isLogged === "true" ? <FreeSpaces /> : ""}
      </header>

      {isLogged === "true" ? <div className="rightSection">
        <Chat></Chat>
        <div className="buttons">
          <Link to="emergency">Emergency</Link>
          <Link to="folders">See clinic folders</Link>
        </div>
      </div>
        : ""}
    </>
  )
}

export default App
