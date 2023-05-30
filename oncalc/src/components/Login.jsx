import React from 'react'
import {MdOutlineScience} from "react-icons/md";
import LoginImage from "../img/login_img.svg";


function Login() {

    return (
        <div className="min-h-screen bg-background flex justify-center items-center flex-row p-8">
            <div className="auth-wrapper w-[70rem] bg-white min-h-[42rem] gap-8 md:flex rounded-2xl overflow-hidden">
            <div className="auth-image-section w-1/2:md w-full bg-red-400 p-8 bg-accent-transparent">
                <div className="flex gap-2 items-center">
                    <MdOutlineScience className="text-4xl text-white"/>
                    <h1 className="text-3xl text-white">OnCalc</h1>
                </div>
                <div className="auth-image-container flex justify-center items-center h-full ">
                    <img className="h-[16rem] object-contain mb-20 p-2" src={LoginImage} alt="Register"/>
                </div>
            </div>
            <div className="auth-section w-1/2:md w-full p-8 rounded-r-2xl">
                <div className="auth-header flex flex-col gap-2">
                    <h1 className="text-3xl text-text-color">Login</h1>
                    <h3 className="text-secondary-text-color ">Access your account</h3>
                    <p className="text-secondary-text-color" >
                        Complete the login fields and start using OnCalc.
                    </p>
                </div>
                <div className="form-box flex items-center h-[90%]">
                    <form action="" className="flex  flex-col justify-center gap-4 w-full">
                        <div className="flex flex-col gap-1 invisible">
                            <label htmlFor="pass_conf" className="text-text-color">Confirm Password</label>
                            <input disabled className="py-2 border-b-[1px] border-border-color outline-none" placeholder="Please confirm your password" type="text" id="pass_conf" name="pass_conf"/>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="user" className="text-text-color">Username</label>
                            <input className="py-2 border-b-[1px] border-border-color outline-none" placeholder="Please enter a username" type="text" id="user" name="user"/>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="pass" className="text-text-color">Password</label>
                            <input className="py-2 border-b-[1px] border-border-color outline-none" placeholder="Please enter a password" type="text" id="pass" name="pass"/>
                        </div>
                        <div className="flex justify-between items-center mt-8 flex-wrap gap-4">
                            <a href="/Register" className="underline hover:no-underline">Dont have a profile?</a>
                            <button className="transition ease-in-out rounded-xl px-16 py-2 bg-accent text-white hover:bg-hover-accent hover:duration-200">Login</button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </div>

    )

}

export default Login;
