import menulinks from "../../utils/menulinks"

type Props = {
    isOpen: boolean
}

const ResponsiveMenu: React.FC<Props> = ({ isOpen }) => {

    // TODO: Fix fadeout effect
    return (
        <div className={`mobile-menu ${isOpen ? 'o-1' : 'o-0'}`}>
            <ul>
                {menulinks.map(link => <li className="mobile-menu-item"><a href={link.href}>{link.name}</a></li>)}

            </ul>
            <hr />
            <div className="mobile-menu-button-wrapper">
                <a href="/" className="menu-login-btn">Login</a>
                <button className="btn menu-signup-btn">Sign Up</button>
            </div>
        </div>
    )
}

export default ResponsiveMenu