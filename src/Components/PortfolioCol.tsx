import React, { useEffect, useState } from 'react'
import Mycard from './Mycard';
// import weather from '../images/weather.png'

export default function PortfolioCol() {
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
                <h1 className='Services-head mb-3 text-white'>My Portfolio</h1>
            </div>
            <div className="row">
                <div className="col-md-6 col-lg-6 col-sm-12 mb-4">
                    <div className="weather">
                        <Mycard head='Weather app' link='https://symphonious-rohail-weather-3988c6.netlify.app/' classname={'weathercard'} imgborder="rounded-5" />
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12 mb-4">
                    <div className="logistcs">
                    <Mycard head='Ar Logistics' link='https://graceful-fmp-480ab6.netlify.app/' classname={'ArLogistics-card'} imgborder="rounded-5" />
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12 mb-4">
                    <div className="quizcard">
                    <Mycard head='Quiz app with database' link='https://stupendous-boba-ea0c61.netlify.app/' classname={'quizapp'} imgborder="rounded-5" />
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12 mb-4">
                    <div className="sunovacard">
                    <Mycard head='Landing page Sunova Clone' link='https://sunova-rohail-1934fb.netlify.app/' classname={'sunova'} imgborder="rounded-5" />
                    </div>
                </div>
            </div>
        </div>
    )
}
