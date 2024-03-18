import {Link} from 'react-scroll';
import {Logo} from "../../ui/Logo/Logo";
import {ContactMe, InputStyle, LinksStyle, LinksWrapperStyle} from './Links.style';

const Links = () => {
    return (
        <LinksWrapperStyle>
            <LinksStyle>
                <Logo/>
                <ul>
                    <li>
                        <Link to="Projects" smooth duration={1000}>
                            Project
                        </Link>
                    </li>
                    <li>
                        <Link to="About" smooth duration={1000}>
                            About
                        </Link>
                    </li>
                    <li>
                        <a href={''}>Digital Assets</a>
                    </li>
                </ul>
            </LinksStyle>
            <ContactMe>
                <h2>Subscribe to my emailing list</h2>
                <InputStyle>
                    <input type="email"/>
                    <button>Subscribe</button>
                </InputStyle>
                <p>By subscribing you agree to with our Privacy Policy</p>
            </ContactMe>
        </LinksWrapperStyle>
    );
};

export default Links;