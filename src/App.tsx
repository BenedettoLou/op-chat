import { useState } from 'react'

import './App.css'
import Login from './component/login.tsx'
import Chat from './component/chat.tsx'
import { logoutUser } from './actions/login.tsx'

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

      </header>

      {isLogged === "true" ? <Chat /> : ""}


    </>
  )
}

export default App
