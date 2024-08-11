import avatar from '../../../../../assets/avatar.png'
import * as SC from './me.style.ts'
import Typewriter from 'typewriter-effect';

export const Me = () => {
    return (
        <SC.MeContainer>
            <SC.MeTextContent>
                <SC.MainTitle>
                    <span style={{display: "none"}}>ФРОНТЕНД РАЗРАБОТЧИК</span>
                    <Typewriter
                        options={{
                            strings: ['ФРОНТЕНД РАЗРАБОТЧИК'],
                            autoStart: true,
                            loop: true,
                            delay: 100,
                        }}
                    />
                </SC.MainTitle>
                <SC.Name>Саша Калитеня</SC.Name>
            </SC.MeTextContent>
            <SC.Avatar src={avatar} alt="frontend"/>
        </SC.MeContainer>
    );
};
