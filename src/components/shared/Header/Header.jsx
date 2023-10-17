import logo from "../../../assets/android-chrome-192x192.png";

const Header = () => {
    return (
        <div className="bg-slate-800 text-white font-kurale flex items-center justify-center gap-4 py-6">
            <figure>
                <img className="w-12 h-12" src={logo} alt="logo" />
            </figure>
            <h1 className="text-5xl">Tech <span className="text-[#FA2]">Fuko</span></h1>
        </div>
    );
};

export default Header;