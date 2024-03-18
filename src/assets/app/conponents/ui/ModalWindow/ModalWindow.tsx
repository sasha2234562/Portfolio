import {FC} from "react";
import {Container, Exit, TextWrapper} from "./ModalWindow.style.ts";
import Icon from "../Icon/Icon.tsx";

interface  ModalWindowProps{
    text: string
    active: boolean
    blur: ()=> void
}
const ModalWindow:FC<ModalWindowProps> = ({text, active, blur}) => {
    return (
        <Container active={active}>
            <TextWrapper active={active}>
                    {text}
                <Exit onClick={blur}>
                    <Icon IconId={'exit'} height={'24px'} width={'24px'}/>
                </Exit>
            </TextWrapper>
        </Container>
    );
};

export default ModalWindow;