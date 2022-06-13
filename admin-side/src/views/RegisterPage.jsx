import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../src/store/actions/userAction";

function RegisterPage() {
    const [users, setUsers] = useState({
        name: "",
        email: "",
        password: "",
        role: "admin",
        phoneNumber: "",
        address: "",
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const inputHandle = (e) => {
        const { name, value } = e.target;
        setUsers({
            ...users,
            [name]: value,
        });
    };

    async function submitRegister(e) {
        e.preventDefault();
        dispatch(register(users))
            .then((registerData) => {
                if(!registerData) {
                    throw new Error('error')
                }
                navigate('/login')
            })
            .catch((error) => {})
    }

    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
                <div className=" flex flex-col bg-white shadow-md  sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl  max-w-md ">
                    <form action="" onSubmit={submitRegister}>
                        <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">Join Us Now</div>
                        <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">Enter your credentials to get your account</div>

                        <div className="flex">
                            <div className="grid grid-cols-12 gap-1.5 w-full p-2">
                                <div className="col-span-6">
                                    <label htmlFor="name" className="mb-1 text-xs tracking-wide text-gray-600">
                                        Name:
                                    </label>
                                    <div className="relative">
                                        <div className=" inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400 ">
                                            <i className="fas fa-user text-amber-500"></i>
                                        </div>

                                        <input
                                            id="name"
                                            type="text"
                                            name="name"
                                            value={users.name}
                                            onChange={inputHandle}
                                            className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border-2 border-amber-800 w-full py-2 focus:outline-none focus:border-amber-400 "
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-6">
                                    <label htmlFor="email" className="mb-1 text-xs tracking-wide text-gray-600">
                                        Email Address:
                                    </label>
                                    <div className="relative">
                                        <div className=" inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400 ">
                                            <i className="fas fa-at text-amber-500"></i>
                                        </div>

                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={users.email}
                                            onChange={inputHandle}
                                            className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border-2 border-amber-800 w-full py-2 focus:outline-none focus:border-amber-400 "
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="grid grid-cols-12 gap-1.5 w-full p-2">
                                <div className="col-span-6">
                                    <label htmlFor="phoneNumber" className="mb-1 text-xs tracking-wide text-gray-600">
                                        Phone Number:
                                    </label>
                                    <div className="relative">
                                        <div className=" inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400 ">
                                            <span>
                                                <i className="fa-solid fa-address-book text-amber-500"></i>
                                            </span>
                                        </div>

                                        <input
                                            id="phoneNumber"
                                            type="number"
                                            name="phoneNumber"
                                            value={users.phoneNumber}
                                            onChange={inputHandle}
                                            className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border-2 border-amber-800 w-full py-2 focus:outline-none focus:border-amber-400 "
                                            placeholder="Enter your Phone Number"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-6">
                                    <label htmlFor="password" className="mb-1 text-xs tracking-wide text-gray-600">
                                        Password:
                                    </label>
                                    <div className="relative">
                                        <div className=" inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400 ">
                                            <span>
                                                <i className="fas fa-lock text-amber-500"></i>
                                            </span>
                                        </div>

                                        <input
                                            id="password"
                                            type="password"
                                            name="password"
                                            value={users.password}
                                            onChange={inputHandle}
                                            className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border-2 border-amber-800 w-full py-2 focus:outline-none focus:border-amber-400 "
                                            placeholder="Enter your password"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="grid grid-cols-12 gap-1.5 w-full p-2">
                                <div className="col-span-12">
                                    <label htmlFor="address" className="mb-1 text-xs tracking-wide text-gray-600">
                                        Address:
                                    </label>
                                    <div className="relative">
                                        <div className=" inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400 ">
                                            <span>
                                                <i className="fa-solid fa-address-card text-amber-400"></i>
                                            </span>
                                        </div>
                                        <textarea
                                            name="address"
                                            value={users.address}
                                            onChange={inputHandle}
                                            className="h-10 text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border-2 border-amber-800 w-full py-2 focus:outline-none focus:border-amber-400 "
                                            placeholder="Enter Address Here"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex w-full">
                            <button
                                type="submit"
                                className="flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-amber-500 hover:bg-amber-600 rounded-2xl py-2 w-full transition duration-150 ease-in "
                            >
                                <span className="mr-2 uppercase">Sign Up</span>
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
                </div>
                    <div className="flex justify-center items-center mt-2">
                        <a target="_blank" className="inline-flex items-center cursor-default text-gray-700 font-medium text-xs text-center">
                            <span className="ml-2">
                                You already have an account?
                                <Link to="/login" className="text-xs ml-2 cursor-pointer text-amber-500 font-semibold">
                                    Sign in now
                                </Link>
                            </span>
                        </a>
                    </div>
            </div>
        </>
    );
}

export default RegisterPage;
