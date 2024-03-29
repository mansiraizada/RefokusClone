import React from 'react'

const Work = () => {
  var images = [
    {url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png', top: "50%", left:"50%", isActive:true},
    {url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png', top: "53%", left:"48%", isActive:false},
    {url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png', top: "47%", left:"52%", isActive:false},
    {url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png', top: "51%", left:"49%", isActive:false},
    {url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png', top: "53%", left:"53%", isActive:false},
    {url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png', top: "55%", left:"52%", isActive:false},
  ];

  return (
    <div className='w-full'>
      <div className='relative max-w-screen-xl mx-auto text-center'>
        <h1 className='text-[33vw] leading-none font-medium tracking-tight select-none'>work</h1>
        <div className='absolute top-0 w-full h-full'>
          {images.map((el, i) => el.isActive && <img className='w-60 absolute rounded-lg -translate-x-[50%] -translate-y-[50%]' src={el.url} alt='' style={{ top: el.top, left: el.left }} />)}
        </div>
      </div>
    </div>
  )
}

export default Work