import link from 'daisyui/components/link';
import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext/AuthContext';
import jobIcon from '../../assets/Joblogo/icons8-job-application-64.png'

const Navbar = () => {

    const { user, userLogout } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogOut= ()=>{
        userLogout()
        .then(res=>{
            console.log(res)
            navigate('/')
        })
        .catch(error=>{
            console.log(error)
        })
    }

    const links = <>
        <li><NavLink>Home</NavLink></li>
        <li><NavLink>Blog</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                    <img className='w-12' src={jobIcon} alt="" />
                    <h3 className="text-xl md:text-3xl"> Job Portal</h3>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end gap-4">
                {
                    user ? <>
                        <button onClick={handleLogOut} className='btn'>Sign Out</button>
                    </> : <>
                        <Link to='/register' className="btn">Register</Link>
                        <Link to='/login' className="btn">Sign Up</Link>
                    </>
                }

            </div>
        </div>
    );
};

export default Navbar;