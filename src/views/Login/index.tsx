import "./login.scss"
import BackgroundImg from "../../assets/login-bg.jpg"
import logo from "../../assets/logo.png";
import LoginForm from "./components/loginForm.tsx";
const styleLoginBg = {
  backgroundImage: `url(${BackgroundImg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: "cover",

};
function Login() {
  return (
    <div className="login-container" style={styleLoginBg}>
      <div className="login-wrap">
        <div className="login-form">
          <img src={logo} alt="React+Hook Admin" />
          <h1>React+Hook Admin</h1>
          <LoginForm></LoginForm>
        </div>
      </div>
    </div>
  );
}

export default Login;