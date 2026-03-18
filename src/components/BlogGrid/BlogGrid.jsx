import "./BlogGrid.css";

function BlogGrid() {
  const blogs = [
    {
      id: 1,
      title: "Understanding React Hooks",
      desc: "Learn useState and useEffect easily",
    },
    {
      id: 2,
      title: "Node.js Basics",
      desc: "Build backend APIs step by step",
    },
    {
      id: 3,
      title: "CSS Flexbox Guide",
      desc: "Master layout design in CSS",
    },
  ];

  return (
    <div className="blog-grid">
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-card">
          <h3>{blog.title}</h3>
          <p>{blog.desc}</p>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
}

export default BlogGrid;