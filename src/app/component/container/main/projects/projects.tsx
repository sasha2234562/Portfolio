import * as SC from './projects.style.ts'
import project from '../../../../../assets/project.png'
import {SectionTitle} from "../../../ui";
import {Project} from "./components/project.tsx";
import {Section} from "../../../ui";

export const Projects = () => {
    return (
        <Section>
            <SectionTitle title={'Projects'}/>
            <SC.ProjectsWrapper>
                <Project titleProject={'TITLE PROJECT'} logo={project as string}
                         instrument={['Javascript', 'Javascript', 'Javascript', 'Javascript',]}
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
                <Project titleProject={'TITLE PROJECT'} logo={project as string}
                         instrument={['Javascript', 'Javascript', 'Javascript', 'Javascript',]}
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
