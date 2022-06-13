import { Link, useNavigate } from "react-router-dom";
import swal from "../helpers/swal";

function NavBar() {
    const navigate = useNavigate();
    function signout() {
        localStorage.removeItem("access_token");
        localStorage.removeItem("name");
        swal("Success", "You have been signed out", "success");
        navigate("/login");
    }
    return (
        <>
            <div className="fixed w-full bg-amber-800">
                <div className="flex px-4">
                    <div className="flex ml-3">
                        <div className="flex px-4">
                            <span className="font-bold mt-3 text-lg text-amber-500">The Resto</span>
                        </div>
                        <Link
                            to="/"
                            className="flex items-center py-2 transition-colors duration-150 text-amber-400 hover:text-amber-600 border-b-4 border-transparent hover:border-amber-500"
                        >
                            <span className="text-sm">Dashboard</span>
                        </Link>
                        <Link
                            to="/categories"
                            className="flex items-center py-2 transition-colors duration-150 text-amber-400 hover:text-amber-600 border-b-4 border-transparent hover:border-amber-500 ml-5"
                        >
                            <span className="text-sm">Categories</span>
                        </Link>
                        <Link
                            to="/addform"
                            className="flex items-center py-2 transition-colors duration-150 text-amber-400 hover:text-amber-600 border-b-4 border-transparent hover:border-amber-500 ml-5"
                        >
                            <span className="text-sm">Add Item</span>
                        </Link>
                        <button className="flex items-center py-2 transition-colors duration-150 text-amber-400 hover:text-amber-600 border-b-4 border-transparent hover:border-amber-500 ml-5"></button>
                    </div>
                    <div className="p-2 ml-auto flex-shrink-0 flex">
                        <button
                            onClick={signout}
                            className="shadow-sm text-white rounded-md bg-red-700 hover:bg-red-500 flex items-center px-5 py-2 transition-colors duration-150 ml-3.5"
                        >
                            <span className="mr-2">Sign Out</span><i className="fas fa-sign-out-alt"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavBar;
