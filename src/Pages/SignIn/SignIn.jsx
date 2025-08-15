import React, { useContext } from 'react';
import Lottie from 'lottie-react';
import LoginLottieData from '../../assets/Lottie/login.json';
import AuthContext from '../../Context/AuthContext/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../Shared/SocialLogin';
import axios from 'axios';
import Swal from 'sweetalert2';

const SignIn = () => {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const redirect_path = location?.state || '/';

    const hello  = 'hello'
    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then(result => {
                const user = { email: result.user.email };

                // Get JWT from backend
                axios.post("http://localhost:3000/jwt", user, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log("JWT response:", res.data);
                    });

                Swal.fire({
                    title: "Login Successful!",
                    text: `Welcome back, ${email}`,
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false
                });
                console.log('run it successfully')
                form.reset();
                navigate(`${redirect_path}`);
            })
            .catch(error => {
                console.error("Login failed:", error.message);
                Swal.fire({
                    title: "Login Failed!",
                    text: error.message || "Something went wrong while logging in.",
                    icon: "error"
                });
            });
    };

    return (
        <div className="min-h-screen hero bg-base-200">
            <div className="flex-col hero-content lg:flex-row-reverse">
                <div className="text-center lg:text-left w-[300px] md:w-[400px]">
                    <Lottie animationData={LoginLottieData} />
                </div>

                <div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
                    <h1 className="mt-6 ml-8 text-5xl font-bold">Login Now!</h1>
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
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
                                placeholder="password"
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
                            <button className="btn btn-primary">Login</button>
                        </div>

                        <div>
                            <Link className="text-gray-400 hover:underline hover:text-blue-600" to="/register">
                                Don't have an account?
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

export default SignIn;
