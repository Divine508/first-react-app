import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import SwiperCard from "../common/swiperCard";
import Data from "../../lib/data";
import { Link } from "react-router-dom";
import "swiper/css";

const RecentBlogs = () => {
  return (
    <section className="container my-5 ">
      <h1 className="text-center">Recent Blogs</h1>
      <div className="row">
        <div className="mb-3">
          <Link to={"/blogs"}>View More...</Link>
        </div>
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          loop={true}
        >
          {Data.length > 0 &&
            Data.map((Datas, index) => (
              <SwiperSlide key={index}>
                <div style={{ cursor: "pointer" }}>
                  <SwiperCard
                    title={Datas.title}
                    content={Datas.content}
                    key={Datas.id}
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RecentBlogs;
