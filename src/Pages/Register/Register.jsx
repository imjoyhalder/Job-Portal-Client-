import Lottie from 'lottie-react';
import React from 'react';
import registerLottieData from '../../assets/Lottie/register.json'

const Register = () => {

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)

        // password validation; 
        function isValidPassword(password) {
            const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
            return regex.test(password);
        }

        console.log(isValidPassword("Abc123")); // true
        console.log(isValidPassword("abc123")); // false (no uppercase)
        console.log(isValidPassword("ABCDEF")); // false (no number)
        console.log(isValidPassword("Ab1"));    // false (less than 6 characters)

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
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;