import { Link, useNavigate } from "react-router-dom";

const SwiperCard = ({ content, title }) => {
  const navigate = useNavigate();

  const navigateToBlog = () => navigate(`/blogs/${title}`);
  return (
    <div
      className="card"
      style={{ width: "100%", backgroundColor: "lightblue" }}
      onClick={navigateToBlog}
    >
      <img src="src/assets/th.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <Link to={`/blogs/${title}`}>READ MORE</Link>
      </div>
    </div>
  );
};

export default SwiperCard;
