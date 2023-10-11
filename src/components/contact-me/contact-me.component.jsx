import Message from "./../contact-me-components/message/message.component";
import Info from "./../contact-me-components/info/info.component";
import './contact-me.styles.css'
function ContactMe() {
  return (
    <div className="contact-me-container">
      <Message />
      <Info />
    </div>
  );
}

export default ContactMe;
