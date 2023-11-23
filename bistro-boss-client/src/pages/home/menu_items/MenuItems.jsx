import PropTypes from 'prop-types';
const MenuItems = ({ menu }) => {
    const { name, image, recipe, price } = menu;
    return (
        <div className='flex justify-center items-start gap-4'>
            <img src={image} className='w-28 h-24 rounded-r-full rounded-b-full' />
            <div>
                <h1 className='text-2xl'>{name} -----------</h1>
                <p className='text-gray-500'>{recipe}</p>
            </div>
            <p className='text-yellow-500 font-bold'>${price}</p>
        </div>
    );
};

MenuItems.propTypes = {
    menu: PropTypes.object
}

export default MenuItems;