import errorPhoto from "../../assets/404-error-dribbble-800x600.gif";

const Error = () => {
    return (
        <div>
            <figure>
                <img className="w-full md:w-3/4 lg:w-1/2 mx-auto" src={errorPhoto} alt="404" />
            </figure>
        </div>
    );
};

export default Error;