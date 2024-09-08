import React, { useEffect, useState } from 'react'

export default function AboutCol2() {
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
        <div className={`about me ps-3 ${isVisible ? 'visible' : 'hidden'}`}>
            <div className='mb-4'>
                <h1 className='Front-end mb-3 text-white'>Front end Developer</h1>
                <p className='more-about'>I am Rohail Rizwan. A Passionate Web developer and always keen to explore more about Technology. a developer having valuable experience in Html Css Javascript Bootstrap and React Js</p>
            </div>
            <div className="myinfo d-flex justify-content-between mb-5">
                <ul>
                    <li className=''><strong className='text-white'>Birthday : </strong> 22/July/2003</li>
                    <li><strong className='text-white'>Phone : </strong>+92 3320384706</li>
                    <li><strong  className='text-white'>City : </strong> Karachi ,Pakistan</li>
                </ul>
                <ul>
                    <li className=''><strong className='text-white'>Age : </strong>20 Years</li>
                    <li><strong className='text-white'>Email : </strong>Rupani.rohail@gmail.com</li>
                </ul>
            </div>
            <div className="myskills">
            <h3 className='My-skills mb-5 text-white'>My Skills</h3>
                <div className="html w-75 mb-3">
                    <h4 className='d-flex justify-content-between mb-3 text-white'>Html <span>100%</span> </h4>
                    <div style={{height:'8px',width:"100%",backgroundColor:"#c440cc"}}></div>
                </div>
                <div className="Css w-75 mb-3">
                    <h4 className='d-flex justify-content-between mb-3 text-white'>Css <span>90%</span> </h4>
                    <div style={{height:'8px',width:"80%",backgroundColor:"#c440cc"}}></div>
                </div>
                <div className="Bootstap w-75 mb-3">
                    <h4 className='d-flex justify-content-between mb-3 text-white'>Bootstrap <span>80%</span> </h4>
                    <div style={{height:'8px',width:"90%",backgroundColor:"#c440cc"}}></div>
                </div>
                <div className="Java Script w-75 mb-3">
                    <h4 className='d-flex justify-content-between mb-3 text-white'>Java Scipt <span>70%</span> </h4>
                    <div style={{height:'8px',width:"70%",backgroundColor:"#c440cc"}}></div>
                </div>
                <div className="React Js w-75 mb-3">
                    <h4 className='d-flex justify-content-between mb-3 text-white'>React Js <span>50%</span> </h4>
                    <div style={{height:'8px',width:"50%",backgroundColor:"#c440cc"}}></div>
                </div>
                <div className="React Js w-75 mb-3">
                    <h4 className='d-flex justify-content-between mb-3 text-white'>Type script <span>60%</span> </h4>
                    <div style={{height:'8px',width:"50%",backgroundColor:"#c440cc"}}></div>
                </div>
            </div>
        </div>
    )
}
