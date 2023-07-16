import './Register.css'
import Button from 'react-bootstrap/esm/Button'

export default function Register() {
  return (
    <div className='register'>
        <div className="registerWrapper">
        <span className="registerTitle">
            Register
        </span>
        <form className="registerForm">
        <label>Username</label>
            <input type="text" placeholder='Enter your Username' className='registerInputUser'/>
            <label>Email</label>
            <input type="text" placeholder='Enter your Email' className='registerInput'/>
            <label>Password</label>
            <input type="password" placeholder='Enter your password' className='registerPassword'/>
            <Button className="registerButton" variant="success">Register Now!</Button>
        </form>
        <Button className='loginButton' variant='info'>
            Login
        </Button>
        </div>
    </div>
  )
}
