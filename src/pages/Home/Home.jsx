import { useLoaderData } from "react-router-dom";
import HelmetTitle from "../../components/HelmetTitle/HelmetTitle";
import Marquee from "react-fast-marquee";
import HomeBanner from "../../components/HomeBaner/HomeBaner";
import HomeImageCarousel from "../../components/HomeImageCarousel/HomeImageCarousel";
import BrandCards from "../../components/BrandCards/BrandCards";


const Home = () => {
    const allBrands = useLoaderData();

    return (
        <div>
            <HelmetTitle title="Tech Fuko | Home" />
            {/* banner */}
            <HomeBanner />
            {/* brand img slider */}
            <Marquee>
                <figure className="flex items-center gap-32">
                    {
                        allBrands.map((brand) => <img
                            key={brand?._id}
                            src={brand?.image}
                            alt={brand?.brandName}
                            className="w-14 h-14"
                        />)
                    }
                </figure>
            </Marquee>
            {/* view all brands banner with carousel */}
            <HomeImageCarousel brands={allBrands} />
            {/* brand cards */}
            <div className="my-12">
                <h3 className="text-3xl text-[#FA2] font-semibold text-center mb-6">Available Brands</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 overflow-hidden">
                    {
                        allBrands.map((brand) => <BrandCards key={brand?._id} brand={brand} />)
                    }
                </div>
            </div>
            <div className="my-12 px-4 md:px-6 lg:px-0 lg:w-3/4 mx-auto">
                <h3 className="text-3xl text-[#FA2] font-semibold text-center mb-6">Most Asked Questions?</h3>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        Do you sell authentic products?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, of course. You can buy anything form us with total security.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Do you provide official warranty?
                    </div>
                    <div className="collapse-content">
                        <p>Without any doubt we provide official warranty.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;