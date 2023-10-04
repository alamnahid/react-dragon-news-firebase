import { Link, NavLink } from "react-router-dom";
import userpicture from "../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = ()=>{
        logOut()
        .then()
        .catch()
    }


    const navLinks = <div className="flex">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/career">Career</NavLink></li>
    </div>
    return (
        <div className="pt-8 w-[80%] mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">

                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={userpicture} />
                        </div>
                    </label>

                    {
                        user ? <Link onClick={handleSignOut} to="/login" className="btn btn-secondary border-none w-[8.75rem] capitalize bg-[#403F3F] text-white font-popines font-semibold text-xl">Sign Out</Link>
                            :
                            <Link to="/login" className="btn btn-secondary border-none w-[8.75rem] capitalize bg-[#403F3F] text-white font-popines font-semibold text-xl">Login</Link>
                    }




                </div>
            </div>
        </div>
    );
};

export default Navbar;