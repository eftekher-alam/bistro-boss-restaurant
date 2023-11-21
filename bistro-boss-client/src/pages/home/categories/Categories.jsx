import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import category1 from "../../../assets/home/slide1.jpg"
import category2 from "../../../assets/home/slide2.jpg"
import category3 from "../../../assets/home/slide3.jpg"
import category4 from "../../../assets/home/slide4.jpg"
import category5 from "../../../assets/home/slide5.jpg"

const Categories = () => {
    return (
        <div className='w-[90%] lg:w-[70%] mx-auto my-20'>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={category1} />
                    <p className='-mt-16 text-center text-white text-3xl uppercase'>Salads</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={category2} />
                    <p className='-mt-16 text-center text-white text-3xl uppercase'>Soups</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={category3} />
                    <p className='-mt-16 text-center text-white text-3xl uppercase'>pizzas</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={category4} />
                    <p className='-mt-16 text-center text-white text-3xl uppercase'>desserts</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={category5} />
                    <p className='-mt-16 text-center text-white text-3xl uppercase'>Salads</p>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Categories;