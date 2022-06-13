import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCategories } from "../store/actions/categoryAction";
import { fetchItemsById, editItem } from "../store/actions/itemAction";
import NavBar from "./NavBar";

function FormEdit() {
    const { categories } = useSelector((state) => state.categories);
    const { items } = useSelector((state) => state.items);
    const { id } = useParams();
    const [populateIngredient, setPopulateIngredient] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [item, setItem] = useState({
        name: items.name,
        price: items.price,
        categoryId: items.categoryId,
        description: items.description,
        imgUrl: items.imgUrl,
        ingredient: populateIngredient
    });

    async function submitHandler(e) {
        e.preventDefault();
        dispatch(
            editItem(id, {
                name: item.name,
                price: item.price,
                categoryId: item.categoryId,
                description: item.description,
                imgUrl: item.imgUrl,
                ingredients: item.ingredient
            })
            );
            navigate('/')
    }

    useEffect(() => {
        dispatch(fetchItemsById(id)).then((data) => {
            let c = data.payload.price.slice(3, data.payload.price.length-3).split(".");
            data.payload.price = +`${c[0]}${c[1]}`;
            setPopulateIngredient(data.populateIngredient);
        });
        dispatch(getCategories());
    }, []);

    return (
        <>
            <NavBar />
            <div className="min-h-screen pt-14 flex flex-col items-center justify-center bg-gray-100">
                <div className=" flex flex-col bg-white shadow-md  sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl  max-w-md ">
                    <form action="" onSubmit={submitHandler}>
                        <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">Edit Item</div>
                        <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">Edit your item here</div>

                        <div className="flex">
                            <div className="grid grid-cols-12 gap-1.5 w-full p-2">
                                <div className="col-span-6">
                                    <label htmlFor="name" className="mb-1 text-xs tracking-wide text-gray-600">
                                        Item Name:
                                    </label>
                                    <div className="relative">
                                        <div className="w- inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400 "></div>

                                        <input
                                            id="name"
                                            type="text"
                                            name="name"
                                            defaultValue={items.name}
                                            onChange={(e) => {
                                                const { name, value } = e.target;
                                                setItem({ ...item, [name]: value });
                                            }}
                                            className="text-sm placeholder-gray-500 pl-3 pr-4 rounded-2xl border-2 border-amber-800 w-full py-2 focus:outline-none focus:border-amber-400 "
                                            placeholder="Enter item name"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-6">
                                    <label htmlFor="price" className="mb-1 text-xs tracking-wide text-gray-600">
                                        Item Price:
                                    </label>
                                    <div className="relative">
                                        <div className="w- inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400 "></div>

                                        <input
                                            id="price"
                                            type="number"
                                            name="price"
                                            defaultValue={items.price}
                                            onChange={(e) => {
                                                const { name, value } = e.target;
                                                setItem({ ...item, [name]: value });
                                            }}
                                            className="text-sm placeholder-gray-500 pl-3 pr-4 rounded-2xl border-2 border-amber-800 w-full py-2 focus:outline-none focus:border-amber-400 "
                                            placeholder="Enter item price"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="grid grid-cols-12 gap-1.5 w-full p-2">
                                <div className="col-span-6">
                                    <label htmlFor="image" className="mb-1 text-xs tracking-wide text-gray-600">
                                        Item Image:
                                    </label>
                                    <div className="relative">
                                        <div className="w- inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400 "></div>

                                        <input
                                            id="image"
                                            type="text"
                                            name="imgUrl"
                                            defaultValue={items.imgUrl}
                                            onChange={(e) => {
                                                const { name, value } = e.target;
                                                setItem({ ...item, [name]: value });
                                            }}
                                            className="text-sm placeholder-gray-500 pl-3 pr-4 rounded-2xl border-2 border-amber-800 w-full py-2 focus:outline-none focus:border-amber-400 "
                                            placeholder="Enter item image"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-6">
                                    <label htmlFor="category" className="mb-1 text-xs tracking-wide text-gray-600">
                                        Item Category:
                                    </label>
                                    <select
                                        name="categoryId"
                                        className="text-sm placeholder-gray-500 pl-3 pr-4 rounded-2xl border-2 border-amber-800 w-full py-2 focus:outline-none focus:border-amber-400 "
                                        id="category"
                                        value={items.categoryId}
                                        onChange={(e) => {
                                            const { name, value } = e.target;
                                            setItem({ ...item, [name]: value });
                                        }}
                                    >
                                        <option disabled selected>
                                            Select Category
                                        </option>
                                        {categories.map((category) => (
                                            <option key={category.id} value={category.id}>
                                                {category.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="grid grid-cols-12 gap-1.5 w-full p-2">
                                <div className="col-span-12">
                                    <label htmlFor="description" className="mb-1 text-xs tracking-wide text-gray-600">
                                        Item Description:
                                    </label>
                                    <div className="relative">
                                        <textarea
                                            name="description"
                                            defaultValue={items.description}
                                            onChange={(e) => {
                                                const { name, value } = e.target;
                                                setItem({ ...item, [name]: value });
                                            }}
                                            className="h-10 text-sm placeholder-gray-500 pl-3 pr-4 rounded-2xl border-2 border-amber-800 w-full py-2 focus:outline-none focus:border-amber-400 "
                                            placeholder="Enter Description Here"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="grid grid-cols-12 gap-1.5 w-full p-2">
                                <div className="col-span-12">
                                    <label htmlFor="ingredient" className="mb-1 text-xs tracking-wide text-gray-600">
                                        Item Ingredients:
                                    </label>
                                    <div className="relative">
                                        <textarea
                                            name="ingredient"
                                            defaultValue={populateIngredient}
                                            onChange={(e) => {
                                                const { name, value } = e.target;
                                                setItem({ ...item, [name]: value });
                                            }}
                                            className="h-10 text-sm placeholder-gray-500 pl-3 pr-4 rounded-2xl border-2 border-amber-800 w-full py-2 focus:outline-none focus:border-amber-400 "
                                            placeholder="Enter Ingredient Here"
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
                </div>
            </div>
        </>
    );
}

export default FormEdit;
