import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const HomeImageCarousel = ({ brands }) => {
    const [currentIdx, setCurrentIdx] = useState(() => 0);

    const goToNext = useCallback(() => {
        setCurrentIdx((prev) => prev < brands.length - 1 ? prev + 1 : 0)
    }, [brands.length])

    useEffect(() => {
        let timer = setTimeout(goToNext, 3000);
        return () => clearTimeout(timer);
    }, [goToNext, currentIdx])

    return (
        <div className='flex items-center my-8'>
            <div className='flex-1'>
                <figure>
                    <img className='w-3/4 h-60 mx-auto' src={brands[currentIdx]?.image} alt="" />
                </figure>
            </div>
            <div className='flex-1 space-y-4 p-4'>
                <h3 className='text-3xl font-kurale'>All Products</h3>
                <p>Click view all button bellow to see all of our products.</p>
                <Link to={'/all-products'} className='inline-block px-4 py-2 bg-[#FA4] rounded-md font-kurale font-bold text-xl text-white border-2 border-[#FA4] hover:text-black hover:bg-white cursor-pointer'>View all</Link>
            </div>
        </div>
    );
}

HomeImageCarousel.propTypes = {
    brands: PropTypes.array.isRequired,
};

export default HomeImageCarousel;