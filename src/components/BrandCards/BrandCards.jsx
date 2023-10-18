import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';


const BrandCards = ({ brand }) => {
    const { image, brandName } = brand;
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`/brand-products/${brandName}`)} className='cursor-pointer'>
            <figure>
                <img className='w-full h-72 border-2 border-gray-500 rounded-md' src={image} alt={brandName} />
            </figure>
            <h4 className='text-2xl text-center font-semibold underline'>{brandName}</h4>
        </div>
    );
}

BrandCards.propTypes = {
    brand: PropTypes.object.isRequired,
};

export default BrandCards;