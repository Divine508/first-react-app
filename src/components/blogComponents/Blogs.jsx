import BlogCard from "../common/BlogCard";
import Data from "../../lib/data";

const Blogs = () => {
  return (
    <section className="contianer mt-5 mx-5">
      <div className="row">
        {Data.length > 0 &&
          Data.map((Datas) => {
            return (
              <BlogCard
                title={Datas.title}
                content={Datas.content}
                imageUrl={Datas.imageUrl}
                key={Datas.id}
              />
            );
          })}
      </div>
    </section>
  );
};

export default Blogs;
