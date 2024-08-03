import * as SC from './about-me.style.ts'
import {SectionTitle} from "../../../ui";
import {Section} from "../../../ui";

export const AboutMe = () => {
    return (
        <Section>
            <SectionTitle title={'Обо мне'}/>
            <SC.AboutMeTextWrapper>
                <SC.Line></SC.Line>
                <SC.AboutMeText>
                    Я являюсь опытным фронтенд-разработчиком с более чем годом практического опыта в создании SPA
                    (Single Page Applications) с использованием React, Next.js, Redux и TypeScript. Я обладаю навыками
                    проверки и отладки пользовательского интерфейса, а также хорошо знаком с процессами разработки.
                    Я постоянно совершенствую свои навыки в этой области и стремлюсь расширить их с помощью новых
                    технологий, таких как Angular. Я также уделяю свободному времени чтение IT-литературы, особенно в
                    области JavaScript, CSS, чтобы быть в курсе последних тенденций и передовых подходов.
                    Я открыт для новых предложений и готов принять вызовы, связанные с разработкой фронтенда. Буду рад
                    принять участие в интересных проектах и внести свой вклад в их успех.
                </SC.AboutMeText>
            </SC.AboutMeTextWrapper>
        </Section>
    );
};
