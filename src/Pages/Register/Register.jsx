import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import Swal from 'sweetalert2';

import registerLottieData from '../../assets/Lottie/register.json';
import AuthContext from '../../Context/AuthContext/AuthContext';
import SocialLogin from '../Shared/SocialLogin';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const isValidPassword = (password) => {
            const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
            return regex.test(password);
        };

        if (!isValidPassword(password)) {
            Swal.fire({
                title: "Error!",
                text: "Password must be at least 6 characters long and contain at least one uppercase letter and one number.",
                icon: "error"
            });
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log("User created:", result.user);
                Swal.fire({
                    title: "Success!",
                    text: "Account created successfully!",
                    icon: "success"
                });
                form.reset();
                // Optional: Redirect to login page or home
                navigate('/');
            })
            .catch(error => {
                console.error("Error creating user:", error);
                Swal.fire({
                    title: "Registration Failed!",
                    text: error.message || "Unable to create account.",
                    icon: "error"
                });
            });
    };

    return (
        <div className="min-h-screen hero bg-base-200">
            <div className="flex-col hero-content lg:flex-row-reverse">
                <div className="text-center lg:text-left w-[380px] md:w-[450px]">
                    <Lottie animationData={registerLottieData} />
                </div>

                <div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
                    <h1 className="mt-6 ml-8 text-5xl font-bold">Register now!</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                className="input input-bordered"
                                required
                            />
                            <label className="label">
                                <Link to="/forgot-password" className="label-text-alt link link-hover">
                                    Forgot password?
                                </Link>
                            </label>
                        </div>

                        <div className="mt-6 form-control">
                            <button className="btn btn-primary">Register</button>
                        </div>

                        <div>
                            <Link to="/login" className="text-gray-400 hover:underline hover:text-blue-600">
                                Already have an account?
                            </Link>
                        </div>

                        <div className="divider divider-primary">OR</div>

                        <div className="flex items-center justify-center">
                            <SocialLogin />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
