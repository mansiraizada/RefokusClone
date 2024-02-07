import React from 'react'

const Stripe = ({ el }) => {
    const { url, num } = el;

  return (
    <div className='w-[16.66%] px-4 py-5 border-t-[1.2px] border-r-[1.2px] border-b-[1.2px] border-zinc-600 flex justify-between items-center'>
        <img src={url}/>   
        <div className='font-semibold'>{num}</div>   
    </div>
  )
}

export default Stripe