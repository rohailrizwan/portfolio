import React, { useEffect, useState } from 'react'
import Mycard from './Mycard';
import weblogo from '../images/web-logo.png'
import designlogo from '../images/design-logo.png'
import landinglogo from '../images/landing-logo.jpeg'
import styled from '@emotion/styled';
export default function ServicesCol2() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      // 2000 milliseconds (2 seconds) ke baad component ko display karna
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
  
      // Cleanup timer on component unmount
      return () => clearTimeout(timer);
    }, []);

  
    return (
        <div className={`about me  ${isVisible ? 'visible' : 'hidden'}`}>
            <div className='mb-4'>
                <h1 className='Services-head mb-3 text-white'>My Services</h1>
            </div>  
            <div className="row">
                <div className="col-md-6 col-lg-6 col-sm-12 mb-4">
                    <Mycard head='Web development' paragraph='Web development using javascript and react js' logo={weblogo} imgborder="rounded-5"/>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12 mb-4">
                    <Mycard head='Responsive Design' paragraph='create responsive layout for every device' logo={designlogo} imgborder="rounded-pill"/>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12">
                    <Mycard head='Landing Page' paragraph=' attractive and responsive Landing page according to client demand' logo={landinglogo} imgborder="rounded-pill"/>
                </div>
            </div>  
        </div>
    )
}
