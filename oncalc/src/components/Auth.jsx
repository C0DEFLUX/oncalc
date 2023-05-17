import React from "react";
import Login from './Auth/Login';
import Register from "./Auth/Register";


function Auth () {

    return (
        <div className="min-h-screen bg-[#fdf3e2] flex justify-center items-center flex-row p-8">
            {/*<Login />*/}
            <Register />
        </div>
    )
}

export default Auth;