import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Header from '../components/Header';

const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const { _id, name, photo, chef, supplier, taste, details, category, price } = coffee;

    const handleUpdateCoffee = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const updatedCoffee = { name, chef, supplier, taste, category, details, price, photo };
       

        fetch(`http://localhost:5000/addCoffee/${_id}`, {
            method: 'PUT',
            headers: { 'content-Type': 'application/json' },
            body:JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <section className=''>
            <Header></Header>
            <div className='w-11/12 lg:w-8/12  mx-auto mt-10'>
                <Link to='/'> <button className='font-rancho text-dark3 text-3xl drop-shadow-xl'> Back to home</button></Link>

                <div className='w-full mx-auto bg-light py-16 mt-12'>
                    <h2 className='font-rancho text-5xl drop-shadow-xl text-center'>Update Coffee</h2>
                    <p className='text-center w-8/12 mx-auto mt-8 text-dark4 leading-loose'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

                    <form onSubmit={handleUpdateCoffee} className='grid grid-cols-1 lg:grid-cols-2 gap-4 px-6 lg:px-32 py-8'>
                        {/* <div className='grid grid-cols-1  lg:grid-cols-2 gap-6'> */}

                        <div className='flex flex-col'>
                            <label className='text-lg font-bold text-dark'>Name</label>
                            <input type="text" name='name' defaultValue={name} className='text-lg px-4 py-3 mt-2' placeholder='name' />
                        </div>

                        <div className='flex flex-col'>
                            <label className='text-lg font-bold text-dark'>Chef</label>
                            <input type="text" name='chef' defaultValue={chef} className='text-lg px-4 py-3 mt-2' placeholder='Chef' />
                        </div>

                        <div className='flex flex-col'>
                            <label className='text-lg font-bold text-dark'>Supplier</label>
                            <input type="text" name='supplier' defaultValue={supplier} className='text-lg px-4 py-3 mt-2' placeholder='Supplier' />
                        </div>

                        <div className='flex flex-col'>
                            <label className='text-lg font-bold text-dark'>Taste</label>
                            <input type="text" name='taste' defaultValue={taste} className='text-lg px-4 py-3 mt-2' placeholder='Taste' />
                        </div>

                        <div className='flex flex-col'>
                            <label className='text-lg font-bold text-dark'>Category</label>
                            <input type="text" name='category' defaultValue={category} className='text-lg px-4 py-3 mt-2' placeholder='Category' />
                        </div>

                        <div className='flex flex-col'>
                            <label className='text-lg font-bold text-dark'>Details</label>
                            <input type="text" name='details' defaultValue={details} className='text-lg px-4 py-3 mt-2' placeholder='Details' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-lg font-bold text-dark'>Price</label>
                            <input type="text" name='price' defaultValue={price} className='text-lg px-4 py-3 mt-2' placeholder='Details' />
                        </div>

                        <div className='flex flex-col'>
                            <label className='text-lg font-bold text-dark'>Photo</label>
                            <input type="text" name='photo' defaultValue={photo} className='text-lg px-4 py-3 mt-2' placeholder='Photo Url' />
                        </div>

                        <div className='flex flex-col lg:col-span-2'>

                            <input type="submit" className='w-full bg-secondary text-lg font-bold border border-primary px-4 py-3 mt-2' value='Update coffee' />
                        </div>

                        {/* </div> */}
                    </form>

                </div>
            </div>

        </section>
    );
};

export default UpdateCoffee;