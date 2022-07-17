import './advstats.css'
import TextBox from './TextBox'

// SVG's import
import brandRecIcon from '../../assets/images/icon-brand-recognition.svg'
import detRecIcon from '../../assets/images/icon-detailed-records.svg'
import fullyCustIcon from '../../assets/images/icon-fully-customizable.svg'

const BoxesData = [
    {
        title: 'Brand Recognition',
        desc: 'Boost your brand recognition with each click. Generic links don`t mean a thing. Branded links help instil confidence in your content',
        svg: brandRecIcon
    },
    {
        title: 'Detailed Records',
        desc: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
        svg: detRecIcon
    },
    {
        title: 'Fully Customizable',
        desc: 'Improve brand awareness and content discoverablity through customizable links, supercharging audience engagement.',
        svg: fullyCustIcon
    },
]

const AdvStats = () => {
    return (
        <article className='adv-stats-wrapper'>
            <h2>Advanced Statistics</h2>
            <p className='main-p'>Track how your links are performing across the web with out advanced statisics dashboard.</p>
            <div className='adv-boxes'>
                {BoxesData.map(data => <TextBox title={data.title} desc={data.desc} svg={data.svg} />)}
            </div>
        </article>
    )
}

export default AdvStats