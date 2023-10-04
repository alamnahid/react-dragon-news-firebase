import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "./NewsCard";


const CategorieWiseNews = () => {
    const { id } = useParams();
    
    const [news, setNews] = useState([])

    const newses = useLoaderData();
    useEffect(() => {
        const findNews = newses.filter((news) => news.category_id === id);
        setNews(findNews)
    }, [id, newses])

    

    return (
        <div>
            <h2 className="text-[#403F3F] font-popines text-xl font-semibold mb-5">Dragon News Home</h2>
            {
                news.map(aNews => <NewsCard key={aNews.id} news={aNews}></NewsCard>)
            }
            {
                id==="0" && newses.map(aNews => <NewsCard key={aNews.id} news={aNews}></NewsCard>)
            }
        </div>
    );
};

export default CategorieWiseNews;