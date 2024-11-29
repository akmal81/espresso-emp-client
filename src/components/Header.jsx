import React from 'react';
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <section className='w-full flex flex-col items-center bg-header-bg pt-8' >
                <div className='w-fit mx-auto' >
                    <img src={logo} alt="" />
                </div>
                <nav className='py-8'>
                    <NavLink to='/' className='text-white mr-4 text-base'>Home</NavLink>
                    <NavLink to='/add' className='text-white mr-4 text-base'>add coffee</NavLink>
                </nav>
            </section>
            {/* <section className='w-full py-10 lg:h-[800px] bg-banner-bg bg-cover bg-no-repeat bg-bottom '>
                <div className='w-8/12 h-full mx-auto flex justify-end items-center'>
                    <div className='w-full text-center lg:w-1/2 space-y-4 lg:space-y-10'>
                        <h2 className='text-3xl lg:text-6xl font-rancho text-white'>Would you like a Cup of Delicious Coffee?</h2>
                        <p className='text-white text-md lg:text-xl'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                        <button className='bg-secondary font-rancho text-2xl px-4 py-2 border border-secondary'>Learn more</button>
                    </div>
                </div>
            </section> */}
        </>
    );
};

export default Header;