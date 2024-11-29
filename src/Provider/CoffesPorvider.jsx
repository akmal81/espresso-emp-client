import { createContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export const CoffeesContext = createContext(null);


const CoffesPorvider = ({ children }) => {
    const [coffees, setCoffees] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/addCoffee')
            .then(res => res.json())
            .then(data => {
                setCoffees(data)
            })
    }, [coffees])

    //    const states={
    //         coffees,
    //         setCoffees
    //     }

    return (
        <CoffeesContext.Provider value={{ coffees, setCoffees }}>
            {children}
        </CoffeesContext.Provider>
    );
};

export default CoffesPorvider;