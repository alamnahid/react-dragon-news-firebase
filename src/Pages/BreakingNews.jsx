import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const BreakingNews = () => {
    return (
        <div className="flex w-[80%] mx-auto h-20 bg-[#F3F3F3] px-4 items-center mt-7">
            <button className="btn btn-secondary capitalize bg-[#D72050] w-[6.875rem] h-12">Latest</button>
            <Marquee className="ml-6 font-popines text-lg font-semibold" pauseOnHover={true} speed={100}>
                <Link to="/">The government plans to reintroduce the school feeding programme for students of all state-run primary schools in 150 upazilas by this month with and...</Link>
                <Link className="ml-6" to="/">Private sector credit growth in Bangladesh has continued to dip in recent months, with...</Link>
            </Marquee>

        </div>
    );
};

export default BreakingNews;