import React, {useEffect, useState} from 'react'
import {MdOutlineScience} from "react-icons/md";
import LoginImage from "../img/login_img.svg";
import {useNavigate} from "react-router-dom";


function Login() {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()


    useEffect(()=> {
        if(localStorage.getItem('user-info')){
            navigate('/calc')
        }
    })

    async function login() {

        const nameErr = document.getElementById('nameErr')
        const passErr = document.getElementById('passErr')

        let data = {
            name: name,
            password: password,
            nameErr: '',
            passErr: '',
        }

        if(name.length === 0) {
            data.nameErr = "Field can't be empty!"
            nameErr.innerText = nameErr.innerText || data.nameErr
        }else {
            data.nameErr = ''
            nameErr.innerText = ''
        }

        if(password.length === 0) {
            data.passErr = "Field can't be empty!"
            passErr.innerText = passErr.innerText || data.passErr
        }else {
            data.passErr = ''
            passErr.innerText = ''
        }

        if(data.nameErr.length === 0 && data.passErr.length === 0 ) {

            let cleanData = {name, password}
            let result = await fetch('http://localhost/api/login', {
                method: 'POST',
                body: JSON.stringify(cleanData),
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'application/json'
                }
            });
            result = await result.json();

            if(result.message === 'Check your password and username and try again!') {
                data.passErr = result.message
                passErr.innerText = passErr.innerText || data.passErr
            }else {
                data.passErr = ''
                passErr.innerText = ''
                localStorage.setItem('user-info', JSON.stringify(result))
                navigate('/calc')
            }

        }




    }




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
                    <div action="" className="flex  flex-col justify-center gap-4 w-full">
                        <div className="flex flex-col gap-1 invisible">
                            <label htmlFor="pass_conf" className="text-text-color">Confirm Password</label>
                            <input disabled className="py-2 border-b-[1px] border-border-color outline-none" placeholder="Please confirm your password" type="text" id="pass_conf" name="pass_conf"/>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="user" className="text-text-color">Username</label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="py-2 border-b-[1px] border-border-color outline-none" placeholder="Please enter a username" type="text" id="name" name="name"
                            />
                            <span className="text-error-red" id="nameErr"></span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="pass" className="text-text-color">Password</label>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="py-2 border-b-[1px] border-border-color outline-none" placeholder="Please enter a password" type="password" id="pass" name="pass"
                            />
                            <span className="text-error-red" id="passErr"></span>
                        </div>
                        <div className="flex justify-between items-center mt-8 flex-wrap gap-4">
                            <a href="/register" className="underline hover:no-underline">Dont have a profile?</a>
                            <button onClick={login} className="transition ease-in-out rounded-xl px-16 py-2 bg-accent text-white hover:bg-hover-accent hover:duration-200">Login</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

    )

}

export default Login;
