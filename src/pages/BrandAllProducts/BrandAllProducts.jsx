import { useLoaderData } from "react-router-dom";
import HelmetTitle from "../../components/HelmetTitle/HelmetTitle";

const BrandAllProducts = () => {
    const brandProducts = useLoaderData();
    console.log(brandProducts);
    return (
        <div>
            <HelmetTitle title={`${brandProducts[0]?.brandName}`} />
            there is all products
        </div>
    );
};

export default BrandAllProducts;