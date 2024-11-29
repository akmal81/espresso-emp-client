import React, { useContext } from 'react';
import eye from '../assets/eye.png'
import edit from '../assets/edit.png'
import del from '../assets/delete.png'
import { Link } from 'react-router-dom';
import { CoffeesContext } from '../Provider/CoffesPorvider';

const CoffeeCard = ({ coffee }) => {
    const {coffees, setCoffees } = useContext(CoffeesContext)

    const { _id, name, chef, price, photo } = coffee;

    const handleDeleteCoffee = (id) => {
        console.log(id);

        fetch(`http://localhost:5000/addCoffee/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = coffees.filter(coffee => coffee._id !== id);
                setCoffees(remaining)
            })
    }

    return (
        <div className='flex items-center justify-between p-10 bg-light'>
            <div>
                <img className='w-32' src={photo} alt="" />
            </div>
            <div className='space-y-2'>
                <h4 className='text-xl font-bold'>Name: <span className='font-normal ml-2' >{name}</span> </h4>
                <h4 className='text-xl font-bold'>Chef: <span className='font-normal ml-2' >{chef}</span> </h4>
                <h4 className='text-xl font-bold'>Name: <span className='font-normal ml-2' >{price}</span>  taka</h4>

            </div>
            <div className='flex flex-col w-fit gap-4'>
                <Link to={`/coffeeDetails/${_id}`}><button className='bg-dark3 p-4'><img src={eye} alt="Update Coffee" /></button></Link>
               <Link to={`/update/${_id}`}> <button className='bg-secondary p-4'> <img src={edit} alt="Coffee Details" /></button></Link>
                <button onClick={() => { handleDeleteCoffee(_id) }} className='bg-red1 p-4'><img src={del} alt="Delete Coffee" /></button>
            </div>
        </div>
    );
};

export default CoffeeCard;