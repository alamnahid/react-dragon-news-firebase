import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Pages/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";


const Register = () => {
    const {createUser} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const handleRegister = (e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(name, photo, email, password)

        //create user
        createUser(email, password)
        .then(result=>{
            console.log(result.user)
            navigate(location?.state ? location.state : '/')
        })
        .catch(error=>{
            console.error(error)
        })

         
    }
    const {googleSignIn, githubSignIn} = useContext(AuthContext);

    const handleGoogleLogin = ()=>{
        googleSignIn()
        .then(result =>{
            console.log(result.user)
            navigate(location?.state ? location.state : '/')
        })
        .catch(error=>{
            console.error(error)
            
        })
    }

    const handleGithubSignIn = ()=>{
        githubSignIn()
        .then(result =>{
            console.log(result.user)
            navigate(location?.state ? location.state : '/')
        })
        .catch(error=>{
            console.error(error)
        })

    }
    return (
        <div className="bg-[#F3F3F3]">
        <Navbar></Navbar>



        <div className="hero min-h-screen mt-8">


            <div className="flex-shrink-0 w-[47rem] h-[61.3125rem] rounded-[0.3125rem] bg-white shadow-md">
                <h1 className="text-[#403F3F] text-center text-4xl font-medium mt-16">Register your account</h1>
                <hr  className="mt-12 w-[80%] mx-auto"/>
                <form onSubmit={handleRegister} className="card-body w-[80%] mx-auto">
                <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#403F3F] text-xl font-semibold">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter your name" className="input input-bordered rounded-md  h-[4.0625rem] bg-[#F3F3F3] border-none" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#403F3F] text-xl font-semibold">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Enter your photo url" className="input input-bordered rounded-md  h-[4.0625rem] bg-[#F3F3F3] border-none" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#403F3F] text-xl font-semibold">Email address</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your email address" className="input input-bordered rounded-md  h-[4.0625rem] bg-[#F3F3F3] border-none" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text text-[#403F3F] text-xl font-semibold">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="Enter your password" className="input input-bordered rounded-md  h-[4.0625rem] bg-[#F3F3F3] border-none" required />
                        <label className="label rounded-lg">
                            <input style={
                                {
                                    border: "1px solid var(--Dark-05, #CFCFCF)"
                                }
                            } className="w-[1.5625rem] mt-5 text-[#CFCFCF] h-[1.5625rem] rounded-lg " type="checkbox" name="" id="" />
                            <p className="text-[#706F6F] mt-5 ml-2 text-base">Accept <Link className="font-semibold">Term & Conditions</Link></p>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary h-[4.0625rem] bg-[#403F3F] text-white text-xl font-semibold border-none">Login</button>
                    </div>


                    <div className="flex justify-center items-center gap-8">
                            <button onClick={handleGoogleLogin} className="btn  btn-outline hover:bg-blue-500 border-black text-black font-semibold text-xl"><FaGoogle></FaGoogle>Google</button>
                            <button onClick={handleGithubSignIn} className="btn hover:bg-blue-500  btn-outline border-black font-semibold text-xl"><FaGithub></FaGithub>Github</button>
                        </div>


                    <p className="text-[#706F6F] text-center text-base font-semibold mt-7">Already Have An Account ? <Link to="/login" className="text-[#F75B5F]">Login</Link></p>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Register;