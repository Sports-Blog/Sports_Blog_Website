import './SinglePost.css'
import Button from "react-bootstrap/Button"

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img src="https://c4.wallpaperflare.com/wallpaper/1012/836/917/peacefulness-wallpaper-preview.jpg" alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                <div className="singlePostEdit">
                    <Button variant="secondary">Edit</Button>
                    <Button variant='danger'>Delete</Button>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>
                    Author: <b>Dimitris</b>
                </span>
                <span className='singlePostDate'>
                    1 hour ago
                </span>
            </div>
            <p className='singlePostDesc'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius ut doloremque non voluptatum, expedita quis consequuntur corrupti nemo quas. Molestiae debitis ab sint incidunt quam rem et veniam labore adipisci.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius ut doloremque non voluptatum, expedita quis consequuntur corrupti nemo quas. Molestiae debitis ab sint incidunt quam rem et veniam labore adipisci.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius ut doloremque non voluptatum, expedita quis consequuntur corrupti nemo quas. Molestiae debitis ab sint incidunt quam rem et veniam labore adipisci.
            </p>
        </div>
    </div>
  )
}
