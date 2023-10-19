import PropTypes from 'prop-types';


const BrandCarousel = ({ products }) => {
    return (
        <div className="carousel w-full">
            {
                products.map((product, idx) => <div key={product?._id} id={`slide${idx}`} className="carousel-item relative w-full">
                    <img src={product?.photo} className="w-full h-52 md:h-96 lg:h-[550px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href={`#slide${idx > 0 ? idx - 1 : products.length - 1}`} className="btn btn-circle">❮</a>
                        <a href={`#slide${idx < (products.length - 1) ? idx + 1 : 0}`} className="btn btn-circle">❯</a>
                    </div>
                </div>)
            }
        </div>
    );
}

BrandCarousel.propTypes = {
    products: PropTypes.array.isRequired,
};

export default BrandCarousel;