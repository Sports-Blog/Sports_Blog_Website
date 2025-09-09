import Posts from "../../components/Posts/Posts"
import FeaturedPosts from "../../components/FeaturedPosts/FeaturedPosts";
import Feed from "../../components/Feed/Feed"; 
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import "./Home.css"



export default function HomePage() {
  const url = "http://localhost:5000/server/posts"
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(url + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  
  const featured = posts.slice(0, 3);
  const rest = posts.slice(3);

  return (
    <>
    <div className="home">
       <section className="home-main">
        <FeaturedPosts posts={featured}/>
        <Posts posts={rest}/>
        </section>
        <aside className="home-feed">
          <Feed posts={posts}/>
        </aside>
    </div>
    </>
  )
}
