import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteCategory, getCategories } from "../store/actions/categoryAction";

function TableCategory({i, category}) {
    const { categories } = useSelector((state) => state.categories);
    const dispatch = useDispatch();

    function handleDelete(e) {
        e.preventDefault();
        dispatch(deleteCategory(category.id))
    }

    if(!categories.length){
        <div>loading</div>
    } else {
        return(
            <tr className="w-full border-2">
                <td className="border-2 border-amber-700">{i + 1}</td>
                <td className="border-2 border-amber-700">{category.name}</td>
                <td className="border-2 border-amber-700">
                    <button
                    onClick={handleDelete}
                    className="bg-red-400 w-20 mx-1 border-2 rounded-md font-semibold">
                        Delete
                    </button>
                </td>
            </tr>
        )
    }
}

export default TableCategory;