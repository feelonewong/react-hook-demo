import {HashRouter, Route, Routes, Link, Navigate} from 'react-router-dom'
import GetRouters from "./router/index"
import AuthRouter from "./components/authRouter";
function App() {
  return (
    <HashRouter>
      <AuthRouter>
        <GetRouters />
      </AuthRouter>
    </HashRouter>
  );
}

export default App
