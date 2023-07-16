import './Post.css'

export default function Post() {
  return (
    <div className="Post">
        <img 
        className='postImage'
        src='https://cdn.wallpapersafari.com/92/44/JoVfDA.jpg'
        alt=''
        />
        <div className="postInfo">
            <span className='postTitle'>
            Soccer Post
            </span>
            <hr/>
            <span className="postDate">
                1 hour ago
            </span>
            <p className='postDesc'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ex ut sapien bib.
            </p>
        </div>
    </div>
  )
}
