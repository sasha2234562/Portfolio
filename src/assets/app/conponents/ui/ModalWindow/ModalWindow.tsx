import {FC} from "react";
import * as SC from "./ModalWindow.style.ts";
import Icon from "../Icon/Icon.tsx";
import {ModalWindowProps} from "./ModalWindow.type.ts";

const ModalWindow: FC<ModalWindowProps> = ({text, title, active, blur}) => {
    return (
        <SC.Container active={active}>
            <SC.TextWrapper active={active}>
                <SC.Title>{title}</SC.Title>
                {text}
                <SC.Exit onClick={blur}>
                    <Icon IconId={'exit'} height={'24rem'} width={'24rem'}/>
                </SC.Exit>
            </SC.TextWrapper>
        </SC.Container>
    );
};

export default ModalWindow;