import { Swiper, SwiperSlide } from "swiper/react";
import swiperCard from "../common/swiperCard";
import Data from "../../lib/data";
import "swiper/css";

const RecentBlogs = () => {
  return (
    <section className="container">
      <div className="row">
        <h1 className="text-center my-5">Recent Blogs</h1>
        <Swiper spaceBetween={50} slidesPerView={4}>
          {Data.length > 0 &&
            Data.map((Datas) => {
              return (
                <SwiperSlide>
                  <swiperCard
                    title={Datas.title}
                    content={Datas.content}
                    key={Datas.id}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </section>
  );
};

export default RecentBlogs;
