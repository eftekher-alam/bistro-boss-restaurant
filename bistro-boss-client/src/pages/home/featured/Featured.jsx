import SectionHeader from "../../../components/section_header/SectionHeader";
import featuredImg from "../../../assets/home/featured.jpg";

const Featured = () => {
    return (
        <section style={{ backgroundImage: `url("${featuredImg}")` }} className="bg-fixed">
            <div className="bg-black bg-opacity-40">
                <div className="pb-28 pt-12 text-white">
                    <SectionHeader subHeader={`Check it out`} header={`Featured Item`}></SectionHeader>
                    <div className="flex max-lg:flex-col justify-center items-center gap-10 px-56 ">
                        <div>
                            <img src={featuredImg} alt="" />
                        </div>
                        <div className="text-white space-y-2">
                            <p>March 20, 2023</p>
                            <h1 className="uppercase font-bold">Where can i get some?</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                            <button className="btn btn-outline text-white">READ MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;