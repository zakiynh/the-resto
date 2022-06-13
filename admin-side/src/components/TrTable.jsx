import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteItem } from "../store/actions/itemAction";

function TableRow({i, item}) {
    const dispatch = useDispatch();
    
    function handleDelete(e) {
        e.preventDefault();
        dispatch(deleteItem(item.id))
    }
    return(
        <tr className="w-full border-2">
            <td className=" border-2 border-amber-700">{i + 1}</td>
            <td className=" border-2 border-amber-700">{item.name}</td>
            <td className=" border-2 border-amber-700">{item.price}</td>
            <td className=" border-2 border-amber-700">{item.categoryId}</td>
            <td className="border-2 border-amber-700">
                <button className="btn btn-square bg-yellow-400 w-20 mx-1 border-2 rounded-md font-semibold">
                    <Link to={`/menus/edit/${item.id}`}>Update</Link>
                </button>
                <button 
                onClick={handleDelete}
                className="btn btn-square bg-red-400 w-20 mx-1 border-2 rounded-md font-semibold">Delete</button>
            </td>
        </tr>

    )
}

export default TableRow;
