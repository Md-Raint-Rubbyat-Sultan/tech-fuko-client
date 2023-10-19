import { useContext } from "react";
import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const ProductDetails = () => {
    const { user } = useContext(AuthContext);
    const singleProduct = useLoaderData();
    const { _id, productName, brandName, type, price, details, rate, photo } = singleProduct;

    const handelAddToCart = async () => {
        const cartData = {
            productId: _id,
            userEmail: user.email,
            pending: false,
        }

        // post data
        try {
            const res = await fetch("https://tech-fuko-server.vercel.app/add-to-cart", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(cartData)
            });
            const feedback = await res.json();

            if (feedback?.acknowledged) {
                toast.success("Add to cart successful.");
            }
        } catch (er) {
            toast.error(er.message);
        }
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col items-center">
                <img src={photo} alt={productName} className="max-w-lg rounded-lg shadow-2xl" />
                <div className="mt-6">
                    <h1 className="text-5xl font-bold">{productName}</h1>
                    <p className="py-6 font-semibold">Brand: {brandName}</p>
                    <p className="pb-6 font-semibold">Type: {type}</p>
                    <p><span className="pb-6 font-semibold">Description:</span> {details}</p>
                    <p className="pb-6 font-semibold">Price: ${price}</p>
                    <div className="rating mb-6">
                        <input type="radio" name={`rating-${_id}`} className="mask mask-star" checked={(rate > 0 && rate <= 1) ? true : false} />
                        <input type="radio" name={`rating-${_id}`} className="mask mask-star" checked={(rate > 1 && rate <= 2) ? true : false} />
                        <input type="radio" name={`rating-${_id}`} className="mask mask-star" checked={(rate > 2 && rate <= 3) ? true : false} />
                        <input type="radio" name={`rating-${_id}`} className="mask mask-star" checked={(rate > 3 && rate <= 4) ? true : false} />
                        <input type="radio" name={`rating-${_id}`} className="mask mask-star" checked={(rate > 5) ? true : false} />
                    </div>
                    <button onClick={handelAddToCart} className="block px-4 py-2 bg-[#FA4] rounded-md font-kurale font-bold text-xl text-white border-2 border-[#FA4] hover:text-black hover:bg-white cursor-pointer">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;