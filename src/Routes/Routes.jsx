import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "./PrivateRoute";
import CategorieWiseNews from "../Pages/CategorieWiseNews";
import AllNews from "../Pages/AllNews";
import ErrorPage from "../Pages/ErrorPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element:  <Home></Home>,
                loader: ()=>fetch('/news.json'),
                children: [
                    {
                        path: '/',
                        element:<AllNews></AllNews>,
                        loader: ()=>fetch('/news.json'),
                    },
                    {
                        path: '/categorie/:id',
                        element: <CategorieWiseNews></CategorieWiseNews>,
                        loader: ()=>fetch('/news.json')
                    }
                ]
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
                loader: ()=>fetch('/news.json')

            },
            
        ]
    }
])

export default router