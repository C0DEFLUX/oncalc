import React, {useState, useEffect} from 'react';
import RegisterImage from '../img/register_img.svg'
import { MdOutlineScience } from 'react-icons/md'
import {redirect} from "react-router";
import {useNavigate} from 'react-router-dom';


function Register () {

    useEffect(()=> {
        if(localStorage.getItem('user-info')){
            navigate('/calc')
        }
    })

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')
    const navigate = useNavigate()

    async function singUp () {

        const nameErr = document.getElementById('nameErr')
        const passErr = document.getElementById('passErr')
        const confPassErr = document.getElementById('confPassErr')



        let data = {
            name: name,
            password: password,
            confPassword: confPassword,
            nameErr: '',
            passErr: '',
            confPassErr: ''
        }

        if(name.length === 0) {
            data.nameErr = "Field can't be empty!"
            nameErr.innerText = nameErr.innerText || data.nameErr
        }else {
            data.nameErr = ''
            nameErr.innerText = ''
        }

        if(name.length < 4) {
            data.nameErr = "Username must be at least 4 characters!"
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

        if(password.length < 3){
            data.passErr = "Password must be at least 8 characters!"
            passErr.innerText = passErr.innerText || data.passErr
        }else {
            data.passErr = ''
            passErr.innerText = ''
        }

        if(confPassword.length === 0) {
            data.confPassErr = "Field can't be empty!"
            confPassErr.innerText = confPassErr.innerText || data.confPassErr
        }else if(data.password !== data.confPassword){
                data.confPassErr = "Passwords do not match!"
                confPassErr.innerText = confPassErr.innerText || data.confPassErr
        }else {
            data.confPassErr = ''
            confPassErr.innerText = ''
        }


        if(data.nameErr.length === 0 && data.passErr.length === 0 && data.confPassErr.length === 0) {

            let name = data.name
            let password = data.password

            let cleanData = {name,password }

            let result = await fetch('http://localhost/api/register', {

                method: 'POST',
                body: JSON.stringify(cleanData),
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'application/json'
                }
            })

            result = await result.json()


            if(result.message === 'Username already exists!') {
                data.nameErr = result.message
                nameErr.innerText = nameErr.innerText || data.nameErr
            }else {
                data.nameErr = ''
                nameErr.innerText = ''
                localStorage.setItem('user-info', JSON.stringify(cleanData))
                navigate('/calc')
            }


        }else {

        }

    }

    return (
        <div className="min-h-screen bg-background flex justify-center items-center flex-row p-4">
            <div className="auth-wrapper w-[70rem] bg-white min-h-[42rem] gap-8 md:flex rounded-2xl overflow-hidden">
                <div className="auth-image-section w-1/2:md w-full bg-red-400 p-8 bg-accent-transparent ">
                    <div className="flex gap-2 items-center">
                        <MdOutlineScience className="text-4xl text-white"/>
                        <h1 className="text-3xl text-white">OnCalc</h1>
                    </div>
                    <div className="auth-image-container flex justify-center items-center h-full">
                        <img className="h-[16rem] object-contain mb-20 p-2" src={RegisterImage} alt="Register"/>
                    </div>
                </div>
                <div className="auth-section w-1/2:md w-full p-8 rounded-r-2xl">
                    <div className="auth-header flex flex-col gap-2">
                        <h1 className="text-3xl text-text-color">Sign in</h1>
                        <h3 className="text-secondary-text-color">Registration</h3>
                        <p className="text-secondary-text-color" >
                            Please fill out the form to complete your registration.
                        </p>
                    </div>
                    <div className="form-box flex items-center h-[90%]">
                        <div action="" className="flex  flex-col justify-center gap-4 w-full" >
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
                                    className="py-2 border-b-[1px] border-border-color outline-none" placeholder="Please enter a password" type="password" id="password" name="password"
                                />
                                <span className="text-error-red" id="passErr"></span>

                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="pass_conf" className="text-text-color">Confirm Password</label>
                                <input
                                    value={confPassword}
                                    onChange={(e) => setConfPassword(e.target.value)}
                                    className="py-2 border-b-[1px] border-border-color outline-none" placeholder="Please confirm your password" type="password" id="pass_conf" name="pass_conf"
                                />
                                <span className="text-error-red" id="confPassErr"></span>
                            </div>
                            <div className="flex justify-between items-center mt-8 flex-wrap gap-4">
                                <a href="/" className="underline hover:no-underline">Have a profile?</a>
                                <button onClick={singUp} className="transition ease-in-out rounded-xl px-16 py-2 bg-accent text-white hover:bg-hover-accent hover:duration-200">Sign in</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default Register;
