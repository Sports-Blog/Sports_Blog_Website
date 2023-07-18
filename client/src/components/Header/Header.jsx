import "./Header.css";

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitle">Sports Blog</span>
        </div>
        <div>
        <img 
        className="headerImg" 
        src="https://djcs-prod.s3.amazonaws.com/public/blogs/deloitte/blogs.dir/8/files/2023/01/Live-Sports-IMAGE.png"
        alt="" />
        </div>
    </div>
  )
}
