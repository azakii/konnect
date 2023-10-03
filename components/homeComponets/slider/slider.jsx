import "owl.carousel/dist/assets/owl.carousel.css"; 
import "owl.carousel/dist/assets/owl.theme.default.css";
// import Link from "next/link";
import {Cards, SearchBlock} from "../../index";

import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });
import { useTranslations } from 'next-intl';


const Slider = () => {
  const t = useTranslations('Index');
  const items = [
    {
      src: "/assets/images/cards/image1.png",
      src2: "/assets/images/cards/image4.png",
      title: `${t("discover_the_gulf_of_aqaba_in_neom")}`,
      path: "profile",
      profileLink: "profile",
      location: `${t("saudi_arabia_jeddah")}`,
      days: 3,
      profileImg:  "/assets/images/profiles/pro1.png",
      price: 20,
    },
    {
      src: "/assets/images/cards/image2.png",
      src2: "/assets/images/cards/image5.png",
      title: `${t("discover_the_gulf_of_aqaba_in_neom")}`,
      path: "profile",
      location: `${t("saudi_arabia_jeddah")}`,
      days: 3,
      profileImg:  "/assets/images/profiles/pro1.png",
      price: 20,
    },
    {
      src: "/assets/images/cards/image3.png",
      src2: "/assets/images/cards/image1.png",
      title: `${t("discover_the_gulf_of_aqaba_in_neom")}`,
      path: "profile",
      profileLink: "profile",
      location: `${t("saudi_arabia_jeddah")}`,
      days: 3,
      profileImg:  "/assets/images/profiles/pro1.png",
      price: 20,
    },
    {
      src: "/assets/images/cards/image4.png",
      src2: "/assets/images/cards/image1.png",
      title: `${t("discover_the_gulf_of_aqaba_in_neom")}`,
      path: "profile",
      profileLink: "profile",
      location: `${t("saudi_arabia_jeddah")}`,
      days: 3,
      profileImg:  "/assets/images/profiles/pro1.png",
      price: 20,
    },
    {
      src: "/assets/images/cards/image5.png",
      src2: "/assets/images/cards/image2.png",
      title: `${t("discover_the_gulf_of_aqaba_in_neom")}`,
      path: "profile",
      profileLink: "profile",
      location: `${t("saudi_arabia_jeddah")}`,
      days: 3,
      profileImg:  "/assets/images/profiles/pro1.png",
      price: 20,
    }
  ];
  const options = {
    responsive: {
      0: {
        items: 1,
        stagePadding:0
      },
      450: {
        items: 1,
        // stagePadding:0
      },
      600: {
        items: 1,
        // stagePadding:0
      },
      1000: {
        items: 2,
        // stagePadding:100
      },
      1200: {
        items: 3,
        // stagePadding:40
      },
    },
  };
  return (
    <>
    <div className="slider row justify-content-center align-items-center py-5">
    <div className="col-md-4">
      <div className="p-4">
      <div className="caption mb-5">
        <h1><span>{t("travel_redefined")}</span> {t("a_community_of_travelers")}</h1>
        <p> {t("konnect_is_a_community")} </p>
      </div>  

      <SearchBlock />

      </div>
    </div>
    <div className="col-md-8">
          <OwlCarousel className="owl-theme" items={3} loop smartSpeed={1050} margin={15}  dots={false} nav {...options}>
            {items.map((card, index) => (
              <div className={`item`} key={index}>
                        <Cards src={card.src} title={card.title} path={card.path}  location={card.location} days={card.days} profilePath={card.profileLink} hover={card.src2} profileImg={card.profileImg} price={card.price} />
              </div>
            ))}
          </OwlCarousel>
    </div>
  </div>
  </>
   
  );
};

export default Slider;
