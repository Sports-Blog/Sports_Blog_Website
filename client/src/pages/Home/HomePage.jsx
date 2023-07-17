import Header from "../../components/Header/Header"
import Posts from "../../components/Posts/Posts"
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const url = "http://localhost:5000/server/posts"

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(url + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <div className="home">
        <Header/>
        <Posts posts={posts}/>
    </div>
  )
}
