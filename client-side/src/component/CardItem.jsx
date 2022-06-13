import { useNavigate } from "react-router-dom";

export default function CardItem({ menu }) {
    const navigate = useNavigate();
    const handleDetail = (id) => navigate(`/details/${id}`);
    if (!menu) {
        return null;
    }
    return (

        <div className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
            <img className="h-56 lg:h-60 w-full object-cover" src={menu?.imgUrl} alt="" />
            <div className="p-3">
                <span className="text-md text-primary text-amber-500 ">{menu?.price}</span>
                <h3 className="font-semibold text-xl leading-6 text-gray-700 my-2">
                {menu?.name}
                </h3>
                <p className="paragraph-normal text-gray-600">
                {menu?.description}
                </p>
                <a onClick={() => handleDetail(menu?.id)} className="mt-3 block text-amber-500 cursor-pointer" >See Detail </a>
            </div>
        </div>
        
    );
}
