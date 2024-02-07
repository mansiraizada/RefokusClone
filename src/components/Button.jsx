import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

const Button = ({title = 'Get Started'}) => {
  return (
    <div className='max-w-40 px-4 py-1 bg-zinc-200 text-black rounded-full flex justify-between items-center'>
      <span className='text-sm font-semibold'>{title}</span>
          <IoIosReturnRight/>
    </div>
  )
}

export default Button