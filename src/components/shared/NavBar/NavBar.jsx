import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { toast } from "react-hot-toast";

// flex lg:flex-col items-center lg:items-start justify-center gap-10
const NavBar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const [showMenu, setShowMenu] = useState(() => false);

    const handelSignOut = () => {
        signOutUser()
            .then(() => {
                toast.success("Sign Out Successful.");
            })
            .catch((er) => toast.error(er.message));
    }

    return (
        <nav className="relative p-2 lg:p-0 lg:py-10" style={{
            backgroundImage: "url('https://i.ibb.co/F57GzN3/10.png')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: "center",
            backgroundSize: "cover"
        }}>
            <div onClick={() => setShowMenu((prev) => !prev)} className="lg:hidden inline-block text-2xl px-2 py-1 border shadow-lg cursor-pointer">
                {
                    showMenu ?
                        <AiOutlineClose className="inline" />
                        :
                        <AiOutlineMenu className="inline" />
                }
            </div>

            <ul className={`absolute bg-white lg:bg-transparent p-4 lg:p-0 lg:static text-xl text-[#FA2] font-kurale space-y-3 lg:space-y-6 lg:w-3/4 xl:w-1/2 lg:mx-auto border lg:border-0 rounded top-14 duration-700 z-50 ${showMenu ? "left-2" : "-left-96"}`}>
                <li>
                    <NavLink className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline" : "hover:underline"
                    } to={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline" : "hover:underline"
                    } to={'/add-product'}>Add Product</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline" : "hover:underline"
                    } to={'/my-cart'}>My Cart</NavLink>
                </li>
                {
                    user ?
                        <li>
                            <Link onClick={handelSignOut} className="hover:underline">Sign Out</Link>
                        </li>
                        :
                        <li>
                            <NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "underline" : "hover:underline"
                            } to={'/sign-in'}>Sign In</NavLink>
                        </li>
                }
                {user &&
                    <li>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL ? user?.photoURL : "https://i.ibb.co/jJf2wWF/user.png"} alt="user profile picture" />
                            </div>
                        </label>
                    </li>
                }
                {
                    user?.displayName && <li className="text-black">{user.displayName}</li>
                }
            </ul>
        </nav>
    );
};

export default NavBar;