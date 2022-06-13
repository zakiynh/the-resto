import NavBar from "../component/NavBar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenuId } from "../store/actions/menuAction";


function DetailPage() {
    const { id } = useParams();
    const menus = useSelector((state) => state.menus.menus);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getMenuId(id));
    }, [dispatch])
    return (
        <>
            <NavBar />
            <div className="min-w-screen min-h-screen bg-amber-500 flex items-center p-5 lg:p-10 overflow-hidden relative">
    <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div className="relative">
                    <img src={menus.imgUrl} className="w-full relative z-10" alt="" />
                    <div className="border-4 border-amber-400 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
                <div className="mb-10">
                    <h1 className="font-bold uppercase text-2xl mb-5">{menus.name}</h1>
                    <p className="text-sm">{menus.description}</p>
                </div>
                <div>
                    <div className="inline-block align-bottom mr-5">
                        <span className="text-2xl leading-none align-baseline">{menus.price}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </>
    );
}

export default DetailPage;
