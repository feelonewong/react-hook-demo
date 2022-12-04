import { useState } from 'react'
import {HashRouter, Route, Routes} from 'react-router-dom'
import Login from "./views/Login/"
function App() {
  const [count, setCount] = useState(0)

  return (
    <HashRouter>
      <Routes>
        <Route element={<Login/>} path='/'></Route>
      </Routes>
    </HashRouter>
  )
}

export default App
