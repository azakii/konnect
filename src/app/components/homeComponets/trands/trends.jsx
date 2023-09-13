import { Cards } from '@/app/components/index';
import Link  from 'next/link';

const Trends = () => {

    const items = [
        {
          src: "/assets/images/cards/image1.png",
          src2:  "/assets/images/cards/image2.png",
          title: "Discover the Gulf of Aqaba in Neom",
          path: "profile",
          profileLink: "profile",
          location: "Saudi Arabia, Jeddah",
          days: 3,
          profileImg:  "/assets/images/profiles/pro1.png",
          price: 20,
        },
        {
          src: "/assets/images/cards/image2.png",
          src2:  "/assets/images/cards/image1.png",
          title: "Discover the Gulf of Aqaba in Neom",
          path: "profile",
          profileLink: "profile",
          location: "Saudi Arabia, Jeddah",
          days: 3,
          profileImg:  "/assets/images/profiles/pro2.png",
          price: 20,
        },
        {
          src: "/assets/images/cards/image3.png",
          src2:  "/assets/images/cards/image1.png",
          title: "Discover the Gulf of Aqaba in Neom",
          path: "profile",
          profileLink: "profile",
          location: "Saudi Arabia, Jeddah",
          days: 3,
          profileImg:  "/assets/images/profiles/pro3.png",
          price: 20,
        },
        {
          src: "/assets/images/cards/image4.png",
          src2:  "/assets/images/cards/image2.png",
          title: "Discover the Gulf of Aqaba in Neom",
          path: "profile",
          profileLink: "profile",
          location: "Saudi Arabia, Jeddah",
          days: 3,
          profileImg:  "/assets/images/profiles/pro4.png",
          price: 20,
        },
        {
          src: "/assets/images/cards/image5.png",
          src2:  "/assets/images/cards/image1.png",
          title: "Discover the Gulf of Aqaba in Neom",
          path: "profile",
          profileLink: "profile",
          location: "Saudi Arabia, Jeddah",
          days: 3,
          profileImg:  "/assets/images/profiles/pro5.png",
          price: 20,
        },
        {
          src: "/assets/images/cards/image6.png",
          src2:  "/assets/images/cards/image3.png",
          title: "Discover the Gulf of Aqaba in Neom",
          path: "profile",
          profileLink: "profile",
          location: "Saudi Arabia, Jeddah",
          days: 3,
          profileImg:  "/assets/images/profiles/pro6.png",
          price: 20,
        },
        {
          src: "/assets/images/cards/image7.png",
          src2:  "/assets/images/cards/image6.png",
          title: "Discover the Gulf of Aqaba in Neom",
          path: "profile",
          profileLink: "profile",
          location: "Saudi Arabia, Jeddah",
          days: 3,
          profileImg:  "/assets/images/profiles/pro7.png",
          price: 20,
        },
        {
          src: "/assets/images/cards/image8.png",
          src2:  "/assets/images/cards/image6.png",
          title: "Discover the Gulf of Aqaba in Neom",
          path: "profile",
          profileLink: "profile",
          location: "Saudi Arabia, Jeddah",
          days: 3,
          profileImg:  "/assets/images/profiles/pro8.png",
          price: 20,
        }
      ];

      
    return (
        <div className='trends'>
            <div className="container-fluid">
                <div className="row">
                    {items.map((card, index) => (
                        <div className="col-md-3 my-4" key={index} >
                            <Cards src={card.src} title={card.title} path={card.path}  location={card.location} days={card.days} profilePath={card.profileLink} hover={card.src2} profileImg={card.profileImg} price={card.price} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Trends;
