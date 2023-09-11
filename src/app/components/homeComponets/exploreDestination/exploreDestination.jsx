import Link  from 'next/link';
import { CitiesCards } from "@/app/components/index";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

const ExploreDestination = () => {
    const items = [
        {
          src: "/assets/images/destinations/des1.png",
          title: "Saudi Arabia",
          path: "meetAndGreet",
        },
        {
          src: "/assets/images/destinations/des2.png",
          title: "Europe",
          path: "meetAndGreet",
        },
        {
          src: "/assets/images/destinations/des3.png",
          title: "Discover the Gulf of Aqaba in Neom",
          path: "meetAndGreet",
        },
        {
          src: "/assets/images/destinations/des4.png",
          title: "Africa",
          path: "meetAndGreet",
        },
        {
          src: "/assets/images/cards/image5.png",
          title: "Discover the Gulf of Aqaba in Neom",
          path: "meetAndGreet",
        },
        {
          src: "/assets/images/cards/image6.png",
          title: "Discover the Gulf of Aqaba in Neom",
          path: "meetAndGreet",
        },
        {
          src: "/assets/images/cards/image7.png",
          title: "Discover the Gulf of Aqaba in Neom",
          path: "meetAndGreet",
        },
        {
          src: "/assets/images/cards/image8.png",
          title: "Discover the Gulf of Aqaba in Neom",
          path: "meetAndGreet",
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
                <h2>Explore by destination</h2>
                <p>Every corner of the world is up for grabs.</p>
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
