import React from 'react'

const Footer = () => {
  return (
    <div className='w-full'>
          <div className='max-w-screen-xl mx-auto py-10 flex items-center gap-40'>
              <div className='basis-1/2'>
                  <h1 className='text-[11rem] tracking-tight leading-none font-semibold'>refokus.</h1>
              </div>
              <div className='basis-1/2 text-zinc-500 text-sm flex gap-20'>
                  <div>
                      <h1 className='mb-10'>Socials</h1>
                      {['instagram', "twitter (X?)", "linkediIn"].map(item => <h1 className='capitalize mt-2'>{item}</h1>)}
                  </div>
                  <div>
                      <h1 className='mb-10'>Sitemap</h1>
                      {['home', "work", "careers", "contact"].map(item => <h1 className='capitalize text-zinc-300 mt-2'>{item}</h1>)}
                  </div>
                  <div className='flex items-center'>
                      <p className='font-semibold text-zinc-100 text-right '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, dignissimos.</p>
                  </div>
              </div>
          </div>      
    </div>
  )
}

export default Footer