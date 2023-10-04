import { FaRegBookmark, FaShareAlt } from "react-icons/fa";
import rating from "../assets/rating.svg"
import eye from "../assets/eye.svg"
import { Link } from "react-router-dom";

const NewsCard = ({news}) => {
   

    
    return (
        <div>
        


            <div className="mb-8 border-2">

                <div className="w-full h-20 rounded-md bg-[#F3F3F3] flex justify-between items-center px-5">
                    <div className="flex gap-4 items-center">
                        <img className="w-10 h-10 rounded-[2.5rem]" src={news.author.img} alt="" />
                        <div>
                            <p>{news.author.name}</p>
                            <p>{news.author.published_date}</p>
                        </div>
                    </div>

                    <div className="flex text-2xl gap-4">
                        <FaRegBookmark/>
                        <FaShareAlt/>
                    </div>
                </div>
                <h1 className="text-[#403F3F] px-6 text-xl font-bold mt-3">{news.title}</h1>

                <img className="w-full px-6 h-[20rem] rounded-md mt-5" src={news.image_url} alt="" />

                {
                    news.details.length>200 ? <p className="text-[#706F6F] px-6 pt-8 text-base"> {news.details.slice(0, 200)}
                    
                    <Link to={`/news/${news._id}`} className="text-[#F75B5F] font-medium">Read More</Link> 
                    </p> :
                    <p>{news.details}</p>
                }
                

                <hr className="my-5 mx-6" />

                <div className="flex justify-between items-center px-6 pb-6">
                    <div className=" flex gap-1 items-center">
                        <img src={rating} alt="" />
                        <img src={rating} alt="" />
                        <img src={rating} alt="" />
                        <img src={rating} alt="" />
                        <img src={rating} alt="" />
                        <p className="text-[#706F6F] text-base font-medium">4.9</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img src={eye} alt="" />
                        <p className="text-[#706F6F] text-base font-medium">{news.total_view}</p>

                    </div>
                    

                </div>

            </div>
            
        </div>
    );
};

export default NewsCard;