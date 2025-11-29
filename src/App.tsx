import { useState } from 'react'

import './App.css'
import Login from './component/login.tsx'
import Chat from './component/chat.tsx'

function App() {

  let [isLogged] = useState(localStorage.getItem("logged"))

  return (
    <>
      <header>
        <h1>ERP Dolo</h1>

        {isLogged === "true" ? <p>Welcome back, <b>{localStorage.getItem("user")}</b></p> : <Login />}

      </header>
      <Chat/>

    </>
  )
}

export default App
