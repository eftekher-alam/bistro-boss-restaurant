import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import category1 from "../../../assets/home/slide1.jpg"
import category2 from "../../../assets/home/slide2.jpg"
import category3 from "../../../assets/home/slide3.jpg"
import category4 from "../../../assets/home/slide4.jpg"
import category5 from "../../../assets/home/slide5.jpg"
import SectionHeader from '../../../components/section_header/SectionHeader';

const Categories = () => {
    return (
        <section className='w-[90%] lg:w-[70%] mx-auto my-20'>
            <SectionHeader header={`ORDER ONLINE`} subHeader={`From 11:00 am to 10:00 pm`}></SectionHeader>
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
                    <p className='-mt-16 mb-16 text-center text-white text-3xl uppercase'>Salads</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={category2} />
                    <p className='-mt-16 mb-16 text-center text-white text-3xl uppercase'>Soups</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={category3} />
                    <p className='-mt-16 mb-16 text-center text-white text-3xl uppercase'>pizzas</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={category4} />
                    <p className='-mt-16 mb-16 text-center text-white text-3xl uppercase'>desserts</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={category5} />
                    <p className='-mt-16 mb-16 text-center text-white text-3xl uppercase'>Salads</p>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Categories;