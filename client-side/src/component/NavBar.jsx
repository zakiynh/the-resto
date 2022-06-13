import { Link } from "react-router-dom"

function NavBar() {
    return (
        <>
            <div className="fixed z-50 w-full bg-amber-800">
                <div className="flex px-4">
                    <div className="flex ml-3">
                    <div className="flex px-4"><span className="font-bold mt-3 text-lg text-amber-500">The Resto</span></div>
                        <Link to="/" className="flex items-center py-2 transition-colors duration-150 text-amber-400 hover:text-amber-600 border-b-4 border-transparent hover:border-amber-500">
                            <span className="text-sm">Home</span>
                        </Link>
                        <Link to="/menus" className="flex items-center py-2 transition-colors duration-150 text-amber-400 hover:text-amber-600 border-b-4 border-transparent hover:border-amber-500 ml-5">
                            <span className="text-sm">Our Food</span>
                        </Link>
                        <button className="flex items-center py-2 transition-colors duration-150 text-amber-400 hover:text-amber-600 border-b-4 border-transparent hover:border-amber-500 ml-5">
                            <span className="text-sm">Contact</span>
                        </button>
                        <button className="flex items-center py-2 transition-colors duration-150 text-amber-400 hover:text-amber-600 border-b-4 border-transparent hover:border-amber-500 ml-5"></button>
                    </div>
                    <div className="p-2 ml-auto flex-shrink-0 flex">
                        <button className="shadow-sm text-amber-800 rounded-md bg-amber-800 hover:bg-amber-800 flex items-center px-5 py-2 transition-colors duration-150 ml-3.5">
                            <span className="text-sm">Contact</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavBar;
