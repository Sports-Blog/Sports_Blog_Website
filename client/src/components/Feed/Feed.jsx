import React from "react";
import { Link } from "react-router-dom";
import "./Feed.css";

export default function Feed({ posts = [] }) {
  if (!posts.length) return null;
  const PF = "http://localhost:5000/images/"

  return (
    <div className="feed">
      <div className="feed-header">Feed</div> {/* 🆕 */}
      <ul className="feed-list">
        {posts.map((p) => (
          <li key={p._id} className="feed-item">
            <img
              src={p.photo ? PF + p.photo : "/placeholder.jpg"}
              alt={p.title}
              className="feed-thumb"
            />
            <div className="feed-body">
              <Link to={`/post/${p._id}`} className="feed-title">{p.title}</Link>
              {p.createdAt && (
                <div className="feed-meta">
                  {new Date(p.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}{" "}
                  | {new Date(p.createdAt).toLocaleDateString()}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
      <div className="feed-more">
        <span>More news</span>
      </div>
    </div>
  );
}