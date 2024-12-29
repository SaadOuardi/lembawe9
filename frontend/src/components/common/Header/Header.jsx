import { useState } from 'react';
import { Logo } from './Logo/Logo';
import { Navbar } from './Navbar/Navbar';
import Profile from '../../../assets/images/profile/lembawe9.jpg';
import './Header.scss';

export const Header = () => {
    const [MobileMenu, setMobileMenu] = useState(false);


    const handleMobileMenu = () => {
        setMobileMenu(!MobileMenu)
    }

    const handleTakeMeUp = () => {
        window.scrollTo(0, 0);
    }

    window.addEventListener('scroll', () => {
    })

    return(
        <>
            <header id='home'>
                <div className="header-content">
                    <div className='logo-navbar-container'>
                        <Logo   handleTakeMeUp={handleTakeMeUp}  />
                        <Navbar   handleTakeMeUp={handleTakeMeUp}  />
                    </div>
                    <div className='buttons-container flex-center-center'>
                        <a href="https://www.youtube.com/@Lhangarworldwide">
                            <button className='cv-btn'>
                                <span>LHANGAR</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-fuel-pump-fill" viewBox="0 0 16 16"><path d="M1 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1 2 2v.5a.5.5 0 0 0 1 0V8h-.5a.5.5 0 0 1-.5-.5V4.375a.5.5 0 0 1 .5-.5h1.495c-.011-.476-.053-.894-.201-1.222a.97.97 0 0 0-.394-.458c-.184-.11-.464-.195-.9-.195a.5.5 0 0 1 0-1q.846-.002 1.412.336c.383.228.634.551.794.907.295.655.294 1.465.294 2.081V7.5a.5.5 0 0 1-.5.5H15v4.5a1.5 1.5 0 0 1-3 0V12a1 1 0 0 0-1-1v4h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1zm2.5 0a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5z"/></svg>
                            </button>
                            
                        </a>
                    </div>

                    <div className="mobile-navbar">
                        {!MobileMenu ? (
                                <button onClick={handleMobileMenu}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" id="open-navbar" viewBox="0 0 16 16"><path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/></svg>
                                </button>

                        ):(
                            <>
                                <button onClick={handleMobileMenu}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/></svg>
                                </button>
                                <div className="navbar mobile-navbar">
                                    <div className="mobile-list_navbar">
                                    </div>
                                </div>
                            </>
                        )
                        }
                    </div>
                </div>
            </header>
        </>
    )
}