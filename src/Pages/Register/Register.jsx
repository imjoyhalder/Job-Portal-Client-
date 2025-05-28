import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import registerLottieData from '../../assets/Lottie/register.json'
import AuthContext from '../../Context/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import SocialLogin from '../Shared/SocialLogin';


const Register = () => {

    const { createUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value


        // password validation; 
        function isValidPassword(password) {
            const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
            return regex.test(password);
        }

        if (!isValidPassword(password)) {
            Swal.fire({
                title: "Error!",
                text: "Password minimum 6 characters and one digit and one Uppercase letter ",
                icon: "error"
            });
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-[380px] md:w-[450px]">
                    <Lottie animationData={registerLottieData}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="ml-8 mt-6 text-5xl font-bold">Register now!</h1>
                    <form onSubmit={handleRegister} className="card-body">
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
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <div>
                            <Link to='/login' className='text-gray-400 hover:underline hover:text-blue-600'>Already have an account</Link>
                        </div>
                        <div className="divider divider-primary">OR</div>
                        <div className='flex items-center justify-center'>
                            {
                                <SocialLogin></SocialLogin>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;