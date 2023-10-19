import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';


const BrandCards = ({ brand }) => {
    const { image, brandName } = brand;
    const navigate = useNavigate();

    return (
        <div className="card bg-base-100">
            <figure>
                <img className='w-full h-72' src={image} alt={brandName} />
            </figure>
            <div className="card-body">
                <h2 className="text-2xl text-center font-semibold">{brandName}</h2>
                <div className="card-actions justify-center">
                    <button onClick={() => navigate(`/brand-products/${brandName}`)} className="px-4 py-2 bg-[#FA4] rounded-md font-kurale font-bold text-xl text-white border-2 border-[#FA4] hover:text-black hover:bg-white cursor-pointer">View Products</button>
                </div>
            </div>
        </div>
    );
}

BrandCards.propTypes = {
    brand: PropTypes.object.isRequired,
};

export default BrandCards;