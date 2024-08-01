import * as SC from './social-network.style.ts';
import {FC} from "react";

interface SocialNetworkInterface {
    label: string
    icon: string
    link: string
}

export const SocialNetwork: FC<SocialNetworkInterface> = ({label, link, icon}) => {
    return (
        <SC.Wrapper href={link} target={'_blank'} rel="noreferrer">
            <SC.Icon src={icon} alt={label} title={link}/>
            <span>{label}</span>
        </SC.Wrapper>
    );
};
