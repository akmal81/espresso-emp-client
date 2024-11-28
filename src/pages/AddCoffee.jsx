import React from 'react';
import { Link } from 'react-router-dom';

const AddCoffee = () => {

    const handleAddCoffee = (e) => { 
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const coffee = {name, chef, supplier, taste, category, details, photo}
        console.log(coffee);
    }

    return (
        <section className='mt-12'>
            <Link to='/'> <button className='font-rancho text-dark3 text-3xl drop-shadow-xl'> Back to home</button></Link>

            <div className='w-full bg-light py-16 mt-12'>
                <h2 className='font-rancho text-5xl drop-shadow-xl text-center'>Add New Coffee</h2>
                <p className='text-center w-8/12 mx-auto mt-8 text-dark4 leading-loose'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

                <form onSubmit={handleAddCoffee} className='grid grid-cols-1 lg:grid-cols-2 gap-4 px-6 lg:px-32 py-8'>
                    {/* <div className='grid grid-cols-1  lg:grid-cols-2 gap-6'> */}

                        <div className='flex flex-col'>
                            <label className='text-lg font-bold text-dark'>Name</label>
                            <input type="text" name='name' className='text-lg px-4 py-3 mt-2' placeholder='name' />
                        </div>

                        <div className='flex flex-col'>
                            <label className='text-lg font-bold text-dark'>Chef</label>
                            <input type="text" name='chef' className='text-lg px-4 py-3 mt-2' placeholder='Chef' />
                        </div>

                        <div className='flex flex-col'>
                            <label className='text-lg font-bold text-dark'>Supplier</label>
                            <input type="text" name='supplier' className='text-lg px-4 py-3 mt-2' placeholder='Supplier' />
                        </div>

                        <div className='flex flex-col'>
                            <label className='text-lg font-bold text-dark'>Taste</label>
                            <input type="text" name='taste' className='text-lg px-4 py-3 mt-2' placeholder='Taste' />
                        </div>

                        <div className='flex flex-col'>
                            <label className='text-lg font-bold text-dark'>Category</label>
                            <input type="text" name='category' className='text-lg px-4 py-3 mt-2' placeholder='Category' />
                        </div>

                        <div className='flex flex-col'>
                            <label className='text-lg font-bold text-dark'>Details</label>
                            <input type="text" name='details' className='text-lg px-4 py-3 mt-2' placeholder='Details' />
                        </div>

                        <div className='flex flex-col lg:col-span-2'>
                            <label className='text-lg font-bold text-dark'>Photo</label>
                            <input type="text" name='photo' className='text-lg px-4 py-3 mt-2' placeholder='Photo Url' />
                        </div>

                        <div className='flex flex-col lg:col-span-2'>

                            <input type="submit" className='w-full bg-secondary text-lg font-bold border border-primary px-4 py-3 mt-2' value='Add coffee' />
                        </div>

                    {/* </div> */}
                </form>

            </div>

        </section>
    ); dar
};

export default AddCoffee;