import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import left1 from "../assets/1.png"
import left2 from "../assets/2.png"
import left3 from "../assets/3.png"
import { FaRegCalendar } from "react-icons/fa";
import moment from 'moment';

const LeftSideNav = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h2 className="text-[#403F3F] font-popines text-xl font-semibold">All categories</h2>
            <div className="flex flex-col">
                {
                    categories.map(categorie => <NavLink className="text-[#9F9F9F] text-xl font-medium mt-[1.87rem] ml-8" to={`/categorie/${categorie.id}`} key={categorie.id}>{categorie.name}</NavLink>)
                }
            </div>

            <div className="ml-4 space-y-5 mt-6">

                <div className="w-[17.6875rem]">
                    <img className="w-[17.6875rem] h-[12.375rem] rounded-md" src={left1} alt="" />
                    <h1 className="my-5 text-[#403F3F] font-popines font-semibold text-xl ">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>

                    <div className="flex gap-4">
                    <p className="text-base font-medium">Sports</p>
                    <div className="gap-2 flex items-center">
                    <FaRegCalendar className="text-2xl text-[#9F9F9F]"/>  
                    <p className="text-base text-[#9F9F9F] font-medium ">{moment().format("MMM D, YYYY")}</p>
                    </div>
                    </div>
                </div>
                <div className="w-[17.6875rem]">
                    <img className="w-[17.6875rem] h-[12.375rem] rounded-md" src={left2} alt="" />
                    <h1 className="my-5 text-[#403F3F] font-popines font-semibold text-xl ">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>

                    <div className="flex gap-4">
                    <p className="text-base font-medium">Sports</p>
                    <div className="gap-2 flex items-center">
                    <FaRegCalendar className="text-2xl text-[#9F9F9F]"/>  
                    <p className="text-base text-[#9F9F9F] font-medium ">{moment().format("MMM D, YYYY")}</p>
                    </div>
                    </div>
                </div>
                <div className="w-[17.6875rem]">
                    <img className="w-[17.6875rem] h-[12.375rem] rounded-md" src={left3} alt="" />
                    <h1 className="my-5 text-[#403F3F] font-popines font-semibold text-xl ">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>

                    <div className="flex gap-4">
                    <p className="text-base font-medium">Sports</p>
                    <div className="gap-2 flex items-center">
                    <FaRegCalendar className="text-2xl text-[#9F9F9F]"/>  
                    <p className="text-base text-[#9F9F9F] font-medium ">{moment().format("MMM D, YYYY")}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSideNav;

