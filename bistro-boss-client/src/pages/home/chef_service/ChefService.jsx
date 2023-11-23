import chefbgimg from "../../../assets/home/chef-service.jpg"

const ChefService = () => {
    return (
        <div className="px-24 py-4 mx-32 bg-fixed" style={{ backgroundImage: `url('${chefbgimg}')` }}>
            <div className="bg-white text-black">
                <div className="text-center m-24 p-14">
                    <h1 className="uppercase text-3xl">Bistro Boss</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
        </div>
    );
};

export default ChefService;