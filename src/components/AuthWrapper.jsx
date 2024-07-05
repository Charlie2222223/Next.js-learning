import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { MdFacebook } from "react-icons/md";

function AuthWrapper() {
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
                        <h3 className='text-2xl font-semibold to-slate-700'>Login to Fiverr</h3>
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
                            <span className="before:content-[''] before:w-80 before:h-[0.5px] before:absolute before:top-[50%] before:left-0 before:bg-gray-500"></span>
                            <span className="relative z-10 px-2 bg-white">OR</span>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <input
                                type='text'
                                name='email'
                                placeholder='Email'
                                className='p-3 border border-slate-300 w-80'
                            />
                            <input
                                type='password'
                                name='password'
                                placeholder='Password'
                                className='p-3 border border-slate-300 w-80'
                            />
                            <button className='bg-[#1DBF73] text-white px-12 text-lg font-semibold rounded-r-md p-3 w-80'>
                                Continue
                            </button>
                        </div>
                    </div>
                    <div className='flex items-start justify-center w-full py-5 border border-r-slate-400'>
                        <span className='text-sm text-slate-700'>
                            Not a member yes? {" "}
                            <span className='text-[#1DBF73] cursor-pointer'>Join How</span>    
                        </span>       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthWrapper;
