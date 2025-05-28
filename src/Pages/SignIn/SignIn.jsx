import React, { useContext } from 'react';
import Lottie from 'lottie-react';
import LoginLottieData from '../../assets/Lottie/login.json'
import AuthContext from '../../Context/AuthContext/AuthContext';
import { Link, useNavigate } from 'react-router-dom';


const SignIn = () => {

    const {userLogin} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSignIn = e =>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        userLogin(email,password)
            .then(result =>{
                console.log("sign in", result.user)
                navigate('/')
            })
            .catch(error=>{
                console.log(error)
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-[300px] md:w-[400px]">
                    <Lottie animationData={LoginLottieData}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="ml-8 mt-6 text-5xl font-bold">Login Now!</h1>
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div>
                            <Link className='text-gray-400 hover:underline hover:text-blue-600' to='/register'>Don't have an account</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;