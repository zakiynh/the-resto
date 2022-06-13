import NavBar from "../components/NavBar";
import { useEffect } from "react";
import TrTable from "../components/TrTable.jsx";
import { useSelector, useDispatch } from "react-redux";
import { fetchItems } from "../store/actions/itemAction";

function DashboardPage() {
    const { items } = useSelector((state) => state.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchItems());
    }, []);

    if (!items.length) {
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
                <div className="px-10 py-14">
                    <div className="my-6">
                        <h1 className="font-bold text-4xl">Admin Dashboard</h1>
                    </div>
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table className="w-full border-4 border-amber-700 table table-auto">
                            <thead className="w-max border-2 ">
                                <tr>
                                    <th className="border-2 border-amber-700">No</th>
                                    <th className="border-2 border-amber-700">Name</th>
                                    <th className="border-2 border-amber-700">Price</th>
                                    <th className="border-2 border-amber-700">Category</th>
                                    <th className="border-2 border-amber-700">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item, idx) => (
                                    <TrTable key={item.id} item={item} i={idx}></TrTable>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardPage;
