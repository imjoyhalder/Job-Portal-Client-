import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { LuLogOut } from "react-icons/lu";
import { FaHome, FaBriefcase, FaUserCircle } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import AuthContext from '../../Context/AuthContext/AuthContext';
import jobIcon from '../../assets/Joblogo/icons8-job-application-64.png';
import { IoAddCircleSharp } from "react-icons/io5";

const Navbar = () => {
    const { user, userLogout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        userLogout()
            .then(() => {
                navigate('/');
            })
            .catch(error => console.log(error));
    };

    const links = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `flex items-center gap-2 relative group 
          ${isActive ? 'text-blue-500 font-bold' : 'text-gray-200'}
          transition-colors duration-500 ease-in-out`
                    }
                >
                    <FaHome /> Home
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-500 ease-in-out group-hover:w-full"></span>
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        `flex items-center gap-2 relative group 
          ${isActive ? 'text-blue-500 font-bold' : 'text-gray-200'}
          transition-colors duration-500 ease-in-out`
                    }
                >
                    <FaUserCircle /> About Us
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-500 ease-in-out group-hover:w-full"></span>
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        `flex items-center gap-2 relative group 
          ${isActive ? 'text-blue-500 font-bold' : 'text-gray-200'}
          transition-colors duration-500 ease-in-out`
                    }
                >
                    <MdContactMail /> Contact
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-500 ease-in-out group-hover:w-full"></span>
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/addJob"
                    className={({ isActive }) =>
                        `flex items-center gap-2 relative group 
          ${isActive ? 'text-blue-500 font-bold' : 'text-gray-200'}
          transition-colors duration-500 ease-in-out`
                    }
                >
                    <IoAddCircleSharp /> Add Job
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-500 ease-in-out group-hover:w-full"></span>
                </NavLink>
            </li>

            {user && (
                <li>
                    <NavLink
                        to="/myApplications"
                        className={({ isActive }) =>
                            `flex items-center gap-2 relative group 
            ${isActive ? 'text-blue-500 font-bold' : 'text-gray-200'}
            transition-colors duration-500 ease-in-out`
                        }
                    >
                        <FaBriefcase /> My Applications
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-500 ease-in-out group-hover:w-full"></span>
                    </NavLink>
                </li>
            )}
            {user && (
                <li>
                    <NavLink
                        to="/myPostedJobs"
                        className={({ isActive }) =>
                            `flex items-center gap-2 relative group 
            ${isActive ? 'text-blue-500 font-bold' : 'text-gray-200'}
            transition-colors duration-500 ease-in-out`
                        }
                    >
                        <FaBriefcase /> My Posted Jobs
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-500 ease-in-out group-hover:w-full"></span>
                    </NavLink>
                </li>
            )}
        </>
    );




    return (
        <div className="px-5 shadow-md navbar bg-base-100 md:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <button tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to="/" className="flex items-center gap-2 text-xl btn btn-ghost">
                    <img className="w-10" src={jobIcon} alt="Job Portal Logo" />
                    <span className="text-lg font-bold md:text-2xl">Job Portal</span>
                </Link>
            </div>

            <div className="hidden navbar-center lg:flex">
                <ul className="gap-2 px-1 menu menu-horizontal">{links}</ul>
            </div>

            <div className="gap-3 navbar-end">
                {user ? (
                    <button onClick={handleLogOut} className="flex items-center gap-2 btn btn-outline btn-error">
                        Sign Out <LuLogOut />
                    </button>
                ) : (
                    <>
                        <Link to="/register" className="btn btn-outline">Register</Link>
                        <Link to="/login" className="btn btn-primary">Sign In</Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar; // 