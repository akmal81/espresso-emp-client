import React from 'react';
import Header from '../components/Header';
import { Link, useLoaderData } from 'react-router-dom';

const CoffeeDetails = () => {
    const coffee = useLoaderData();
    const { _id, name, photo, chef, supplier, taste, details, category } = coffee;

    return (
        <section>
            <Header></Header>
            <div className='w-8/12 mx-auto mt-10'>
                <Link to='/'> <button className='font-rancho text-dark3 text-3xl drop-shadow-xl'> Back to home</button></Link>
                <div className=' bg-light py-20 mt-8'>
                   <div className='flex flex-col lg:flex-row gap-10 items-center lg:text-left w-10/12 mx-auto justify-between text-center'>
                   <div>
                        <img className='mx-auto' src={photo} alt="" />
                    </div>
                    <div className='space-y-6'>
                        <h3 className='font-rancho text-3xl'>NiceTies</h3>
                        <div className='space-y-2'>
                            <h4 className='text-xl font-bold'>Name: <span className='font-normal ml-2' >{name}</span> </h4>
                            <h4 className='text-xl font-bold'>Chef: <span className='font-normal ml-2' >{chef}</span> </h4>
                            <h4 className='text-xl font-bold'>Supplier: <span className='font-normal ml-2' >{supplier}</span> </h4>
                            <h4 className='text-xl font-bold'>Taste: <span className='font-normal ml-2' >{taste}</span> </h4>
                            <h4 className='text-xl font-bold'>Category: <span className='font-normal ml-2' >{category}</span> </h4>
                            <h4 className='text-xl font-bold'>Details: <span className='font-normal ml-2' >{details}</span> </h4>
                        </div>
                    </div>
                   </div>
                </div>
            </div>

        </section>
    );
};

export default CoffeeDetails;