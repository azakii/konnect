import "owl.carousel/dist/assets/owl.carousel.css"; 
import "owl.carousel/dist/assets/owl.theme.default.css";
// import Link from "next/link";
import {Cards, SearchBlock} from "@/app/components/index";

import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

const items = [
  {
    src: "/assets/images/cards/image1.png",
    title: "Discover the Gulf of Aqaba in Neom",
    path: "meetAndGreet",
    location: "Saudi Arabia, Jeddah",
    days: 3,
    profileImg:  "/assets/images/profiles/pro1.png",
    price: 20,
  },
  {
    src: "/assets/images/cards/image2.png",
    title: "Discover the Gulf of Aqaba in Neom",
    path: "meetAndGreet",
    location: "Saudi Arabia, Jeddah",
    days: 3,
    profileImg:  "/assets/images/profiles/pro1.png",
    price: 20,
  },
  {
    src: "/assets/images/cards/image3.png",
    title: "Discover the Gulf of Aqaba in Neom",
    path: "meetAndGreet",
    location: "Saudi Arabia, Jeddah",
    days: 3,
    profileImg:  "/assets/images/profiles/pro1.png",
    price: 20,
  },
  {
    src: "/assets/images/cards/image4.png",
    title: "Discover the Gulf of Aqaba in Neom",
    path: "meetAndGreet",
    location: "Saudi Arabia, Jeddah",
    days: 3,
    profileImg:  "/assets/images/profiles/pro1.png",
    price: 20,
  },
  {
    src: "/assets/images/cards/image5.png",
    title: "Discover the Gulf of Aqaba in Neom",
    path: "meetAndGreet",
    location: "Saudi Arabia, Jeddah",
    days: 3,
    profileImg:  "/assets/images/profiles/pro1.png",
    price: 20,
  }
];


const Slider = () => {
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
        <h1><span>Travel Redefined</span> A Community of Travelers</h1>
        <p>Konnect is a community-driven platform that allows travelers to develop and sell their experiences to other travelers. </p>
      </div>  

      <SearchBlock />

      </div>
    </div>
    <div className="col-md-8">
          <OwlCarousel className="owl-theme" items={3} loop smartSpeed={1050} margin={15}  dots={false} nav {...options}>
            {items.map((card, index) => (
              <div className={`item`} key={index}>
                <Cards src={card.src} title={card.title} path={card.path}  location={card.location} days={card.days} profileImg={card.profileImg} price={card.price} />
              </div>
            ))}
          </OwlCarousel>
    </div>
  </div>
  </>
   
  );
};

export default Slider;
