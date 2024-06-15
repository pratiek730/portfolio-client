import { skillDisplay } from "../../assets/icons/skills.icons";

import "./skills-large.styles.css";

function SkillsLarge() {
  return (
    <div className="skills-large-container">
      <div className="skills-large-title">What I can do</div>
      <div className="skills-large-list-container">
        {skillDisplay.map((data) => (
          // key={data.id}
          // icon={data.image}
          // title={data.title}
          // description={data.subtitle}
          <div className="skills-large-item" key={data.id}>
            <img src={data.image} className="skills-large-item-icon"></img>
            <div className="skills-large-item-content">
              <div className="skills-large-item-title">{data.title}</div>
              <div className="skills-large-item-subtitle">{data.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsLarge;
