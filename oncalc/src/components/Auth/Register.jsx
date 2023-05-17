import React from 'react';
import LoginImage from '../../img/login_img.svg';


function Register () {

    return (
        <div className="auth-wrapper  bg-white min-h-[42rem] p-8 gap-8 rounded-2xl md:flex ">
            <div className="auth-image-section w-1/2:md w-full">
                <h1 className="text-3xl">OnCalc</h1>
                <div className="auth-image-container flex justify-center items-center h-full">
                    <img className="h-[20rem] object-contain mb-8" src={LoginImage} alt=""/>
                </div>
            </div>
            <div className="auth-section w-1/2:md w-full">
                <div className="auth-header">
                    <h1 className="text-2xl">Register</h1>
                    <p>Thank you for choosing to register with us! Please take a moment to provide the requested information in the form below. </p>
                </div>
                <form action="" className="flex flex-col justify-center">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="user">Username</label>
                        <input placeholder="Please enter a username" type="text" id="user" name="user"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="pass">Password</label>
                        <input placeholder="Please enter a password" type="text" id="pass" name="pass"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="pass_conf">Confirm Password</label>
                        <input placeholder="Please confirm your password" type="text" id="pass_conf" name="pass_conf"/>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default Register;
