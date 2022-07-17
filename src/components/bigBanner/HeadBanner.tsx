import mainpic from '../../assets/images/illustration-working.svg'
import './headbanner.css'

const HeadBanner: React.FC = () => {
    return (
        <div className='main-banner'>
            <div className='main-section'>
                <h1>More than just shorter links</h1>
                <p className='main-p'>
                    Build your brand's recognition and get detailed insights on how your links are performing.
                </p>
                <button className='btn btn-main'><a href="#url-input">Get Started</a></button>
            </div>
            <div className='main-section'>
                <img src={mainpic} className="main-pic" alt="woman in chair" />
            </div>
        </div>
    )
}

export default HeadBanner