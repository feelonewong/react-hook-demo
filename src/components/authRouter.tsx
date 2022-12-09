import { useLocation, Navigate } from "react-router-dom";
function AuthRouter(props:{ children: JSX.Element }) {
  const token = localStorage.getItem("token")
  const { pathname } = useLocation()
  if (pathname === '/login') {
    return props.children;
  }
  if (!token) {
    return <Navigate to="/login"></Navigate>
  } else {
    return props.children;
  }
}

export default AuthRouter;