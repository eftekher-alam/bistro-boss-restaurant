import { useEffect, useState } from "react";
import SectionHeader from "../../../components/section_header/SectionHeader";
import MenuItems from "../menu_items/MenuItems";


const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch("menu.json")
            .then(res => res.json())
            .then(data => {
                const popularMenus = data.filter(menu => menu.category === "popular")
                setMenu(popularMenus);
            })
    }, [])
    return (
        <section className="mx-32 my-20">
            <SectionHeader header={`Popular Menu`} subHeader={`From Our Menu`}></SectionHeader>
            <div className="grid grid-cols-2 gap-10">
                {
                    menu?.map((singleMenu, index) => <MenuItems menu={singleMenu} key={index}></MenuItems>)
                }
            </div>
        </section >
    );
};

export default PopularMenu;