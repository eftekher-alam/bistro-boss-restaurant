import Banner from "../banner/Banner";
import Categories from "../categories/Categories";
import PopularMenu from "../popular_menu/PopularMenu";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;