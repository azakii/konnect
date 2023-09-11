import Link from "next/link";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import Image from "next/image";
import konnect from "../../../../public/assets/images/footerLogo.svg";


const AboutLinks = [
  {
    path: "Home",
    display: "What is Konnect",
  },
  {
    path: "how-it-works",
    display: "How Konnect Works",
  },
  {
    path: "kreatoe-portal",
    display: "FAQs",
  },
  {
    path: "guest",
    display: "Terms of Service",
  },
  {
    path: "guest",
    display: "Privacy Policy",
  }
];

const ExploreLinks = [
  {
    path: "Help",
    display: "Marketplace",
  },
  {
    path: "Contact us",
    display: "All Experiences",
  },
  {
    path: "/Terms",
    display: "By Destination",
  },
  {
    path: "Privacy",
    display: "By Interest",
  },
];
const SupportLinks = [
  {
    path: "Help",
    display: "Experience Basics",
  },
  {
    path: "Contact us",
    display: "How-to Videos",
  },
  {
    path: "/Terms",
    display: "Digital Sample",
  },
  {
    path: "Privacy",
    display: "Guided Sample",
  },  
  {
    path: "Privacy",
    display: "Contact us",
  },
];
const socialLinks = [
  {
    link: "www.linkedin.com",
    platform: "LinkedIn",
    icon: <BsLinkedin />,
  },
  {
    path: "www.instagram.com",
    platform: "instagram",
    icon: <BsInstagram />,
  },
];

const Footer = () => {
  return (
    <footer className={`footer bg-dark pt-5 pb-5`}>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className={`f_logo`}>
                  <Image 
                    src={konnect} 
                    width={230} 
                    height={65} 
                    className="card-img-top" 
                    alt="src" />
            </div>
          </div>
          <div className="col">
            <h4>Services</h4>
            <ul className="list-unstyled text-white">
              {AboutLinks.map((item, index) => (
                <li key={index}>
                  <Link href={`/`}>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col">
            <h4>Explore</h4>
            <ul className="list-unstyled text-white mb-5">
              {ExploreLinks.map((item, index) => (
                <li key={index}>
                  <Link href={`/`}>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col">
            <h4>Support</h4>
            <ul className="list-unstyled text-white mb-5">
              {SupportLinks.map((item, index) => (
                <li key={index}>
                  <Link href={`/`}>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col">
            <h4>Stay Connected</h4>

            <ul className="list-unstyled text-white d-flex">
              {socialLinks.map((social, index) => (
                <li key={index} className="p-2">
                  <Link href={`${socialLinks.link}`} className="sociallink">
                    {social.icon}
                  </Link>
                </li>
              ))}
              <li className="p-2">
                  <Link href={`${socialLinks.link}`} className="sociallink">
                  </Link>
                </li>
            </ul>
       
          </div>
        </div>
      </div>
    
    </footer>
  );
};

export default Footer;
