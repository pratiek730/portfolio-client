import './info.styles.css'
import LocationPin from '../../../assets/contactPageIcons/infoIcons/location-dot-solid.svg'
import LegalBreif from '../../../assets/contactPageIcons/infoIcons/briefcase-solid.svg'
import MobilePhone from '../../../assets/contactPageIcons/infoIcons/mobile-button-solid.svg'
import InfoBox from '../info-box/info-box.component';

const InfoData = [
    {
        title: 'My Location',
        text: 'Kamanhalli,\nBanglore,\nKarnataka',
        icon: LocationPin,
        link: 'https://www.google.com/maps/place/Kammanahalli,+Bengaluru,+Karnataka/@13.0158166,77.6297279,15.48z/data=!4m6!3m5!1s0x3bae17214bace327:0x83b524848c6e13d2!8m2!3d13.0159044!4d77.6378619!16s%2Fg%2F1hf_chwyg?entry=ttu'
    },
    {
        title: 'Message me on Whatsapp',
        text: 'Pratiek Parasahr\n+91 9027424945',
        icon: MobilePhone,
        link: 'https://wa.me/919027424945'
    },
    {
        title: 'mail Me at',
        text: 'pratiek.parashar@gmail.com\nprateek.parashar730@gmail.com',
        icon: LegalBreif,
        link: 'mailto:pratiek.parashar@gmail.com'
    }
]

function Info() {
    return ( 
        <div className="info-container">
            {InfoData.map((infoItem, index) => (
                <InfoBox icon={infoItem.icon} title={infoItem.title} text={infoItem.text} key={index} link={infoItem.link} />
            ))}
        </div>
     );
}

export default Info;