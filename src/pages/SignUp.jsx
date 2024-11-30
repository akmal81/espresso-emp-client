import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const SignUp = () => {
 const {createUser} = useContext(AuthContext);
    const handleSignUp =(e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        
        createUser(email, password)
        .then(result => {
            console.log('user created at firebase', result.user);
            const createdAt = result?.user?.metadata?.creationTime;
            const NewUser ={name, email, createdAt}

            // create user in database
            fetch('http://localhost:5000/user',{
                method:'POST',
                headers: {'content-Type':'application/json'},
                body:JSON.stringify(NewUser)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log('user created to db',data);
            })
        })
        .catch(err => {
            console.log('error:',err);
        })


    }
    return (
        <div>
             <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sing Up</h1>
           
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignUp}  className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
              </div>
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
                <button className="btn btn-primary">Sing Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
        </div>
    );
};

export default SignUp;