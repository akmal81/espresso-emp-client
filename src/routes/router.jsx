import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";
import CoffeeDetails from "../pages/CoffeeDetails";
import Root from "../layouts/Root";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import AllUsers from "../pages/AllUsers";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Root></Root>,
            children: [
                {
                    path: '/',
                    element:<Home></Home>,
                   
                },
               
            ]

        },
       
        {
            path: '/add',
            element: <AddCoffee></AddCoffee>
        },
        {
            path: '/update/:id',
            element: <UpdateCoffee></UpdateCoffee>,
            loader:({params})=>fetch(`http://localhost:5000/addCoffee/${params.id}`)
        },
        {
            path: '/coffeeDetails/:id',
            element:<CoffeeDetails></CoffeeDetails>,
            loader:({params})=>fetch(`http://localhost:5000/addCoffee/${params.id}`)
        },

        {
            path: '/details',
            element: <CoffeeDetails></CoffeeDetails>

        },
        {
            path:'/signIn',
            element:<SignIn></SignIn>
        },
        {
            path:'/signUp',
            element:<SignUp></SignUp>
        },
        {
            path:'/allUser',
            element:<AllUsers></AllUsers>,
            loader:()=>fetch('http://localhost:5000/user')
        }
    ]
)

export default router;