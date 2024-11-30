import React, { useContext } from 'react';
import logo from '../assets/logo.png'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    const handleLogOUt=()=>{
        signOutUser()
        .then(()=>{
            alert('singout successfull');
            navigate(location?.state? location.state:"/")

        })
        .catch(err=>{
            console.log(err);
        })
    }

    return (
        <>
            <section className='w-full flex flex-col items-center bg-header-bg pt-8' >
                <div className='w-fit mx-auto' >
                    <img src={logo} alt="" />
                </div>
                {
                    user?<p className='text-white'>{user?.email}</p> :''
                }
                
                <div className='flex items-center justify-between'>
                    <nav className='py-8'>
                        <NavLink to='/' className='text-white mr-4 text-base'>Home</NavLink>
                        <NavLink to='/add' className='text-white mr-4 text-base'>add coffee</NavLink>
                    </nav>
                    <nav>
                    {
                        user? <button onClick={handleLogOUt}  className='text-white mr-4 text-base'>Sing out</button>:
                        <NavLink to='/signIn' className='text-white mr-4 text-base'>sign In</NavLink>
                    }
                        
                        <NavLink to='/allUser' className='text-white mr-4 text-base'>Users</NavLink>
                    </nav>
                </div>
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