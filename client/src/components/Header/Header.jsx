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
        src="https://store-images.s-microsoft.com/image/apps.2127.14621801316397473.3c7c0657-fe34-4727-8700-af9b251375de.193acee6-86b5-42a2-82f7-6ab2d5acea1a?mode=scale&q=90&h=1080&w=1920"
        alt="" />
        </div>
    </div>
  )
}
