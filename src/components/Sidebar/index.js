import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import LogoS from '../../assests/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
const Sidebar = ()=>{
    return (
        <div className='nav-bar'>
            <Link className="logo" to="/">
                <img src={LogoS} alt='logo'/>
            </Link>
            <nav>
                <NavLink exact='true' activeclassname='active' to="/">
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
                </NavLink>
                <NavLink exact='true' className='about-link' activeclassname='active' to="/about">
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
                </NavLink>
                <NavLink exact='true' className='contact-link' activeclassname='active' to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel='noreferrer' 
                    href='https://www.youtube.com/channel/UC1fcZl7yFqbmiHiNw-0ow6A'>
                        <FontAwesomeIcon icon={faYoutube} color='#4d4d4e'/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' 
                    href='https://www.facebook.com/turmunkh.boldoo'>
                        <FontAwesomeIcon icon={faFacebook} color='#4d4d4e'/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' 
                    href='https://www.instagram.com/turmunkh_boldbaatar/'>
                        <FontAwesomeIcon icon={faInstagram} color='#4d4d4e'/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' 
                    href='https://github.com/turuu1234'>
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar