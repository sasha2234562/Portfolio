import {FC} from "react";
import * as SC from "./ModalWindow.style.ts";
import {ModalWindowProps} from "./ModalWindow.type.ts";
import Icon from "../Icon/Icon.tsx";
const ModalWindow: FC<ModalWindowProps> = ({text, title, active, blur}) => {
    return (
        <SC.Container active={active}>
            <SC.TextWrapper active={active}>
                <SC.Title>{title}</SC.Title>
                {text}
                <SC.Exit onClick={blur}>
                    <Icon IconId={'exit'} height={'24px'} width={'24px'}/>
                </SC.Exit>
            </SC.TextWrapper>
        </SC.Container>
    );
};

export default ModalWindow;