import Intro from "../../components/intro/intro.component";
import SkillsLarge from "../../components/skills-large/skills-large.component";
// import Skills from "../../components/skills/skills.component";
import './about-page.styles.css'

function AboutPage() {
    return ( 
        <div className="about-page">
            <Intro />
            <SkillsLarge />
        </div>
     );
}

export default AboutPage;