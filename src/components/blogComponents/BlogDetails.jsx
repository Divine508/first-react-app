import { useParams } from "react-router-dom";
import Data from "../../lib/data";

const BlogDetails = () => {
  const Params = useParams();

  const { blogTitle } = Params;

  const blogDetail = Data.find((Data) => Data.title === blogTitle);

  return (
    <section className="container">
      <div className="row">
        <div className="col-lg-6">
          <h3>{blogTitle}</h3>

          <div>
            <p>{blogDetail.content}</p>
          </div>
        </div>
        <div className="col-lg-6">
          <img src="https://th.bing.com/th/id/OIP.bimv3Nmi8jq2fpvcUnJwtwHaEo?rs=1&pid=ImgDetMain" />
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
