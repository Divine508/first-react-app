import { Link, useNavigate } from "react-router-dom";

const BlogCard = ({ content, title, imageUrl }) => {
  const navigate = useNavigate();

  const navigateToBlog = () => {
    navigate(`/blogs/${title}`);
  };
  return (
    <div className="col-md-6 col-lg-4 mb-4" onClick={navigateToBlog}>
      <div
        className="card"
        style={{ width: "100%", backgroundColor: "lightblue" }}
      >
        <img
          src="https://www.pixelstalk.net/wp-content/uploads/2016/05/HD-Really-Cool-Background.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
          <Link to={`/blogs/${title}`} className="">
            Read More...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
