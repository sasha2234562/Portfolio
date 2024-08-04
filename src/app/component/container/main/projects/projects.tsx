import * as SC from './projects.style.ts'
import action from '../../../../../assets/projects/actions-list.png'
import team from '../../../../../assets/projects/team.jpg'
import sporder from '../../../../../assets/projects/sporder.png'
import {SectionTitle} from "../../../ui";
import {Project} from "./components/project.tsx";
import {Section} from "../../../ui";

export const Projects = () => {
    return (
        <Section>
            <SectionTitle title={'Проекты'} id={'projects'}/>
            <SC.ProjectsWrapper>
                <Project link={'https://sporder.by/'} titleProject={'Sporder.by'} logo={sporder as string}
                         instrument={['TypeScript', 'React', 'Redux', 'React Hook Form', 'Axios', 'React-Router-Dom', 'Emotion',]}
                         description={'Проект Sporder.by создан специально для того, чтобы упростить вам поиск и ' +
                             'бронирование спортивных объектов в Беларуси.'}/>
                <Project link={'https://sasha2234562.github.io/my-team'} titleProject={'My team'} logo={team as string}
                         instrument={['TypeScript', 'React', 'Redux', 'Axios', 'Formik', 'React-Router-Dom']}
                         description={'My-Team - это удобное приложение со списком команд, которое предоставляет вам всю ' +
                             'необходимую информацию о вашей команде на одной платформе. ' +
                             'В приложении My-Team вы можете увидеть список всех команд, в которых вы состоите или' +
                             ' которыми управляете. Каждая команда имеет свой профиль, где вы найдете информацию о ' +
                             'членах команды, их контактных данных, ролях и ответственностях.'}/>
                <Project link={'https://sasha2234562.github.io/Action-List'} titleProject={'Action-List'} logo={action as string}
                         instrument={['TypeScript', 'React', 'Redux', 'Axios', 'Formik', 'React-Router-Dom']}
                         description={'Action-List - это мощное приложение для управления задачами, которое помогает отдельным ' +
                             'пользователям и командам быть организованными, сосредоточенными и продуктивными. ' +
                             'Благодаря интуитивному интерфейсу и обширному набору функций, Action-List предоставляет ' +
                             'простой и эффективный способ управлять задачами и достигать целей.\n' +
                             '\n'}/>
            </SC.ProjectsWrapper>
        </Section>
    );
};
