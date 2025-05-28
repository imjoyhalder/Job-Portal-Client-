import React, { useContext } from 'react';
import AuthContext from '../../Context/AuthContext/AuthContext';
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const navigate = useNavigate()
    const { loginWithGoogle } = useContext(AuthContext)
    const handleGoogleLogin = () =>{
        loginWithGoogle()
        .then(res=>{
            console.log(res)
            navigate('/')
        })
        .then(error=>{
            console.log(error)
        })
    }
    return (
        <div>
            <button onClick={handleGoogleLogin} className='w-10 md:w-12'>
                <img src="https://img.icons8.com/?size=80&id=JvOSspDsPpwP&format=png" alt="" />
            </button>
        </div>
    );
};

export default SocialLogin;