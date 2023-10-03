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
} from "../../components/index";
// import {useTranslations} from 'next-intl';
// import { useTranslation } from "react-i18next";
import { useTranslations } from "next-intl";

const Homepage = () => {
  const t = useTranslations('Index');
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
                    <h2>{t("trending_experiences_in_saudi_arabia")}</h2>
                    <p>{t("check_the_latest_experiences_in_saudi_arabia")}</p>
                </div>
            </div>
            <Trends />
            <div className="text-center mt-5">
                <Link href={'#'} className="btn exploreMore">
                {t("explore_more")}
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