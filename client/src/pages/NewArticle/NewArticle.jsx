import './NewArticle.css'
import Button from 'react-bootstrap/esm/Button'

export default function NewArticle() {
  return (
    <div className='NewArticle'>
        <img src="https://cutewallpaper.org/35/early-fall-desktop-wallpaper/101067693.jpg" alt="" className="newArticleImg" />
        <form className="newArticleForm">
            <div className="newArticleFormGroup">
                <input type="file" id="fileInput"/>
                <input type="text" placeholder='Title' className='newArticleInput' autoFocus={true}/>
            </div>
            <div className="newArticleFormGroup">
                <textarea placeholder='Give your news' type="text" className='newArticleInput newArticleText'></textarea>
            </div>
            <Button className="newArticleSubmit" variant="success">
                Publish
            </Button>
        </form>
    </div>
  )
}
