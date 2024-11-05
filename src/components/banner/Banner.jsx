import React from 'react'

const Banner = ({ title, desc }) => {
  return (
    <div className='py-5 px-4 text-center bg-primary text-white'>
        <h1>{title}</h1>
        <p>{desc}</p>
    </div>
  )
}

export default Banner