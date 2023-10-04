import { FaGoogle, FaGithub, FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
import qzone1 from "../assets/qZone1.png"
import qzone2 from "../assets/qZone2.png"
import qzone3 from "../assets/qZone3.png"
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const RightSideNav = () => {
    const {googleSignIn, githubSignIn} = useContext(AuthContext);

    const handleGoogleLogin = ()=>{
        googleSignIn()
        .then(result =>{
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error)
        })
    }

    const handleGithubSignIn = ()=>{
        githubSignIn()
        .then(result =>{
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error)
        })

    }

    return (
        <div>
            <div>
                <h2 className="text-3xl p-4 font-bold mb-4">Login With</h2>
                <button onClick={handleGoogleLogin} className="btn  btn-outline hover:bg-blue-500 border-black text-black font-semibold text-xl w-[90%] mx-[5%]"><FaGoogle></FaGoogle>Google</button>
                <button onClick={handleGithubSignIn} className="btn hover:bg-blue-500 mt-4 btn-outline border-black font-semibold text-xl w-[90%] mx-[5%]"><FaGithub></FaGithub>Github</button>



            </div>

            <div className="mt-6">
                <h2 className="text-2xl p-4 font-semibold text-[#403F3F]">Find us on</h2>

                <div className="border-2 mx-4 py-4">
                <a className="flex items-center gap-3 font-medium text-base pl-4" href="">
                    <div className="bg-[#F3F3F3] w-8 h-8 flex rounded-[50%] justify-center items-center"><FaFacebookSquare className="text-xl" /></div>
                    <span className="text-[#706F6F]">Facebook</span></a>
                </div>
                <div className="border-l-2 border-r-2 mx-4 py-4">
                <a className="flex items-center gap-3 font-medium text-base pl-4" href="">
                    <div className="bg-[#F3F3F3] w-8 h-8 flex rounded-[50%] justify-center items-center"><FaTwitter className="text-xl" /></div>
                    <span className="text-[#706F6F]">Twitter</span></a>
                </div>
                <div className="border-2 mx-4 py-4">
                <a className="flex items-center gap-3 font-medium text-base pl-4" href="">
                    <div className="bg-[#F3F3F3] w-8 h-8 flex rounded-[50%] justify-center items-center"><FaInstagram className="text-xl" /></div>
                    <span className="text-[#706F6F]">Instagram</span></a>
                </div>

               
                
            </div>

            <div className="bg-[#F3F3F3] w-[90%] mx-[5%] mt-5 pb-6">
                <h2 className="text-3xl p-4">Q Zone</h2>
                <img className="mx-auto mt-3" src={qzone1} alt="" />
                <img className="mx-auto mt-3" src={qzone2} alt="" />
                <img className="mx-auto mt-3" src={qzone3} alt="" />
            </div>

            <div style={{
                backgroundImage: "url('https://i.ibb.co/rQbBgWS/bg.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }} className="w-[90%] h-[31.8125rem] mx-[5%] mt-5 flex flex-col justify-center items-center ">
                <h1 className="w-[11.875rem] text-white text-center text-3xl font-bold">Create an Amazing Newspaper</h1>
                <p className="w-[12rem] text-center text-white text-base  mt-6">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button className="capitalize bg-[#D72050] w-[9.3rem] h-16 btn-secondary border-none mt-7">Learn More</button>
            </div>


        </div>
    );
};

export default RightSideNav;