import React from 'react';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <section className='w-full h-32 flex items-center bg-header-bg'>
            <div className='w-fit mx-auto' >
                <img src={logo} alt="" />
            </div>
            
        </section>
    );
};

export default Header;