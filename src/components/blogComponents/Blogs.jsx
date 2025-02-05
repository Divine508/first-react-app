import BlogCard from "../common/BlogCard";
import { useEffect, useState } from "react";
import { getAllBogs } from "../../lib/Apis/blogApis";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const onGetAllBlogs = async () => {
      setIsLoading(true);
      const result = await getAllBogs();

      if (result.error) {
        setIsLoading(false);
        return setError(result.error);
      }
      setIsLoading(false);
      return setBlogs(result.blogs);
    };
    onGetAllBlogs();
  }, []);
  console.log(blogs);
  return (
    <section className="container">
      <div className="row">
        {blogs.length > 0 &&
          blogs.map((blog) => {
            return (
              <BlogCard
                title={blog.title}
                content={blog.content}
                key={blog.id}
              />
            );
          })}
      </div>
    </section>
  );
};

export default Blogs;
