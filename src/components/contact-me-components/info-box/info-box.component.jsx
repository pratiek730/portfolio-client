import "./info-box.styles.css";
function InfoBox({ title, icon, text, link }) {
  return (
    <a href={link} className="contact-me-link">
      <div className="infobox-container">
        <div className="title-container">
          <img src={icon} alt="icon" className="infobox-icon" />
          <div className="title"> {title} </div>
        </div>
        <div className="subTitle"> {text} </div>
      </div>
    </a>
  );
}

export default InfoBox;
