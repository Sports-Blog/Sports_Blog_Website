import './SinglePost.css'
import Button from "react-bootstrap/Button"
import { useLocation } from "react-router";
import {useEffect, useState , useContext} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/context";


export default function SinglePost() {
  const url ="http://localhost:5000/server/posts"
  const uploadUrl = "http://localhost:5000/server/upload";
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const [orig, setOrig] = useState({ title: "", desc: "", photo: "" });
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(url + "/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
      setPhoto(res.data.photo || "");
      setOrig({ title: res.data.title, desc: res.data.desc, photo: res.data.photo || "" });
    };
    getPost();
  }, [path]);

  const onChooseFile = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setFile(f);
    setPreview(URL.createObjectURL(f));
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/server/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleCancel = () => {
    setTitle(orig.title);
    setDesc(orig.desc);
    setPhoto(orig.photo);
    setFile(null);
    setPreview(null);
    setUpdateMode(false);
  };

  const handleUpdate = async () => {
    try {
      let newPhotoFilename = photo;
      if (file) {
        const data = new FormData();
        const filename = `${Date.now()}_${file.name}`;
        data.append("name", filename);
        data.append("file", file);
        await axios.post(uploadUrl, data, {
        headers: { "Content-Type": "multipart/form-data" },});
        newPhotoFilename = filename;
      }
      await axios.put(`http://localhost:5000/server/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
        photo: newPhotoFilename,
      });
      setPost((p) => ({ ...p, title, desc, photo: newPhotoFilename }));
      setOrig({ title, desc, photo: newPhotoFilename });
      setPhoto(newPhotoFilename);
      setFile(null);
      setPreview(null);
      setUpdateMode(false);
    } catch (err) {}
  };
  const imageSrc = preview ? preview : photo ? PF + photo : "/placeholder.jpg";

  

return (
      <div className="singlePost">
        <div className="singlePostWrapper">
          {imageSrc && (
          <img src={imageSrc} alt={title} className="singlePostImg" />
        )}
        {updateMode && (
          <div className="singleFileRow">
            <label htmlFor="fileInput" className="singleFileLabel">
              Change image
            </label>
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={onChooseFile}
            />
          </div>
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <Button
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                  variant="success"
                >
                  Update
                </Button>
                <Button
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                  variant="danger"
                >
                  Delete
                </Button>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b> {post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          ) : (
          <p className="singlePostDesc">{desc}</p>
          )}
          {updateMode && (
          <div className="singleButtonsRow">
            <button className="singlePostButton" onClick={handleUpdate}>
              Save
            </button>
            <button className="singlePostButton ghost" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
