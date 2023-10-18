import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const BrandCards = ({ brand }) => {
    console.log(brand);
    const { image, brandName } = brand;
    return (
        <div className='cursor-pointer'>
            <figure>
                <img className='w-full h-72 border-2 border-gray-500 rounded-md' src={image} alt={brandName} />
            </figure>
            <Link className='block text-2xl text-center font-semibold '>{brandName}</Link>
        </div>
    );
}

BrandCards.propTypes = {
    brand: PropTypes.object.isRequired,
};

export default BrandCards;