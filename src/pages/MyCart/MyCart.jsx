import { useLoaderData } from "react-router-dom";
import HelmetTitle from "../../components/HelmetTitle/HelmetTitle";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import CartCards from "../../components/cartCards/cartCards";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";

const MyCart = () => {
    const { user } = useContext(AuthContext);
    const [productData, cartData] = useLoaderData();
    const [cartProducts, setCartProducts] = useState(() => []);

    useEffect(() => {
        const userCartData = cartData.filter(data => data?.userEmail === user?.email);

        const cartId = userCartData.map((userData) => {
            return userData?.productId;
        })

        const cartProductData = productData.filter(cart => cartId.includes(cart?._id));
        setCartProducts(() => cartProductData);

    }, [cartData, productData, user])

    const handelDelete = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                console.log(id);
                try {
                    const res = await fetch(`https://tech-fuko-server.vercel.app/cart-products/${id}`, {
                        method: "DELETE"
                    })
                    const data = await res.json();
                    if (data?.acknowledged) {
                        setCartProducts((prev) => {
                            const remaining = prev.filter((product) => product?._id !== id)
                            return remaining;
                        })
                    }
                } catch (er) {
                    toast.error(er.message);
                }
            }
        })
    }


    return (
        <>
            {(cartProducts.length > 0) ?
                <div>
                    <HelmetTitle title="Tech-Fuko | My Cart" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12 px-4 md:px-5 lg:px-6">
                        {
                            cartProducts.map((cartProduct) => <CartCards key={cartProduct?._id} cartProduct={cartProduct} handelDelete={handelDelete} />)
                        }
                    </div>
                </div>
                :
                <h1 className="h-screen text-5xl text-center text-[#FA2] font-kurale my-12">Please add product</h1>
            }
        </>
    );
};

export default MyCart;