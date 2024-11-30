import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const {setUser, singInUser } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate();
   
    const handleSignIn = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);

        singInUser(email, password)
            .then(result => {
                console.log(result.user);
                const lastSignInTime = result?.user?.metadata?.lastSignInTime;
                const loginInfo = { email, lastSignInTime };
                // fetch(`http://localhost:5000/user/${email}`) if you do not want  to expose email address 
                fetch(`http://localhost:5000/user/`, {
                    method: 'PATCH',
                    headers: {
                        'content-Type': 'application/json'
                    },
                    body: JSON.stringify(loginInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })
                    setUser(result.user);
                    navigate(location?.state? location.state:"/");


            })
            .catch(err => {
                console.log(err);
            })



    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sing In Now</h1>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sing In</button>
                            </div>
                        </form>
                        <p className='text-sm p-4'>Don't have an account please <Link to='/signUp' className='text-blue-600'>Sing up</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;