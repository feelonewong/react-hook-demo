import {HashRouter, Route, Routes, Link, Navigate} from 'react-router-dom'
import GetRouters from "./router/index"

function App() {
  return (
    <HashRouter>
        <GetRouters/>
    </HashRouter>
  )
}

export default App
