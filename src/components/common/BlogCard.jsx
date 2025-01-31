const BlogCard = ({ content, title, imageUrl }) => {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div
        className="card"
        style={{ width: "100%", backgroundColor: "lightblue" }}
      >
        <img src="src/assets/th.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
