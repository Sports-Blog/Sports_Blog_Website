import './SinglePost.css'
import Button from "react-bootstrap/Button"
import { useLocation } from "react-router";
import {useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function SinglePost() {
  const url ="http://localhost:5000/server/posts"
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(url + "/" + path);
      setPost(res.data);
    };
    getPost();
  }, [path]);

  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            {post.photo && (
            <img src={post.photo} alt="" className="singlePostImg" />)}
            <h1 className="singlePostTitle">
                {post.title}
          <div className="singlePostEdit">
                    <Button variant="secondary">Edit</Button>
                    <Button variant='danger'>Delete</Button>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>
                    Author: 
                    <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b> 
              </Link>
                </span>
                <span className='singlePostDate'>
                {new Date(post.createdAt).toDateString()}
                </span>
            </div>
            <p className='singlePostDesc'>
                {post.desc}
            </p>
        </div>
    </div>
  )
}
