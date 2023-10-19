import { useContext, useEffect } from "react";
import HelmetTitle from "../../components/HelmetTitle/HelmetTitle";
import { useRef } from "react";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
    const { createUser, updateUserProfile, setLoading } = useContext(AuthContext);
    const [showPass, setShowPass] = useState(() => false);
    const addRef = useRef(null);
    const currentLocation = useLocation();

    const handelSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // password validation
        if (password.length < 6) {
            return toast.error("password must contain at least 6 character.")
        }
        else if (!/[A-Z]/.test(password)) {
            return toast.error("password must contain at least one upper case character.")
        }
        else if (!/[@#$%^&-+=()]/.test(password)) {
            return toast.error("password must contain at least one spacial character as ($, #, @, %, ^, & etc).")
        }
        // console.log(name, email, password);

        createUser(email, password)
            .then(() => {
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        toast.success("Sign up successful.");
                        window.location.replace(currentLocation?.state || '/');
                    })
                    .catch((er) => toast.error(er.message))
            })
            .catch((er) => toast.error(er.message))
            .finally(() => setLoading(() => false))
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
            <HelmetTitle title="Sign Up" />
            <div className="bg-gray-100 w-3/4 mx-auto my-12 p-4 lg:p-8 rounded-md">
                <div className="pb-4">
                    <h3 className="text-4xl text-center text-[#FA2] font-kurale">Sign Up</h3>
                </div>
                <form onSubmit={handelSignUp} className="space-y-6">
                    <div className="flex flex-col">
                        <label htmlFor="name">Name</label>
                        <input ref={addRef} className="border px-2 py-3 rounded-md" type="text" name="name" id="name" placeholder="Enter product name" required />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="photo">Photo URl</label>
                        <input className="border px-2 py-3 rounded-md" type="text" name="photo" id="photo" placeholder="Enter product photo url" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input className="border px-2 py-3 rounded-md" type="email" name="email" id="email" placeholder="Enter product email" required />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password">Password</label>
                        <div className="relative">
                            <input className="border ps-2 pe-12 py-3 rounded-md w-full" type={`${showPass ? "text" : "password"}`} name="password" id="password" placeholder="Enter product password" required />
                            <div onClick={() => setShowPass((prev) => !prev)} className="absolute right-3 top-1/2 -translate-y-1/2 text-2xl cursor-pointer">
                                {
                                    showPass ?
                                        <AiFillEye />
                                        :
                                        <AiFillEyeInvisible />
                                }
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <input className="py-2 bg-[#FA4] rounded-md font-kurale font-bold text-xl text-white border-2 border-[#FA4] hover:text-black hover:bg-white cursor-pointer" type="submit" value="Sign Up" />
                    </div>
                    <p>Already have an account? Please <Link to={"/sign-in"} className="font-kurale text-[#FA2]">SignIn</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;