import React from 'react'

type def={
  footerstyle?:any
}
export default function Footer(props:def) {
  return (
    <div className='w-100 pt-5 pb-3 d-flex align-items-center justify-content-center '>
      <p className='footerdesign' style={props.footerstyle}>Designed by <span className='footername'>Rohail rizwan</span></p>
    </div>
  )
}
