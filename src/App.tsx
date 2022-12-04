import { useState } from 'react'
import {HashRouter, Route, Routes, Link} from 'react-router-dom'
import Login from "./views/Login/"
import Home from "./views/Home/"
import User from "./views/User/"
function App() {
  const [count, setCount] = useState(0)

  return (
    <HashRouter>
      <Link to="/login/home"> <h3>首页</h3> </Link>
      <Link to="/login/user"> <h3>用户页</h3> </Link>
      <Routes>
        <Route path='/login' element={<Login/>}>
          <Route path="home" element={<Home/>}/>
          <Route path="user" element={<User/>}/>
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
