import './inputdisplay.css'
import { clearData } from '../../utils/crudFunctions'
import { ShortenedURL } from '../../types/storeLink'
import SuccessModal from '../modal/SuccessModal'
import { useState } from 'react'

type Props = {
    urls: ShortenedURL[];
    refresh(): void;
}

const DisplayURL: React.FC<Props> = ({ urls, refresh }) => {
    const [success, setSuccess] = useState<boolean>(false)
    const unsuccess = () => setSuccess(false)

    const copyToClipboard = (url: string, e: any) => {
        // TODO: Fix 'any' type on event
        setSuccess(true)

        e.target.classList.add('btn-copied')
        e.target.innerHTML = 'Copied!'

        navigator.clipboard.writeText(url)

        setTimeout(() => {
            e.target.classList.remove('btn-copied')
            e.target.innerHTML = 'Copy'
        }, 4000)
    }


    return (
        <>
            {success && <SuccessModal setter={unsuccess} msg={"Copied link successfuly to clipboard!"} />}
            <p className='display-clear-data' onClick={() => { clearData(); refresh() }}>Clear All Data</p>
            {urls.map((url: ShortenedURL, index: number) => (
                <div className='display-box'>
                    <ul>
                        <li><a href={url.original}>{url.original}</a></li>
                        <hr />
                        <li className='display-short'><a href={url.shortened}>{url.shortened}</a></li>
                        <li><button className='btn input-btn btn-copy' onClick={(e) => copyToClipboard(url.shortened, e)}>Copy</button></li>
                    </ul>
                </div>
            ))}
        </>
    )
}

export default DisplayURL