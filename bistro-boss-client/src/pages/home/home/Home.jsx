import Banner from "../banner/Banner";
import Categories from "../categories/Categories";
import Featured from "../featured/Featured";
import PopularMenu from "../popular_menu/PopularMenu";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;