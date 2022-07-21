import React from 'react'
import whiteLogo from '../../assets/images/logo-white.svg'
import links from './links'

// Social media imports
import facebook from '../../assets/images/icon-facebook.svg'
import twitter from '../../assets/images/icon-twitter.svg'
import pinterest from '../../assets/images/icon-pinterest.svg'
import instagram from '../../assets/images/icon-instagram.svg'

const Footer: React.FC = () => {
    return (
        <footer className='footer-wrapper'>
            <div className='footer-logo'>
                <img src={whiteLogo} alt="white company logo" />
            </div>
            <div className='footer-links'>
                {links.map((item, index) => (
                    <ul className='link-wrap' key={index}>
                        <h5>{item.title}</h5>
                        {item.sublinks.map((link, idx) => <li key={idx}><a href={link.href}>{link.title}</a></li>)}
                    </ul>
                ))}
            </div>
            <div className='footer-social-media'>
                <img src={facebook} alt="social media icon" />
                <img src={twitter} alt="social media icon" />
                <img src={pinterest} alt="social media icon" />
                <img src={instagram} alt="social media icon" />
            </div>
        </footer>
    )
}

export default Footer