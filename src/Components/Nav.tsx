import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import MenuIcon from '@mui/icons-material/Menu';
import {NavLink,Link} from 'react-router-dom'

type def={
  bgnav?:any,
  licolor?:any
}
function NAVBAR(props:def) {
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    // Check the screen width and set isMobile accordingly
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check and add event listener
    handleResize();
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderMobileNav = () => {
    return (
      <div className='displayNav'>
        <Button variant="primary" className='hambtn' onClick={handleShow}>
          Menu <MenuIcon /> {/* Include the MenuIcon properly */}
        </Button>

        <Offcanvas show={show} onHide={handleClose} className="mobilenav">
          <Offcanvas.Header closeButton style={{justifyContent:"end"}}>
            {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
          </Offcanvas.Header>
          <ul className="navbar-nav mt-5">
                <li className="nav-item">
                  <NavLink className="nav-link active my-3 mx-5" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link mb-3 mx-5" to="/About">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link mb-3 mx-5" to="/Resume">
                   Resume
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link mb-3 mx-5" to="/services">
                   Services 
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link mb-3 mx-5" to="/Portfolio">
                   Portfolio 
                  </NavLink>
                </li>
              </ul>
        </Offcanvas>
      </div>
    );
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navcolor" style={props.bgnav}>
        <div className="container-fluid">
         <NavLink to="/" style={{textDecoration:"none",marginBottom:"10px"}}>
            <h4 className='text-danger navhead py-2'>Dev Rohail</h4>
         </NavLink>
          {isMobile ? (
            renderMobileNav()
          ) : (
            <div className="d-flex flex-row justify-content-end align-items-center">
              <ul className="navbar-nav navitem">
                <li className="nav-item me-4"  >
                  <NavLink className="nav-link active" aria-current="page" to="/" style={props.licolor}>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item me-4">
                  <NavLink className="nav-link" to="/About" style={props.licolor}>
                    About
                  </NavLink>
                </li>
                <li className="nav-item me-4">
                  <NavLink className="nav-link" to="/Resume" style={props.licolor}>
                   Resume
                  </NavLink>
                </li>
                <li className="nav-item me-4">
                  <NavLink className="nav-link" to="/services" style={props.licolor}>
                   Services 
                  </NavLink>
                </li>
                <li className="nav-item me-4">
                  <NavLink className="nav-link" to="/Portfolio" style={props.licolor}>
                   Portfolio 
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default NAVBAR;

