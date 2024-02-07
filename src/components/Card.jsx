import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = ({width, start, para, hover='none'}) => {
    return (
        <div className={`bg-zinc-800 rounded-xl p-4 ${width} min-h-[28rem] flex flex-col justify-between hover:${hover}`}>
            <div className='w-full'>
                <div className='flex justify-between items-center w-full'>
                <h1>some heading</h1>
                <IoIosArrowRoundForward/>
                </div>
                <h1 className='text-2xl font-medium mt-5'>Heading</h1>
            </div>
            <div className='bottom'>
                {start && <><h1 className='font-semibold text-8xl leading-none tracking-tight'>Start a Project</h1>
                <button className='rounded-full py-2 px-5 mt-5 border-2 border-zinc-100'>Contact Us</button></>}
                {para && <p className='text-sm text-zinc-500 font-medium'>Lorem ipsum dolor sit amet consectetur.</p>}
            </div>
        </div>
  )
}

export default Card