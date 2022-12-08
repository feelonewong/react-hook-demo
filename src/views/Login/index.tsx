import "./login.scss"
import BackgroundImg from "../../assets/login-bg.jpg"

const styleLoginBg = {
  backgroundImage: `url(${BackgroundImg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: "cover",

};
function Login() {
  return (
    <div className="login-container" style={styleLoginBg}>
      
    </div>
  )
}

export default Login;