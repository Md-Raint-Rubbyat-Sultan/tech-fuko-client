import { useContext, useEffect } from "react";
import HelmetTitle from "../../components/HelmetTitle/HelmetTitle";
import { useRef } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../providers/AuthProvider";

const SignIn = () => {
    const { signInUser, signInWithGoogle, setLoading } = useContext(AuthContext);
    const [showPass, setShowPass] = useState(() => false);
    const addRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    const handelSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        signInUser(email, password)
            .then(() => {
                toast.success("Sign in successful.");
                navigate(location?.state || '/');
            })
            .catch((er) => toast.error(er.message))
            .finally(() => setLoading(() => false))
    }

    const handelGoogleSignUp = () => {
        signInWithGoogle()
            .then(() => {
                toast.success("SignUp successful.");
                navigate(location?.state || '/');
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
    }, []);

    return (
        <div>
            <HelmetTitle title="Sign In" />
            <div className="bg-gray-100 w-3/4 mx-auto my-12 p-4 lg:p-8 rounded-md">
                <div className="pb-4">
                    <h3 className="text-4xl text-center text-[#FA2] font-kurale">Sign In</h3>
                </div>
                <form onSubmit={handelSignIn} className="space-y-6">
                    <div className="flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input ref={addRef} className="border px-2 py-3 rounded-md" type="email" name="email" id="email" placeholder="Enter product email" required />
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
                        <input className="py-2 bg-[#FA4] rounded-md font-kurale font-bold text-xl text-white border-2 border-[#FA4] hover:text-black hover:bg-white cursor-pointer" type="submit" value="Sign In" />
                    </div>
                    <hr />
                    <div className="flex flex-col">
                        <input onClick={handelGoogleSignUp} className="py-2 bg-[#FA4] rounded-md font-kurale font-bold text-xl text-white border-2 border-[#FA4] hover:text-black hover:bg-white cursor-pointer" type="button" value="SignUp With Google" />
                    </div>
                    <p>Don&lsquo;t have an account? Please <Link state={location?.state} to={"/sign-up"} className="font-kurale text-[#FA2]">Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SignIn;