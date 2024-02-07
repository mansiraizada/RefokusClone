import React from 'react'

const Marquee = ({data}) => {
    return (
        <div className='flex w-full py-5 gap-12 overflow-hidden'>
            {data.map(url => <img src={url} />)}
        </div>
  )
}

export default Marquee