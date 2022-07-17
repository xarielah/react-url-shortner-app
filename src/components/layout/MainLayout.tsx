import React from 'react'
import Navbar from '../navigation/Navbar'
import Footer from '../navigation/Footer'

type Props = {
    children: JSX.Element;
}

const MainLayout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className='main-container'>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default MainLayout