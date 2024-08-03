import avatar from '../../../../../assets/avatar.png'
import * as SC from './me.style.ts'
import {Button} from "../../../ui";

export const Me = () => {
    return (
        <SC.MeContainer>
            <SC.MeTextContent>
                <SC.Profession>ФРОНТЕНД РАЗРАБОТЧИК</SC.Profession>
                <SC.Name>Саша Калитеня</SC.Name>
                <SC.MeDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.
                </SC.MeDescription>
                <Button title={'About me'} style={SC.ButtonAbout}/>
            </SC.MeTextContent>
            <SC.Avatar src={avatar} alt="frontend"/>
        </SC.MeContainer>
    );
};
