import { useLoaderData } from "react-router-dom";
import HelmetTitle from "../../components/HelmetTitle/HelmetTitle";

const ViewAllProducts = () => {
    const allProducts = useLoaderData();
    console.log(allProducts);
    return (
        <div>
            <HelmetTitle title="View-All-Products" />
            this is all products
        </div>
    );
};

export default ViewAllProducts;