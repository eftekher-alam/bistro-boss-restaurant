import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banner1 from "../../../assets/home/01.jpg";
import banner2 from "../../../assets/home/02.jpg";
import banner3 from "../../../assets/home/03.png";
import banner4 from "../../../assets/home/04.jpg";
import banner5 from "../../../assets/home/05.png";
import banner6 from "../../../assets/home/06.png";

const Banner = () => {
    return (
        <section>
            <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} showThumbs={false} stopOnHover={false} dynamicHeight={true} >
                <div >
                    <img src={banner1} className="h-screen" />
                </div>
                <div>
                    <img src={banner2} className="h-screen" />
                </div>
                <div>
                    <img src={banner3} className="h-screen" />
                </div>
                <div>
                    <img src={banner4} className="h-screen" />
                </div>
                <div>
                    <img src={banner5} className="h-screen" />
                </div>
                <div>
                    <img src={banner6} className="h-screen" />
                </div>
            </Carousel>
        </section>
    );
};

export default Banner;