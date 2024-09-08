import React from 'react'
import Footer from '../Components/Footer'
import NAVBAR from '../Components/Nav'
import myimage from '../images/myimage.jpg'
import AboutCol2 from '../Components/AboutCol2'
import ServicesCol2 from '../Components/ServicesCol'
import PortfolioCol from '../Components/PortfolioCol'

export default function Portfolio(){
    let navstyle = {
        backgroundColor: "black"
    }
    let Listyle = {
        // backgroundColor:"black",
        color: "#cc27e9"
    }
    let fstyle = {
        color: "white"
    }
    return (
        <div className='aboutbodycolor bg-image'>
            <div className="bgColor" style={{height:"100vh !important"}}>
                <NAVBAR bgnav={navstyle} licolor={Listyle} />
                <div className='pt-5 px-5'>
                    <div className="container py-5 aboutcontainer">
                        <div className="row align-items-center">
                            <div className="col-md-12 col-lg-12 col-sm-12  col-12 aboutcol">
                               <PortfolioCol/>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Footer footerstyle={fstyle} />
                </div>
            </div>
        </div>
    )
}