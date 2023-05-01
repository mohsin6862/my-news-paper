import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Catagory from "../Pages/Catagory/Catagory";
import NewsLayout from "../Layouts/NewsLayout";
import News from "../Pages/News/News";
import LoginLayout from "../Layouts/LoginLayout";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute";
import Trems from "../Pages/Trems";

const router = createBrowserRouter([
    {
        path:'/',
        element: <LoginLayout></LoginLayout>,
        children:[
            {
               path:'/',
               element:<Navigate to='/catagory/0'></Navigate>
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/terms',
                element: <Trems></Trems>
            }
        ]

    },
    {
        path:'/catagory',
        element:<Main></Main>,
        children:[
           
            {
                path:':id',
                element:<Catagory></Catagory>,
                loader: ({params})=>fetch(`http://localhost:5000/catagories/${params.id}`)
            }
        ]
    },
    {
        path:'news',
        element: <NewsLayout></NewsLayout>,
        children:[{
            path: ':id',
            element:<PrivateRoute><News></News></PrivateRoute>,
            loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`)
        }]
    }
])

export default router;