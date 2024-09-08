import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled';
export default function ResumeCol() {
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
                <h1 className='Resume-head mb-3 text-white'>My Resume</h1>
            </div>
            <div className="summary mb-5" >
                <h1 style={{ color: "#c440cc" }} className='mb-3'>Summary</h1>
                <p className='text-white resume-intro'> My name is Rohail Rizwan, and I am currently a third-year student at Dawood University Karachi, pursuing my degree. Alongside my academic journey, I have successfully completed a web development course from Jawan Pakistan,which has equipped me with valuable skills in front-end development.</p>
            </div>
            <div className="Education" >
            <h1 style={{ color: "#c440cc" }} className='mb-3'>Education</h1>
                <div className="bachelor mb-4">
                    <ul className='text-white' style={{paddingLeft:"20px"}}>
                        <li>
                            <h3 className='text-white mb-3'>Bachelor in Computer science</h3>
                            <p className='text-white duration' style={{ backgroundColor: "#2a2525", padding: "5px", width: "150px" }}>2021 Continue</p>
                            <h4 className='text-white mb- px-2' style={{ fontFamily: "monospace" }}>Dawood University</h4>
                            <p className='text-white px-2'>Bachelor in computer science continue from Dawood university</p>
                        </li>
                    </ul>
                </div>
                <div className="intermediate mb-4">
                    <ul className='text-white' style={{paddingLeft:"20px"}}>
                        <li>
                            <h3 className='text-white mb-3'>Intermediate</h3>
                            <p className='text-white duration' style={{ backgroundColor: "#2a2525", padding: "5px", width: "150px" }}>2019-2021</p>
                            <h4 className='text-white mb-2 px-2' style={{ fontFamily: "monospace" }}>Fatimiyah Boys College</h4>
                            <p className='text-white px-2'>Intermediate in subject of computer science</p>
                        </li>
                    </ul>
                </div>
                <div className="matric mb-4">
                    <ul className='text-white' style={{paddingLeft:"20px"}}>
                        <li>
                            <h3 className='text-white mb-3'>Matriculation</h3>
                            <p className='text-white duration' style={{ backgroundColor: "#2a2525", padding: "5px", width: "150px" }}>2017-2019</p>
                            <h4 className='text-white mb-2 px-2' style={{ fontFamily: "monospace" }}>Nasra Public School</h4>
                            <p className='text- px-2'>Matriculation in Computer science</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mycourses mb-4">
                <h1 style={{ color: "#c440cc" }} className='mb-3'>Courses</h1>
                    <ul className='text-white' style={{paddingLeft:"20px"}}>
                        <li>
                            <h3 className='text-white mb-3'>Web Development</h3>
                            <p className='text-white' style={{ backgroundColor: "#2a2525", padding: "5px", width: "150px" }}>2023 continue</p>
                            <h4 className='text-white mb-2 px-2' style={{ fontFamily: "monospace" }}>Jawan pakistan</h4>
                            <p className='text-white px-2'>Mern stack course continue in jawan pakistan</p>
                        </li>
                    </ul>
                </div>
        </div>
    )
}
