import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import RightSideNav from "../Contents/RightSideNav";
import Header from "./Header";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { FaRegCalendar } from "react-icons/fa";
import moment from 'moment';
import left1 from "../assets/1.png"
import left2 from "../assets/2.png"
import left3 from "../assets/3.png"


const NewsDetails = () => {

    const [news, setNews] = useState({})

    const newses = useLoaderData();

    
    const {id} = useParams();
    console.log(id)
    useEffect(()=>{
        const findNews = newses.find((news)=>news._id===id);
        setNews(findNews)
    }, [])

    const navigate = useNavigate();
    const handleGoBack = ()=>{
        navigate(-1)
    }

    return (
        <div className="pb-8">
            <Header></Header>
            <Navbar></Navbar>

            <div className="grid grid-cols-1 lg:grid-cols-4 w-[80%] mx-auto mt-8">
                <div className="col-span-3 p-4">
                    <h1 className="text-[#403F3F] font-semibold text-xl">Dragon News</h1>
                    <div className="w-full pb-11 rounded-md border-2 mt-6">
                        <img className="pt-8 px-8" src={news.image_url} alt="" />
                        <h1 className="text-[#403F3F] px-8 text-2xl font-bold mt-5">{news.title}</h1>
                        <p className="text-[#706F6F] px-8 pt-8 text-base"> {news.details}</p>

                        <button onClick={handleGoBack} className="btn btn-neutral ml-8 mt-5 border-none h-12">Go Back to Home</button>

                    </div>

                    <h1 className="text-[#403F3F] font-semibold mt-9 text-2xl">Editors Insight</h1>

                    <div className="flex-col lg:flex-row ml-4 space-y-5 mt-6 flex justify-evenly items-center">

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
                <div className="">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
            
        </div>
    );
};

export default NewsDetails;