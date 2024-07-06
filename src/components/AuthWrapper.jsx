import { reducerCases } from '@/context/Constants';
import { useStateProvider } from '@/context/StateContext';
import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { MdFacebook } from "react-icons/md";

function AuthWrapper({ type }) {
    const [{ showLoginModal, showSignupModal }, dispatch] = useStateProvider();
    const [values, setValues] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    return (
        <div className="fixed top-0 z-[100]">
            <div
                className="h-[100vh] w-[100vw] backdrop-filter backdrop-blur-md fixed top-0"
                id="biur-div"
            ></div>
            <div className="h-[100vh] w-[100vw] flex flex-col justify-center items-center">
                <div
                    className="fixed z-[101] h-max w-max bg-white flex flex-col justify-center items-center"
                    id="auth-model"
                >
                    <div className="flex flex-col items-center justify-center p-8 gap-7">
                        <h3 className='text-2xl font-semibold to-slate-700'>
                            {type === "login" ? "Login to Fiverr" : "Signup to Fiverr"}
                        </h3>
                        <div className="flex flex-col gap-5">
                            <button className="relative flex items-center justify-center p-3 font-semibold text-white bg-blue-500 w-80">
                                <MdFacebook className="absolute text-2xl left-4" />
                                Continue with Facebook
                            </button>
                            <button className="relative flex items-center justify-center p-3 font-medium border border-slate-300 w-80">
                                <FcGoogle className="absolute text-2xl left-4" />
                                Continue with Google
                            </button>
                        </div>
                        <div className="relative w-full text-center">
                            <span className="absolute left-0 top-1/2 w-full h-[0.5px] bg-gray-300"></span>
                            <span className="relative z-10 px-2 bg-white">OR</span>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <input
                                type='text'
                                name='email'
                                placeholder='Email'
                                className='p-3 border border-slate-300 w-80'
                                value={values.email}
                                onChange={handleChange}
                            />
                            <input
                                type='password'
                                name='password'
                                placeholder='Password'
                                className='p-3 border border-slate-300 w-80'
                                value={values.password}
                                onChange={handleChange}
                            />
                            <button className='bg-[#1DBF73] text-white px-12 text-lg font-semibold rounded-r-md p-3 w-80'>
                                Continue
                            </button>
                        </div>
                    </div>
                    <div className='flex items-start justify-center w-full py-5 border-t border-slate-400'>
                        <span className='text-sm text-slate-700'>
                            {type === "login" ? (
                            <>
                                Not a member yet? {" "}
                                <span className='text-[#1DBF73] cursor-pointer'
                                onClick={()=> {
                                    dispatch({
                                        type:reducerCases.TOGGLE_LOGIN_MODAL,
                                        showLoginModal:false
                                    })
                                    dispatch({
                                        type:reducerCases.TOGGLE_SIGNUP_MODAL,
                                        showSignupModal:true
                                    })
                                }}>
                                    Join Now
                                </span> 
                            </>
                                ):(
                                <>
                                Already a member yet? {" "}
                                <span className='text-[#1DBF73] cursor-pointer'
                                onClick={()=>{
                                    dispatch({
                                        type:reducerCases.TOGGLE_SIGNUP_MODAL,
                                        showSignupModal:false
                                    })
                                    dispatch({
                                        type:reducerCases.TOGGLE_LOGIN_MODAL,
                                        showLoginModal:true
                                    })
                                }}>
                                    Login Now
                                </span>
                                </>
                            )}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthWrapper;
