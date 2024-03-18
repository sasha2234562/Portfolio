import {Link} from 'react-scroll';
import {Logo} from "../../ui/Logo/Logo";
import * as SC from './Links.style';

const Links = () => {
    return (
        <SC.LinksWrapperStyle>
            <SC.LinksStyle>
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
            </SC.LinksStyle>
            <SC.ContactMe>
                <h2>Subscribe to my emailing list</h2>
                <SC.InputStyle>
                    <input type="email"/>
                    <button>Subscribe</button>
                </SC.InputStyle>
                <p>By subscribing you agree to with our Privacy Policy</p>
            </SC.ContactMe>
        </SC.LinksWrapperStyle>
    );
};

export default Links;