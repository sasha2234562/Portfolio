import * as SC from './header.style.ts';
import {Button} from "../../ui";

export const Header = () => {
    return (
        <SC.Nav>
            <SC.Link>Home</SC.Link>
            <SC.NavButtonWrapper>
                <SC.Link>Projects</SC.Link>
                <Button title={'Contact'}/>
            </SC.NavButtonWrapper>
        </SC.Nav>
    );
};
