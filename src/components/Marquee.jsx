import React from 'react'

const Marquee = ({data}) => {
    return (
        <div className='flex w-full py-5 gap-12 overflow-hidden'>
            {data.map(url => <img src={url} className='flex-shrink-0'/>)}
            {data.map(url => <img src={url} className='flex-shrink-0'/>)}
        </div>
  )
}

export default Marquee