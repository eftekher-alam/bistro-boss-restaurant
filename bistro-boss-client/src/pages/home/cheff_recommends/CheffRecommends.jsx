import SectionHeader from "../../../components/section_header/SectionHeader";
import salad from "../../../assets/home/salad.jpg"

const CheffRecommends = () => {
    return (
        <section>
            <div className="mx-32 mb-32">
                <SectionHeader header={`chef recommends`} subHeader={`Should Try`} ></SectionHeader>
                <div className="grid grid-cols-3 gap-10">
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img src={salad} className="w-full h-64" /></figure>
                        <div className="card-body items-center">
                            <h2 className="card-title">Caeser Salad</h2>
                            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-outline btn-warning">ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img src={salad} className="w-full h-64" /></figure>
                        <div className="card-body items-center">
                            <h2 className="card-title">Caeser Salad</h2>
                            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-outline btn-warning">ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img src={salad} className="w-full h-64" /></figure>
                        <div className="card-body items-center">
                            <h2 className="card-title">Caeser Salad</h2>
                            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-outline btn-warning">ADD TO CART</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CheffRecommends;