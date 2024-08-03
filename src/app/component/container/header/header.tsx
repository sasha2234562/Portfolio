import * as SC from './header.style.ts';
import {Button} from "../../ui";

export const Header = () => {
    return (
        <SC.Nav>
            <SC.Link>Главная</SC.Link>
            <SC.NavButtonWrapper>
                <SC.Link>Проекты</SC.Link>
                <Button title={'Контакты'}/>
            </SC.NavButtonWrapper>
        </SC.Nav>
    );
};
