"use client";
import {
  Layout,
  Slider,
  // OurServices,
  // Cities,
  Trends,
  HowItWorks,
  ExploreDestination,
  Experiences,
  MeetourKreators
} from "@/app/components/index";

const Homepage = () => {
  return (
    <Layout>
      <div className="mainWraper text-white">
        <div className="homeHeroBanner">
          <div className="container-fluid">
            <Slider />
          </div>
        </div>
        <div className="trendSection gray-bg">
            <Trends />
        </div>

        <div className="howItWorks">
            <HowItWorks />
        </div>

        <div className="destination">
            <ExploreDestination />
        </div>

        <div className="meetourKreators">
            <MeetourKreators />
        </div>
        
        <div className="digitalExplore">
            <Experiences />
        </div>

     

        </div>
    </Layout>
  );       
}
export default Homepage