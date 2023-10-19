import { useLoaderData } from "react-router-dom";
import HelmetTitle from "../../components/HelmetTitle/HelmetTitle";
import ProductCard from "../../components/ProductCard/ProductCard";

const ViewAllProducts = () => {
    const allProducts = useLoaderData();
    console.log(allProducts);
    return (
        <div>
            <HelmetTitle title="View-All-Products" />
            <div>
                <h2 className="text-4xl text-center text-[#FA2] font-kurale my-12">All Available Products</h2>
                <div className="w-full lg:w-3/4 mx-auto mb-12 px-4 lg:px-0 space-y-12">
                    {
                        allProducts.map((product) => <ProductCard
                            key={product._id}
                            product={product}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default ViewAllProducts;