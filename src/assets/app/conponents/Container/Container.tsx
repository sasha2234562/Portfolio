import AboutMe from "./AboutMe/AboutMe";
import Main from "./Main/Main";
import Links from "./Links/Links";
import Line from "./Line/Line";
import Relume from "./Relume/Relume";
import Header from "./Header/Header";
import {ContainerStyle} from "./Container.style.ts";
import Skills from "./Skills/Skills.tsx";
import {Works} from "./Works/Works.tsx";

const Container = () => {

    return (
        <ContainerStyle>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <AboutMe/>
            <Links/>
            <Line/>
            <Relume/>
        </ContainerStyle>
    );
};

export default Container;