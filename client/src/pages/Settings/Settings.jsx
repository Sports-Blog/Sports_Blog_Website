import './Settings.css'
import Button from 'react-bootstrap/esm/Button'

export default function Settings() {
  return (
    <div className='Settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">
                    Update Account
                </span>
                <span className="settingsDeleteTitle">
                    Delete Account
                </span>
            </div>
            <form className="settingsForm">
                <label>
                    Profile Picture
                </label>
                <div className="settingsPPF">
                    <img src="https://previews.123rf.com/images/valentint/valentint1611/valentint161105164/66183942-my-account-icon-my-account-website-button-on-white-background.jpg" alt="" />
                    <input type='file' id="fileInput"/>
                </div>
                <label>Username</label>
                <input type='text' placeholder='Dimitris'/>
                <label>Email</label>
                <input type='text' placeholder='dimitris@gmail.com'/>
                <label>Password</label>
                <input type='password'/>
                <Button variant="success">Update</Button>
            </form>
        </div>
    </div>
  )
}
