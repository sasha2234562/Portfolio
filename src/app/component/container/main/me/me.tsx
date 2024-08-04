import avatar from '../../../../../assets/avatar.png'
import * as SC from './me.style.ts'
import {Profession} from "../../../ui/profession/profession.tsx";

export const Me = () => {
    return (
        <SC.MeContainer>
            <SC.MeTextContent>
                <Profession text={'ФРОНТЕНД РАЗРАБОТЧИК'}/>
                <SC.Name>Саша Калитеня</SC.Name>
            </SC.MeTextContent>
            <SC.Avatar src={avatar} alt="frontend"/>
        </SC.MeContainer>
    );
};
