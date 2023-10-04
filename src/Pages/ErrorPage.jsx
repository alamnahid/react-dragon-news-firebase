// import { useRouteError } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";


const ErrorPage = () => {
    // const error = useRouteError();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>

            <h1 className="text-center mt-28">Page will adding soon... <span className="loading loading-bars loading-sm"></span></h1>
            
            
        </div>
    );
};

export default ErrorPage;