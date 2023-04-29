import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Catagory from "../Pages/Catagory/Catagory";
import NewsLayout from "../Layouts/NewsLayout";
import News from "../Pages/News/News";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/catagory/:id',
                element:<Catagory></Catagory>
            }
        ]
    },
    {
        path:'news',
        element: <NewsLayout></NewsLayout>,
        children:[{
            path: ':id',
            element:<News></News>
        }]
    }
])

export default router;