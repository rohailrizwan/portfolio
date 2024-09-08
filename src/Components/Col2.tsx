import React, { useState ,useEffect} from 'react';
import { NavLink } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import {useNavigate} from 'react-router-dom'
function Col2() {
  const [showText, setShowText] = useState(false);
  const navigate=useNavigate()
  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 1000); // 1000 milliseconds (1 second) ke baad text dikhana shuru hoga
  }, []);

  return (
    <div className="ps-5 mb-3">
      <h1 className='mb-4 text-danger myname'>Rohail Rizwan</h1>
      <div className={`text ${showText ? 'show' : ''}`}>
        <h2 className='intro mb-5'>I am a Frontend Developer or React Js Developer</h2>
      </div>
      <div>
        <button className='btn py-2' style={{width:"150px",backgroundColor:"red",color:"white", fontSize:"18px"}} onClick={()=>(navigate('/About'))}>More about </button>
      </div>
    </div>
  );
}

export default Col2;

