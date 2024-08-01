import './App.css'
import {Header} from "./component/container/header/header.tsx";
import {Me} from "./component/container/main/me/me.tsx";
import {AboutMe} from "./component/container/main/about-me/about-me.tsx";
import {Projects} from "./component/container/main/projects/projects.tsx";
import {Skills} from "./component/container/main/skills/skills.tsx";
import {ContactWithMe} from "./component/container/main/contact-with-me/contact-with-me.tsx";
import {Footer} from "./component/container/footer/footer.tsx";

function App() {

    return (
        <main>
            <Header/>
            <Me/>
            <AboutMe/>
            <Projects/>
            <Skills/>
            <ContactWithMe/>
            <Footer/>
        </main>
    )
}

export default App
