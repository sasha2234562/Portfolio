import * as SC from './projects.style.ts'
import project from '../../../../../assets/project.png'
import team from '../../../../../assets/projects/team.jpg'
import sporder from '../../../../../assets/projects/sporder.png'
import {SectionTitle} from "../../../ui";
import {Project} from "./components/project.tsx";
import {Section} from "../../../ui";

export const Projects = () => {
    return (
        <Section>
            <SectionTitle title={'Проекты'}/>
            <SC.ProjectsWrapper>
                <Project titleProject={'Sporder.by'} logo={sporder as string}
                         instrument={['TypeScript', 'React', 'Redux', 'React Hook Form', 'Axios', 'React-Router-Dom', 'Emotion',]}
                         description={'Проект Sporder.by создан специально для того, чтобы упростить вам поиск и ' +
                             'бронирование спортивных объектов в Беларуси.'}/>
                <Project titleProject={'My team'} logo={team as string}
                         instrument={['TypeScript', 'React', 'Redux', 'Axios', 'Formik', 'React-Router-Dom']}
                         description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat\n' +
                             '                    duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}/>
                <Project titleProject={'TITLE PROJECT'} logo={project as string}
                         instrument={['Javascript', 'Javascript', 'Javascript', 'Javascript',]}
                         description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat\n' +
                             '                    duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}/>
                <Project titleProject={'TITLE PROJECT'} logo={project as string}
                         instrument={['Javascript', 'Javascript', 'Javascript', 'Javascript',]}
                         description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat\n' +
                             '                    duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}/>
            </SC.ProjectsWrapper>
        </Section>
    );
};
