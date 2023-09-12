"use client";
import Link from "next/link";

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
            <div className="container">
                <div className="pb-5">
                    <h2>Trending experiences in Saudi Arabia</h2>
                    <p>Check the latest experiences in Saudi Arabia</p>
                </div>
            </div>
            <Trends />
            <div className="text-center mt-5">
                <Link href={'#'} className="btn exploreMore">
                    Explore more
                </Link>
            </div>
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