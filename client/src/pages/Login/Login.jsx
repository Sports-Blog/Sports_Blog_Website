import './Login.css'
import Button from 'react-bootstrap/esm/Button'

export default function Login() {
  return (
    <div className='login'>
        <div className="loginWrapper">
        <span className="loginTitle">
            Login
        </span>
        <form className="loginForm">
            <label>Email</label>
            <input type="text" placeholder='Enter your Email' className='loginInput'/>
            <label>Password</label>
            <input type="password" placeholder='Enter your password' className='loginPassword'/>
            <Button className="loginButton" variant="info">Login</Button>
        </form>
        <Button className='registerButton' variant='success'>
            Register Now!
        </Button>
        </div>
    </div>
  )
}
