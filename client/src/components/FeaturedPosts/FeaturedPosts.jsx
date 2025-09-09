import React from "react";
import { Link } from "react-router-dom";
import "./FeaturedPosts.css";

export default function FeaturedPosts({ posts = [] }) {
  if (!posts.length) return null;

  const main = posts[0];
  const second = posts[1];
  const third = posts[2];
  const PF = "http://localhost:5000/images/";

  return (
    <div className="featured-grid">
      {main && (
        <Link to={`/post/${main._id}`} className="featured-card featured-main">
          <img src={main.photo ? PF + main.photo : "/placeholder.jpg"} alt={main.title} />
          <div className="featured-overlay">
            <h2>{main.title}</h2>
            {main.createdAt && (
              <span className="featured-meta">
                {new Date(main.createdAt).toLocaleString()}
              </span>
            )}
            {main.desc && <p className="featured-desc">{main.desc.slice(0, 120)}…</p>}
          </div>
        </Link>
      )}
      {second && (
        <Link to={`/post/${second._id}`} className="featured-card">
          <img src={second.photo ? PF + second.photo : "/placeholder.jpg"} alt={second.title} />
          <div className="featured-overlay">
            <h3>{second.title}</h3>
            {second.createdAt && (
              <span className="featured-meta">
                {new Date(second.createdAt).toLocaleString()}
              </span>
            )}
          </div>
        </Link>
      )}
      {third && (
        <Link to={`/post/${third._id}`} className="featured-card">
          <img src={third.photo ? PF + third.photo : "/placeholder.jpg"} alt={third.title} />
          <div className="featured-overlay">
            <h3>{third.title}</h3>
            {third.createdAt && (
              <span className="featured-meta">
                {new Date(third.createdAt).toLocaleString()}
              </span>
            )}
          </div>
        </Link>
      )}
    </div>
  );
}