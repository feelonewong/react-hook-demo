import {HashRouter, Route, Routes, Link, Navigate} from 'react-router-dom'
import Layout from "./views/Layout/"
import Home from "./views/Home/"
import User from "./views/User/"

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/layout" />}></Route>
        <Route path='/layout' element={<Layout/>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="user" element={<User></User>}></Route>
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
