import React from 'react';
import { RiDivideLine } from 'react-icons/ri';
import {FiDelete, FiPercent} from 'react-icons/fi'
import { GrClose} from "react-icons/gr";
import {AiOutlineMinus} from "react-icons/ai";
import { HiOutlinePlusSm } from 'react-icons/hi'
import {TbEqual, TbSquareRoot} from "react-icons/tb";
import { useNavigate } from "react-router-dom";


function Calc () {

    let user = JSON.parse(localStorage.getItem('user-info'));
    const navigate = useNavigate()

    function logout () {
        localStorage.clear();
        navigate('/')
    }

    return (
        <div>
            <button className="absolute end-4 top-4 transition ease-in-out rounded-xl px-16 py-2 bg-accent text-white hover:bg-hover-accent hover:duration-200" onClick={logout}>Logout</button>
            <div className="calc-container-wrapper min-h-screen bg-background flex justify-center items-center">
                <div className="calc-container min-h-[35rem] w-[25rem] rounded-2xl overflow-hidden">
                    <div className="calc-screen h-[10rem] bg-black p-3 flex justify-end items-end">
                        <input className="calc-expression text-3xl text-white bg-transparent outline-none text-end" autoFocus/>
                    </div>
                    <div className="calc-keyboard grid grid-cols-4 grid-rows-5 min-h-[25rem]">
                        <button className="calc-btn calc-top-btn">C</button>
                        <button className="calc-btn calc-top-btn"><RiDivideLine/></button>
                        <button className="calc-btn calc-top-btn"><GrClose/></button>
                        <button className="calc-btn calc-left-btn"><FiDelete/></button>
                        <button className="calc-btn calc-main-btn">7</button>
                        <button className="calc-btn calc-main-btn">8</button>
                        <button className="calc-btn calc-main-btn">9</button>
                        <button className="calc-btn calc-left-btn" ><AiOutlineMinus/></button>
                        <button className="calc-btn calc-main-btn">4</button>
                        <button className="calc-btn calc-main-btn">5</button>
                        <button className="calc-btn calc-main-btn">6</button>
                        <button className="calc-btn calc-left-btn"><HiOutlinePlusSm/></button>
                        <button className="calc-btn calc-main-btn">1</button>
                        <button className="calc-btn calc-main-btn">2</button>
                        <button className="calc-btn calc-main-btn">3</button>
                        <button className="calc-btn calc-left-btn"><TbSquareRoot/></button>
                        <button className="calc-btn calc-main-btn"><FiPercent/></button>
                        <button className="calc-btn calc-main-btn">0</button>
                        <button className="calc-btn calc-main-btn">,</button>
                        <button className="calc-btn bg-accent hover:bg-hover-accent"><TbEqual/></button>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Calc;