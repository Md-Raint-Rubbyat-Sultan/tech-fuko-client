import PropTypes from 'prop-types';

const CartCards = ({ cartProduct, handelDelete }) => {
    const { _id, productName, brandName, type, price, details, photo } = cartProduct;
    // console.log(cartProduct);

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img className='h-52' src={photo} alt={productName} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <p className="py-6 font-semibold">Brand: {brandName}</p>
                <p className="pb-6 font-semibold">Type: {type}</p>
                <p><span className="pb-6 font-semibold">Description:</span> {details}</p>
                <p className="pb-6 font-semibold">Price: ${price}</p>
                <div className="card-actions justify-end">
                    <button className="block px-4 py-2 bg-[#FA4] rounded-md font-kurale font-bold text-xl text-white border-2 border-[#FA4] hover:text-black hover:bg-white cursor-pointer">Buy Now</button>
                    <button onClick={() => handelDelete(_id)} className="block px-4 py-2 bg-[#FA4] rounded-md font-kurale font-bold text-xl text-white border-2 border-[#FA4] hover:text-black hover:bg-white cursor-pointer">Delete</button>
                </div>
            </div>
        </div>
    );
}

CartCards.propTypes = {
    cartProduct: PropTypes.object.isRequired,
    handelDelete: PropTypes.func,
};

export default CartCards;