import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";
import CoffeeDetails from "../pages/CoffeeDetails";
import Root from "../layouts/Root";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Root></Root>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>,
                    loader: () => fetch('http://localhost:5000/addCoffee')
                },
               
            ]

        },
       
        {
            path: '/add',
            element: <AddCoffee></AddCoffee>
        },
        {
            path: '/update',
            element: <UpdateCoffee></UpdateCoffee>
        },
        {
            path: '/coffeeDetails/:id',
            element:<CoffeeDetails></CoffeeDetails>,
            loader:({params})=>fetch(`http://localhost:5000/addCoffee/${params.id}`)
        },

        {
            path: '/details',
            element: <CoffeeDetails></CoffeeDetails>

        }
    ]
)

export default router;