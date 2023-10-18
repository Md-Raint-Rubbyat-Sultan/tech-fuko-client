import { Link } from "react-router-dom";
import errorPhoto from "../../assets/404-error-dribbble-800x600.gif";
import Footer from "../../components/shared/Footer/Footer";
import Header from "../../components/shared/Header/Header";

const Error = () => {
    return (
        <div>
            <Header />
            <div className="text-center text-[#FA2] my-12 text-4xl font-kurale">
                <Link className="hover:underline" to={'/'} >&larr; Back to home</Link>
            </div>
            <figure>
                <img className="w-full md:w-3/4 lg:w-1/2 mx-auto" src={errorPhoto} alt="404" />
            </figure>
            <Footer />
        </div>
    );
};

export default Error;