import React, { useEffect, useState } from 'react'
import Logo from '../../assets/images/logo.svg'
import Hamburger from 'hamburger-react'
import ResponsiveMenu from './ResponsiveMenu'
import './navigation.css'
import useDimensions from '../../hooks/useWindowDimensions'
import menulinks from "../../utils/menulinks"

const Navbar: React.FC = () => {
    const [isOpen, setOpen] = useState<boolean>(false)
    const { width: winWidth } = useDimensions()

    useEffect(() => {
        if (winWidth >= 1000) return setOpen(false)
    }, [winWidth])

    return (
        <>
            <nav className='navigation-bar'>
                <div className='nav-head-wrapper'>
                    <img className='objectfit' src={Logo} alt="company logo" />
                    <ul className='menu-desktop display-medium'>
                        {menulinks.map((item, index) => <li className='menu-desktop-item' key={index}><a href={item.href}>{item.name}</a></li>)}
                    </ul>
                </div>
                <div className='login-signup-wrapper display-medium'>
                    <a href="/">Login</a>
                    <a href="/"><button className='btn btn-nav'>Sign Up</button></a>
                </div>
                <div className='menu-mobile'>
                    <Hamburger toggle={setOpen} toggled={isOpen} />
                </div>
            </nav>
            <nav className='menu-mobile'>
                {isOpen &&
                    <menu>
                        {/* TODO: Add normal menu on desktop site */}
                        <ResponsiveMenu isOpen={isOpen} />
                    </menu>
                }
            </nav>
        </>
    )
}

export default Navbar