import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";


const AllNews = () => {
    const newses = useLoaderData();
    return (
        <div>
           
           <h2 className="text-[#403F3F] font-popines text-xl font-semibold mb-5">Dragon News Home</h2>
           {
            newses.map(aNews => <NewsCard key={aNews.id} news={aNews}></NewsCard>)
           }
        </div>
    );
};

export default AllNews;