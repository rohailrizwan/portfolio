import React from 'react'
type def={
    head:string,
    paragraph?:string,
    logo?:any,
    imgborder?:any,
    classname?:any,
    link?:any
}
export default function Mycard(props:def) {
  return (
    <div className={` services-card d-flex align-items-center flex-column ${props.classname}`}>
        <img src={props.logo} alt="" className={`img-fluid text-center w-25 ${props.imgborder} mb-3`} />
      <h1 className='mb-4'>{props.head}</h1>
      <h6 className=''>{props.paragraph}</h6>
      {/* Render the link if it's provided */}
      {props.link && (
        <p style={{ cursor: 'pointer',textAlign:"center" }}>
          <a href={props.link} target="_blank" rel="noopener noreferrer" className='text-center' style={{textDecoration:"none",color:'#c440cc'}}>
            {props.link}
          </a>
        </p>
      )}
    </div>
  )
}
