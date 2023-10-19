import { useLoaderData } from "react-router-dom";
import HelmetTitle from "../../components/HelmetTitle/HelmetTitle";
import { useRef } from "react";
import { useEffect } from "react";
import { toast } from "react-hot-toast";


const AddProducts = () => {
    const allBrands = useLoaderData();
    const addRef = useRef(null);

    const handelAddProduct = async (e) => {
        e.preventDefault();
        const form = e.target;
        const productName = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = parseFloat(form.price.value);
        const details = form.details.value;
        const rate = parseFloat(form.rate.value);
        const photo = form.photo.value;

        if (typeof price !== "number" || isNaN(price)) {
            return toast.error("Price must be a number!");
        }
        if ((typeof rate !== "number" || isNaN(rate))) {
            return toast.error("Rate must be a number!");
        }
        if (rate < 0 || rate > 5) {
            return toast.error("Rate must be a number getter than 0 and lower than 5!");
        }
        
        const productInfo = {
            productName,
            brandName,
            type,
            price,
            details,
            rate,
            photo
        }
        console.log(productInfo);

        // post data
        try {
            const res = await fetch("https://tech-fuko-server.vercel.app/products", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(productInfo)
            });
            const feedback = await res.json();

            if (feedback?.acknowledged) {
                toast.success("Post successful.");
                form.reset();
            }
        } catch (er) {
            toast.error(er.message);
        }
    }

    useEffect(() => {
        let mount = true
        if (mount) {
            addRef.current.focus();
        }
        return () => mount = false;
    }, [])

    return (
        <div>
            <HelmetTitle title="Tech-Fuko | Add Products" />
            <div className="bg-gray-100 w-3/4 mx-auto my-12 p-4 lg:p-8 rounded-md">
                <div className="pb-4 space-y-3">
                    <h3 className="text-4xl text-center text-[#FA2] font-kurale">Add Product</h3>
                    <p className="text-center">Add a product you like to add.</p>
                </div>
                <form onSubmit={handelAddProduct} className="space-y-6">
                    <div className="flex flex-col">
                        <label htmlFor="name">Product Name</label>
                        <input ref={addRef} className="border px-2 py-3 rounded-md" type="text" name="name" id="name" placeholder="Enter product name" required />
                    </div>
                    <div className="flex flex-col gap-6 lg:flex-row">
                        <div className="flex flex-col flex-1">
                            <label htmlFor="brand-name">Brand Name</label>
                            <select className="border px-2 py-3 rounded-md" name="brandName" id="brand-name" required>
                                {
                                    allBrands.map((brand) => <option key={brand?._id}>{brand?.brandName}</option>)
                                }
                                <option>Others</option>
                            </select>
                        </div>
                        <div className="flex flex-col flex-1">
                            <label htmlFor="type">Product Type</label>
                            <input className="border px-2 py-3 rounded-md" type="text" name="type" id="type" placeholder="Enter product type" required />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="price">Price</label>
                        <input className="border px-2 py-3 rounded-md" type="text" name="price" id="price" placeholder="$ Price" required />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="details">Short Description</label>
                        <input className="border px-2 py-3 rounded-md" type="text" name="details" id="details" placeholder="Enter product Details" required />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="rating">Rating</label>
                        <input className="border px-2 py-3 rounded-md" type="text" name="rate" id="rating" placeholder="Ratings" required />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="photo">Photo URL</label>
                        <input className="border px-2 py-3 rounded-md" type="text" name="photo" id="photo" placeholder="Enter Photo URL" required />
                    </div>
                    <div className="flex flex-col">
                        <input className="py-2 bg-[#FA4] rounded-md font-kurale font-bold text-xl text-white border-2 border-[#FA4] hover:text-black hover:bg-white cursor-pointer" type="submit" value="Add Product" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProducts;