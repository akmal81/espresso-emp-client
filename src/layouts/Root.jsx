import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import MainBanner from '../components/MainBanner';


const Root = () => {
    return (
        <>
            <header>
                <Header></Header>
                <MainBanner></MainBanner>
            </header>
            <main className='w-8/12 mx-auto'>
               <Outlet></Outlet>
            </main>
            <footer>
                footer
            </footer>
        </>
    );
};

export default Root;