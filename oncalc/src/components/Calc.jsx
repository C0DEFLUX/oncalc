import React from 'react';
import { RiDivideLine } from 'react-icons/ri';
import {FiDelete, FiPercent} from 'react-icons/fi'
import { GrClose} from "react-icons/gr";
import {AiOutlineMinus} from "react-icons/ai";
import { HiOutlinePlusSm } from 'react-icons/hi'
import {TbEqual, TbSquareRoot} from "react-icons/tb";


function Calc () {

    return (
        <div className="calc-container-wrapper min-h-screen bg-background flex justify-center items-center">

            <div className="calc-container min-h-[35rem] w-[25rem] rounded-2xl overflow-hidden">
                <div className="calc-screen h-[10rem] bg-black p-3 flex justify-end items-end">
                    <input className="calc-expression text-3xl text-white bg-transparent outline-none text-end" autoFocus/>
                </div>
                <div className="calc-keyboard grid grid-cols-4 grid-rows-5 min-h-[25rem]">
                    <button className="calc-btn bg-gray">C</button>
                    <button className="calc-btn bg-gray"><RiDivideLine/></button>
                    <button className="calc-btn bg-gray"><GrClose/></button>
                    <button className="calc-btn bg-accent-lighter"><FiDelete/></button>
                    <button className="calc-btn bg-white">7</button>
                    <button className="calc-btn bg-white">8</button>
                    <button className="calc-btn bg-white">9</button>
                    <button className="calc-btn bg-accent-lighter" ><AiOutlineMinus/></button>
                    <button className="calc-btn bg-white">4</button>
                    <button className="calc-btn bg-white">5</button>
                    <button className="calc-btn bg-white">6</button>
                    <button className="calc-btn bg-accent-lighter"><HiOutlinePlusSm/></button>
                    <button className="calc-btn bg-white">1</button>
                    <button className="calc-btn bg-white">2</button>
                    <button className="calc-btn bg-white">3</button>
                    <button className="calc-btn bg-accent-lighter"><TbSquareRoot/></button>
                    <button className="calc-btn bg-white"><FiPercent/></button>
                    <button className="calc-btn bg-white">0</button>
                    <button className="calc-btn bg-white">,</button>
                    <button className="calc-btn bg-accent hover:bg-hover-accent"><TbEqual/></button>
                </div>
            </div>
        </div>
    )

}

export default Calc;