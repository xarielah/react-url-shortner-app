import { useState, useEffect } from 'react'

type Dimensions = {
    width: number;
    height: number;
}

function getDimensiones(): Dimensions {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    }
}


export default function useDimensions(): Dimensions {
    const [windowDimensions, setWindowDimensions] = useState(getDimensiones())

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getDimensiones())
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return windowDimensions;
}