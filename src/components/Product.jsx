import React from 'react'
import Button from './Button'

const Product = ({ data }) => {
    
    const { title, desc, live, caseB} = data;
    
  return (
      <div className='w-full py-16 text-white'>
          <div className='max-w-screen-xl mx-auto flex items-center justify-between'>
              <h1 className='capitalize text-6xl font-semibold'>{title}</h1>
              <div className='w-1/3'>
                  <p className='mb-10'>{desc}</p>
                  <div className='flex gap-5 items-center'>
                    {live && <Button title='Live Website' />}
                    {caseB && <Button title='Case Study' />} 
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Product