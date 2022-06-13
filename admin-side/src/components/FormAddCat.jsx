import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addCategory } from "../store/actions/categoryAction";
import NavBar from "./NavBar";

function FormAddCat() {
    const [cat, setCategories] = useState({
        name: "",
    });

    const navigate = useNavigate()
    const dispatch = useDispatch()

    function inputHandle(e) {
        const { name, value } = e.target;
        const newCat = { ...cat };
        newCat[name] = value;
        setCategories(newCat);
    };

    async function submitCat(e) {
        e.preventDefault();
        dispatch(addCategory(cat))
            .then(() => {
                navigate('/categories')
            })
            .catch((error) => {})
    };
    return (
        <>
            <NavBar />
            <div className="min-h-screen pt-14 flex flex-col items-center justify-center bg-gray-100">
                <div className=" flex flex-col bg-white shadow-md  sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl  max-w-md ">
                    <form action="" onSubmit={submitCat}>
                        <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">Add Category</div>
                        <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">Enter Category here</div>

                        <div className="flex flex-col mb-6">
                                <label htmlFor="name" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                                    Name:
                                </label>
                                <div className="relative">
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={cat.name}
                                        onChange={inputHandle}
                                        className=" text-sm placeholder-gray-500 pl-2 rounded-2xl border-2 border-amber-800 w-full py-2 focus:outline-none focus:border-amber-400"
                                        placeholder="Enter Category Name Here"
                                    />
                                </div>
                            </div>

                        <div className="flex w-full">
                            <button
                                type="submit"
                                className="flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-amber-500 hover:bg-amber-600 rounded-2xl py-2 w-full transition duration-150 ease-in "
                            >
                                <span className="mr-2 uppercase">Submit</span>
                                <span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </form>
                <div className="flex justify-center items-center mt-6">
                    <a href="#" target="_blank" className="inline-flex items-center text-gray-700 font-medium text-xs text-center">
                        <Link to="/categories" href="#" className="text-s text-red-500 font-semibold">
                            Cancel
                        </Link>
                    </a>
                </div>
                </div>
            </div>
        </>
    );
}

export default FormAddCat;
