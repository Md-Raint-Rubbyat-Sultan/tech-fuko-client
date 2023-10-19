import { useLoaderData } from "react-router-dom";
import HelmetTitle from "../../components/HelmetTitle/HelmetTitle";
import ProductCard from "../../components/ProductCard/ProductCard";

const BrandAllProducts = () => {
    const brandProducts = useLoaderData();
    console.log(brandProducts);
    return (
        <div>
            <HelmetTitle title={`${brandProducts[0]?.brandName}`} />
            <div>
                <h2 className="text-4xl text-center text-[#FA2] font-kurale my-12">All Available {brandProducts[0]?.brandName} Products</h2>
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
    );
};

export default BrandAllProducts;