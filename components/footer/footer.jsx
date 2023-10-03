import Link from "next/link";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import Image from "next/image";
import konnect from "@/public/assets/images/footerLogo.svg";
import { useTranslations } from 'next-intl';



const Footer = () => {
  const t = useTranslations('Index');
  const AboutLinks = [
    {
      path: "Home",
      display: `${t("home")}`,
    },
    {
      path: "how-it-works",
      display: `${t("share")}`,
    },
    {
      path: "kreatoe-portal",
      display: `${t("faqs")}`,
    },
    {
      path: "guest",
      display: `${t("terms_of_service")}`
    },
    {
      path: "guest",
      display: `${t("privacy_policy")}`
    }
  ];

  const ExploreLinks = [
    {
      path: "Help",
      display: `${t("marketplace")}`
    },
    {
      path: "Contact us",
      display: `${t("all_experiences")}`
    },
    {
      path: "/Terms",
      display: `${t("by_destination")}`
    },
    {
      path: "Privacy",
      display: `${t("by_interest")}`
    },
  ];
  const SupportLinks = [
    {
      path: "Help",
      display: `${t("experience_basics")}`
    },
    {
      path: "Contact us",
      display: `${t("how_to_videos")}`
    },
    {
      path: "/Terms",
      display: `${t("digital_sample")}`
    },
    {
      path: "Privacy",
      display: `${t("guided_sample")}`
    },  
    {
      path: "Privacy",
      display: `${t("contact_us")}`
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
            <h4>{t("services")}</h4>
            <ul className="list-unstyled text-white">
              {AboutLinks.map((item, index) => (
                <li key={index}>
                  <Link href={`/`}>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col">
            <h4>{t("Explore")}</h4>
            <ul className="list-unstyled text-white mb-5">
              {ExploreLinks.map((item, index) => (
                <li key={index}>
                  <Link href={`/`}>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col">
            <h4>{t("support")}</h4>
            <ul className="list-unstyled text-white mb-5">
              {SupportLinks.map((item, index) => (
                <li key={index}>
                  <Link href={`/`}>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col">
            <h4>{t("stay_connected")}</h4>

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
