import Phone from "../../../components/phone/Phone";
import Banner from "../banner/Banner";
import Categories from "../categories/Categories";
import ChefService from "../chef_service/ChefService";
import CheffRecommends from "../cheff_recommends/CheffRecommends";
import Featured from "../featured/Featured";
import PopularMenu from "../popular_menu/PopularMenu";
import Testimonials from "../testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <ChefService></ChefService>
            <PopularMenu></PopularMenu>
            <Phone></Phone>
            <CheffRecommends></CheffRecommends>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;