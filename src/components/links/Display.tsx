import './inputdisplay.css'
import { clearData } from '../../utils/crudFunctions'
import { ShortenedURL } from '../../types/storeLink'
import { Modal } from '../modal'
import React, { useState } from 'react'

type Props = {
    urls: ShortenedURL[];
    refresh(): void;
}

const DisplayURL: React.FC<Props> = ({ urls, refresh }) => {
    const [success, setSuccess] = useState<boolean>(false)
    const unsuccess = () => setSuccess(false)

    const copyToClipboard = (url: string, e: React.MouseEvent<HTMLButtonElement>) => {
        setSuccess(true)

        const event = e.target as HTMLButtonElement

        event.classList.add('btn-copied')
        event.innerHTML = 'Copied!'

        navigator.clipboard.writeText(url)

        setTimeout(() => {
            event.classList.remove('btn-copied')
            event.innerHTML = 'Copy'
        }, 4000)
    }


    return (
        <>
            {success && <Modal setter={unsuccess} type="success" msg={"Copied link successfuly to clipboard!"} />}
            <p className='display-clear-data' onClick={() => { clearData(); refresh() }}>Clear All Data</p>
            <div className='display-url-wrapper'>
                {urls.map((url: ShortenedURL, index) => (
                    <div className='display-box' key={index}>
                        <ul>
                            <li><a href={url.original}>{url.original}</a></li>
                            <hr className='hrule' />
                            <div className='flex-dir-row display-bundle'>
                                <li className='display-short'><a href={url.shortened}>{url.shortened}</a></li>
                                <li><button className='btn input-btn btn-copy' onClick={(e) => copyToClipboard(url.shortened, e)}>Copy</button></li>
                            </div>
                        </ul>
                    </div>
                ))}
            </div>
        </>
    )
}

export default DisplayURL