import NavBar from "../components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../store/actions/categoryAction";
import { useState, useEffect } from "react";
import TableCategory from "../components/TrTableCat";
import { Link } from "react-router-dom";

function CategoriesPage() {
    const { categories } = useSelector((state) => state.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, []);
    
    if(!categories.length){
        return (
            <>
                <NavBar></NavBar>
                <div>loading</div>
            </>
        );
    } else {
        return (
            <div className="mb-4 ">
                <NavBar></NavBar>
                <div className="px-28 py-14">
                    <div className="my-6">
                        <h1 className="font-bold text-4xl">Category List</h1>
                    </div>
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden" >
                    <table className="w-full border-4 border-amber-700 table table-auto">
                            <thead className="w-max border-2 ">
                                <tr>
                                    <th className="border-2 border-amber-700">No</th>
                                    <th className="border-2 border-amber-700">Name</th>
                                    <th className="border-2 border-amber-700">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="border-2">
                                {categories.map((category, idx) => (
                                    <TableCategory key={category.id} category={category} i={idx}></TableCategory>
                                ))}
                            </tbody>
                        </table>
    
                    </div>
                </div>
                <div className="p-2 ml-auto items-center justify-center flex">
                    <button className="">
                        {" "}
                        <Link
                            to="/addformcat"
                            className="shadow-sm text-white rounded-md bg-amber-700 hover:bg-amber-500 flex items-center px-5 py-2 transition-colors duration-150 ml-3.5"
                        >
                            <span className="mr-2">Add Categories</span>
                            <svg className="text-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M384 0v128h128L384 0zM352 128L352 0H176C149.5 0 128 21.49 128 48V288h174.1l-39.03-39.03c-9.375-9.375-9.375-24.56 0-33.94s24.56-9.375 33.94 0l80 80c9.375 9.375 9.375 24.56 0 33.94l-80 80c-9.375 9.375-24.56 9.375-33.94 0C258.3 404.3 256 398.2 256 392s2.344-12.28 7.031-16.97L302.1 336H128v128C128 490.5 149.5 512 176 512h288c26.51 0 48-21.49 48-48V160h-127.1C366.3 160 352 145.7 352 128zM24 288C10.75 288 0 298.7 0 312c0 13.25 10.75 24 24 24H128V288H24z" />
                            </svg>
                        </Link>
                    </button>
                </div>
            </div>
        );
    }
}

export default CategoriesPage;
