import Link  from 'next/link';
import { CitiesCards } from "../../index";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });
import { useTranslations } from 'next-intl';


const ExploreDestination = () => {
    const { t } = useTranslations('Index');
    const items = [
        {
          src: "/assets/images/destinations/des1.png",
          title: `${t("saudi_arabia")}`,
          path: "explore",
        },
        {
          src: "/assets/images/destinations/des2.png",
          title: `${t("europe")}`,
          path: "explore",
        },
        {
          src: "/assets/images/destinations/des3.png",
          title: `${t("discover_the_gulf_of_aqaba_in_neom")}`,
          path: "explore",
        },
        {
          src: "/assets/images/destinations/des4.png",
          title: `${t("africa")}`,
          path: "explore",
        },
        {
          src: "/assets/images/cards/image5.png",
          title: `${t("discover_the_gulf_of_aqaba_in_neom")}`,
          path: "explore",
        },
        {
          src: "/assets/images/cards/image6.png",
          title: `${t("discover_the_gulf_of_aqaba_in_neom")}`,
          path: "explore",
        },
        {
          src: "/assets/images/cards/image7.png",
          title: `${t("discover_the_gulf_of_aqaba_in_neom")}`,
          path: "explore",
        },
        {
          src: "/assets/images/cards/image8.png",
          title: `${t("discover_the_gulf_of_aqaba_in_neom")}`,
          path: "explore",
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
            items: 4,
            // stagePadding:40
          },
        },
      };
    
    return (
        <div className='destinationWraper'>
        <div className="container">
            <div className="title pb-5">
                <h2>{t("explore_by_destination")}</h2>
                <p>{t("every_corner")}</p>
            </div>
        </div>
        <div className="container-fluid">

             <OwlCarousel className="owl-theme" items={4} loop smartSpeed={1050} margin={15}  dots={false} nav  {...options}>
                 {items.map((card, index) => (
                    <div className="cardOfCity" key={index} data-aos="flip-left">
                        <CitiesCards src={card.src} title={card.title} path={card.path}  />
                    </div>
                ))}
            </OwlCarousel>

        </div>
        <div className="text-center mt-5">
            {/* <Link href="a" className="btn exploreMore">
                Explore more
            </Link> */}
        </div>
    </div>

    );
}

export default ExploreDestination;
