import React from 'react'
import NAVBAR from '../Components/Nav'
import Col2 from '../Components/Col2'
import myimage from '../images/myimage.jpg'
import Footer from '../Components/Footer'
export default function Home() {
  return (
    <div className="bodyimage">
      <div className='bodycolor'>
      <NAVBAR />
      <div>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-6 col-lg-6 col-sm-12 myimage">
                <img src={myimage} alt="" className='img-fluid rounded-5'style={{opacity:"0.8"}} />
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12 col2">
            <Col2/>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
    </div>
  )
}
