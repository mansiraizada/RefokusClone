import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

const Button = () => {
  return (
    <div className='min-w-40 px-4 py-1 bg-zinc-200 text-black rounded-full flex justify-between items-center'>
          <span className='text-sm font-semibold'>Get Started</span>
          <IoIosReturnRight/>
    </div>
  )
}

export default Button