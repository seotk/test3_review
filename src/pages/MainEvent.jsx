import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

function MainEvent({ list }) {
  return (
    <section className="MainEvent mw">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {[1, 2, 3].map((i) => (
          <SwiperSlide key={i}>
            <div className="eventList">
              <img
                src={`${process.env.PUBLIC_URL}/img/Img_bg${i}.jpg`}
                alt="event"
              />
              <div className="eventInfo">
                <p>상품이름</p>
                <button>구매하기</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
export default MainEvent;
