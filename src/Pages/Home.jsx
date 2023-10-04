import { Outlet, useLoaderData } from "react-router-dom";
import LeftSideNav from "../Contents/LeftSideNav";
import RightSideNav from "../Contents/RightSideNav";
import BreakingNews from "./BreakingNews";
import Header from "./Header";
import Navbar from "./Navbar";
import NewsCard from "./NewsCard";


const Home = () => {
    const news = useLoaderData()
    
    return (
        <div className="font-popines">
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-[80%] mx-auto mt-20">

           <div className="">
            <LeftSideNav></LeftSideNav>
           </div>
           <div className="col-span-2">
            <Outlet></Outlet>
           {/* <h2 className="text-[#403F3F] font-popines text-xl font-semibold mb-5">Dragon News Home</h2>
            {
                news.map(aNews=><NewsCard key={aNews.id} news={aNews}></NewsCard>)
            } */}
           </div>
           <div className="">
            <RightSideNav></RightSideNav>
           </div>


           </div>
        </div>
    );
};

export default Home;