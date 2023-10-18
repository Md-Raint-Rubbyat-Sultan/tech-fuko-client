import { useLoaderData } from "react-router-dom";
import HelmetTitle from "../../components/HelmetTitle/HelmetTitle";
import Marquee from "react-fast-marquee";
import HomeBanner from "../../components/HomeBaner/HomeBaner";
import HomeImageCarousel from "../../components/HomeImageCarousel/HomeImageCarousel";
import BrandCards from "../../components/BrandCards/BrandCards";


const Home = () => {
    const allBrands = useLoaderData();
    console.log(allBrands);

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
                <h3 className="text-3xl font-semibold text-center mb-6">Available Brands</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 overflow-hidden">
                {
                    allBrands.map((brand) => <BrandCards key={brand?._id} brand={brand} />)
                }
            </div>
            </div>
        </div>
    );
};

export default Home;