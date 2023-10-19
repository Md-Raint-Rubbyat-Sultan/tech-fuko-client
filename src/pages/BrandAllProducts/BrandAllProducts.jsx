import { useLoaderData } from "react-router-dom";
import HelmetTitle from "../../components/HelmetTitle/HelmetTitle";
import ProductCard from "../../components/ProductCard/ProductCard";
import BrandCarousel from "../../components/BrandCarousel/BrandCarousel";

const BrandAllProducts = () => {
    const brandProducts = useLoaderData();
    // console.log(brandProducts);
    return (
        <>
            {(brandProducts.length > 0) ?
                <div className="mb-12">
                    <HelmetTitle title={`${brandProducts[0]?.brandName}`} />
                    <BrandCarousel products={brandProducts} />
                    <div>
                        <h2 className="text-4xl text-center text-[#FA2] font-kurale mb-6">All Available {brandProducts[0]?.brandName} Products</h2>
                        <div className="w-full lg:w-3/4 mx-auto mb-12 px-4 lg:px-0 space-y-12">
                            {
                                brandProducts.map((product) => <ProductCard
                                    key={product._id}
                                    product={product}
                                />)
                            }
                        </div>
                    </div>
                </div>
                :
                <h1 className="h-screen text-5xl text-center text-[#FA2] font-kurale my-12">Currently we have no available {brandProducts[0]?.brandName} product.</h1>
            }
        </>
    );
};

export default BrandAllProducts;