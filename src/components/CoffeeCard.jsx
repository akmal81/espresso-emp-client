import React from 'react';
import eye from '../assets/eye.png'
import edit from '../assets/edit.png'
import del from '../assets/delete.png'

const CoffeeCard = ({ coffee }) => {
    const {_id, name, chef, price, photo} = coffee;
    return (
        <div className='flex items-center justify-between p-10 bg-light'>
            <div>
                <img className='w-32' src={photo} alt="" />
            </div>
            <div>
                <h4>Name: {name}</h4>
                <h4>Chef: {chef}</h4>
                <h4>Name: {price} taka</h4>
                
            </div>
            <div className='flex flex-col w-fit gap-4'>
                <button className='bg-secondary p-4'> <img src={eye} alt="" /></button>
                <button className='bg-dark3 p-4'><img src={edit} alt="" /></button>
                <button className='bg-red1 p-4'><img src={del} alt="" /></button>
            </div>
        </div>
    );
};

export default CoffeeCard;