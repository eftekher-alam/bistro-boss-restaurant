import SectionHeader from "../../../components/section_header/SectionHeader";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("reviews.json")
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <section>
            <div className="mb-24 mt-20">
                <SectionHeader subHeader={`What our client say`} header={`Testimonials`} ></SectionHeader>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews?.map((review, index) =>
                            <SwiperSlide key={index}>
                                <div className="mx-24 text-center space-y-4">
                                    <Rating
                                        className="block mx-auto"
                                        style={{ maxWidth: 180 }}
                                        value={review?.rating}
                                        readOnly
                                    />
                                    <p>{review?.details}</p>
                                    <h2 className="uppercase text-xl font-bold text-orange-400">{review?.name}</h2>
                                </div>
                            </SwiperSlide>)
                    }

                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;