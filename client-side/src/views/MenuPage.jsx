import CardItem from "../component/CardItem";
import NavBar from "../component/NavBar";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenuItems } from "../store/actions/menuAction";

function MenuPage() {
    const { menus } = useSelector((state) => state.menus);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMenuItems());
    }, [dispatch]);

    if(!menus.length) {
        return <div>Loading...</div>
    } else {
        return (
            <>
                <NavBar />
                {/* CARD */}
                <div className="grid justify-center md:grid-cols-2 px-6 py-20 lg:grid-cols-3 gap-5 lg:gap-7 ">
                    {menus.map((menu) => (
                        <CardItem key={menu.id} menu={menu} />
                    ))}
                </div>
            </>
        );
    }
}

export default MenuPage;