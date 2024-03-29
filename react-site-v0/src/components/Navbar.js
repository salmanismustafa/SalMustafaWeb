import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {MdFingerprint} from 'react-icons/md';
import { SiAtom } from "react-icons/si";
import {FaBars, FaTimes} from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else{
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton);

    return (
        <>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to="/" className="navbar-logo">
                        <SiAtom className="navbar-icon"/>
                        Sal's Domain
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes/> : <FaBars/>}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to ='/' className="nav-links">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a target = "_blank" href = 'https://soundcloud.com/aaxsll/' className="nav-links">
                                Music
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link to ='/love' className="nav-links">
                                Love
                            </Link>
                        </li>
                        <li className="nav-item">
                        <a target = "_blank" href = 'https://medium.com/@saltellsstoriesinthedark' className="nav-links">
                                Words
                            </a>
                        </li>
                        <li className="nav-btn">
                            {button ? (
                                <Link to='/sign-up' className="btn-link">
                                    <Button buttonStyle='btn--outline'>SIGN UP</Button>
                                </Link>
                            ):(
                                <Link to='/sign-up' className="btn-link">
                                    <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>SIGN UP</Button>
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>    
            </div>
        </>
    )
}

export default Navbar
