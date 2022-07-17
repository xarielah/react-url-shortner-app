import React from 'react'

type Props = {
    children: (JSX.Element | JSX.Element[]) | (React.ReactNode | React.ReactNode[]);
}

const MainLayout: React.FC<Props> = ({ children }) => {
    console.log(children)
    return (
        <main className='section-container'>
            <section className='main-container'>
                {children}
            </section>
        </main>
    )
}

export default MainLayout