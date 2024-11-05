import React from 'react'

const Header = ({ title = 'Healthcare'}) => {
  return (
    <div className='py-5 bg-primary text-white text-center'>
        <h2 className='fw-bolder fs-1'>{title}</h2>
    </div>
  )
}

export default Header