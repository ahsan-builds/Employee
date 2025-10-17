import React from 'react'
import { FaHand } from "react-icons/fa6";
const Header = () => {
  return (
    <div className='flex justify-between items-end'>
        <div className='flex justify-center items-center gap-5'>
            <h1>
                Hi, Ahsan Azhar
            </h1>
            <h1>
                <FaHand />
            </h1>
        </div>

        <div>
            <button className='bg-red-400 border-zinc-300 border-1 p-1'>
                Log out
            </button>
        </div>
    </div>
  )
}

export default Header