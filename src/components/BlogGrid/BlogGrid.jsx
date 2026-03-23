import React from 'react';
import "./BlogGrid.css";

function BlogGrid() {
  const blogs = [
    {
      id: 1,
      title: "Mastering React Hooks",
      desc: "Deep dive into useState, useEffect, and custom hooks for scalable React applications.",
      date: "Mar 15, 2026",
      category: "React",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Architecting Node.js APIs",
      desc: "Best practices for building robust and performant REST APIs with Express and Prisma.",
      date: "Feb 28, 2026",
      category: "Node.js",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "The Power of Flexbox & Grid",
      desc: "Master modern layout designs with CSS Flexbox and CSS Grid for responsive web apps.",
      date: "Feb 10, 2026",
      category: "CSS",
      readTime: "4 min read"
    },
  ];

  return (
    <section className="blogs-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="badge">Knowledge Hub</span>
          <h2 className="section-title">Latest <span className="gradient-text">Insights</span></h2>
          <p className="section-subtitle">Articles, guides, and thoughts on software development and design.</p>
        </div>
        
        <div className="blog-grid-container">
          {blogs.map((blog) => (
            <article key={blog.id} className="blog-card glass-card">
              <div className="blog-item-header">
                <span className="blog-category">{blog.category}</span>
                <span className="blog-date">{blog.date}</span>
              </div>
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-desc">{blog.desc}</p>
              <div className="blog-footer">
                <span className="read-time">{blog.readTime}</span>
                <a href="#" className="read-more-btn">
                  Read More
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogGrid;