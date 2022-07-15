import './inputdisplay.css'
import { ShortenedURL } from '../../types/storeLink'

type Props = {
    urls: ShortenedURL[]
}

const DisplayURL: React.FC<Props> = ({ urls }) => {

    // TODO: Copy onClick via function that accepts url

    const copyToClipboard = (url: string, e: any) => {
        e.target.classList.add('btn-copied')
        e.target.innerHTML = 'Copied!'

        navigator.clipboard.writeText(url)
    }


    return (
        <>
            {urls.map((url: ShortenedURL, index: number) =>
                <div className='display-box' key={index}>
                    <div className='display-original'><a href={url.original}>{url.original}</a></div>
                    <hr />
                    <div className='display-short'>
                        <a href={url.shortened}>{url.shortened}</a>
                        <div className='btn-container'>
                            <button className='btn input-btn btn-copy' onClick={(e) => copyToClipboard(url.shortened, e)}>Copy</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default DisplayURL