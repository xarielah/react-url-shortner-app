import React, { useEffect, useState } from 'react'
import Logo from '../../assets/images/logo.svg'
import Hamburger from 'hamburger-react'
import ResponsiveMenu from './ResponsiveMenu'
import './navigation.css'
import useDimensions from '../../hooks/useWindowDimensions'

const Navbar: React.FC = () => {
    const [isOpen, setOpen] = useState<boolean>(false)
    const { width: winWidth, height: winHeight } = useDimensions()

    useEffect(() => {
        if (winWidth >= 1000) return setOpen(false)
    }, [winWidth])

    return (
        <>
            <nav className='navigation-bar'>
                <img className='objectfit' src={Logo} alt="company logo" />
                <Hamburger toggle={setOpen} toggled={isOpen} />
            </nav>
            <menu>
                {/* TODO: Add normal menu on desktop site */}
                {isOpen && <ResponsiveMenu isOpen={isOpen} />}
            </menu>
        </>
    )
}

export default Navbar