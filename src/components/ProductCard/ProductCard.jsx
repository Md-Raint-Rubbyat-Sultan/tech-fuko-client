import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const ProductCard = ({ product }) => {
    const { _id, productName, price, rate, photo } = product;
    return (
        <div className="card card-side bg-base-100 shadow-xl flex-col md:flex-row items-center">
            <figure className='md:w-2/5'>
                <img className='w-full h-72 rounded-2xl md:rounded-none' src={photo} alt={productName} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <p>Price: ${price}</p>
                <div className="rating mb-6">
                    <input type="radio" name={`rating-${_id}`} className="mask mask-star" checked={(rate > 0 && rate <= 1) ? true : false} />
                    <input type="radio" name={`rating-${_id}`} className="mask mask-star" checked={(rate > 1 && rate <= 2) ? true : false} />
                    <input type="radio" name={`rating-${_id}`} className="mask mask-star" checked={(rate > 2 && rate <= 3) ? true : false} />
                    <input type="radio" name={`rating-${_id}`} className="mask mask-star" checked={(rate > 3 && rate <= 4) ? true : false} />
                    <input type="radio" name={`rating-${_id}`} className="mask mask-star" checked={(rate > 5) ? true : false} />
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/update-products/${_id}`} className="px-4 py-2 bg-[#FA4] rounded-md font-kurale font-bold text-xl text-white border-2 border-[#FA4] hover:text-black hover:bg-white cursor-pointer">Update</Link>
                    <Link to={`/products-details/${_id}`} className="px-4 py-2 bg-[#FA4] rounded-md font-kurale font-bold text-xl text-white border-2 border-[#FA4] hover:text-black hover:bg-white cursor-pointer">Details</Link>
                </div>
            </div>
        </div>
    );
}

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
};

export default ProductCard;