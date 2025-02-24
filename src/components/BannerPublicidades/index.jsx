import React from 'react'

const BannerPublicidades = ({ ...props }) => {
  return (
    <a href={props.href} rel="noopener noreferrer">
      <img src={props.img} alt="publicidad" className='rounded-sm shadow-sm' />
    </a>
  )
}

export default BannerPublicidades