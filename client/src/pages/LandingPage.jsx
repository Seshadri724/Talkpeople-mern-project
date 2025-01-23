import React, { useState } from 'react';
import '../styles/landingpage.css';

import socialeXLogo from '../images/Talk People.png';
import About1 from '../images/about-1.png';
import About2 from '../images/about-2.png';

import Login from '../components/Login';
import Register from '../components/Register';

const LandingPage = () => {

    const [isLoginBox, setIsLoginBox] = useState(true);


  return (
    <div className='landingPage'>
        
        <div className="landing-header">
            <span className="landing-header-logo"><img src={Talk People} alt="" /></span>
            <ul>
                <li className='header-li'><a href="#home">Home</a></li>
                <li className='header-li'><a href="#about">About</a> </li>
                <li className='header-li'><a href="#home">Join now</a></li>
            </ul>
        </div>


        <div className="landing-body">

            <div className="landing-hero" id='home'>
                <div className="landing-hero-content">
                    <h1>Talk People</h1>
                    <p>Step into Talk People, the ultimate playground where creativity knows no bounds and quirkiness is the norm. Join vibrant communities that thrive on imagination and celebrate every unique detail that makes us spectacularly human.🌟 </p>

                    <div className="authentication-form">

                        { isLoginBox ?

                            <Login setIsLoginBox={setIsLoginBox} />
                            :
                            <Register setIsLoginBox={setIsLoginBox} />
                        }

                    </div>

                </div>


                <div className="landing-hero-image">
                    
                        <div id='landing-image-sidebar-left'></div>
                        <div className="back"></div>
                        <div id='landing-image-sidebar-right'></div>
                   
                </div>
            </div>

            <div className="landing-about" id='about'>

                <div className="about-1">
                    <img src={About1} className='about-1-img' alt="" />
                    <div className="about-1-content">

                        <h3>Stay Connected</h3>
                        <p>Revamp your friendships with Talk People! Enjoy constant connection with old friends, no matter where they are in the world. Follow their adventures, engage with their stories, and rekindle treasured memories through lively interactions. Let SocialeX be the bridge that keeps you close, even when miles apart📱💬.</p>
                        <a href='#home'>Join now!!</a>

                    </div>
                </div>
                <div className="about-2">
                    <div className="about-2-content">
                        <h3>Amplify Your Voice</h3>
                        <p>Share your voice with the world on Talk People! Whether you're an artist, writer, musician, or content creator, this platform amplifies your perspective. Connect with a global audience, showcase your creativity, and gain the recognition you deserve🎤🌍.</p>
                        <a href='#home'>Join now!!</a>
                    </div>
                    <img src={About2} className='about-2-img' alt="" />
                </div>

            </div>

            <div className="footer">
                <p>All rights reserved - &#169; Talk People.com</p>
            </div>


        </div>

    </div>
  )
}

export default LandingPage
