"use client";

import {Layout, Trends} from "@/app/components/index";
import Hero from "../../../../public/assets/images/board.png";
import Stars from "../../../../public/assets/images/stars.png";
import profileimg from "../../../../public/assets/images/profileimg.png";

import chield from "../../../../public/assets/images/chield.png";
import homeIcon from "../../../../public/assets/images/hhome.png";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

const Homepage = () => {
  return (
    <Layout>
        <div className="heroBanner xs-view">
            <Image
            src={Hero}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto', backgroundSize: 'cover' }}
            alt="" />
        </div>

       <div className="container-fluid">
        <div className="row">
            <div className="col-md-4 lightGreen pt-5">
                <div className="sticky-top pt-5 pb-5">
                    <div className="align-items-center profile d-flex justify-content-center flex-column text-center">
                        <Image
                        src={profileimg}
                        width={250}
                        height={250}
                        className="my-auto"
                        alt="" />
                        <div className="title mt-4 ">
                            <h1 className="text-center">sami khiary</h1>
                            <p className="text-center mb-0">Certified tour guide in KSA</p>
                        </div>
                        <Image
                        src={Stars}
                        width={0}
                        height={0}
                        className="rate mb-5"
                        alt="" />
                    </div>
                    <div className="info mb-4">
                        <h6>
                        <Image
                        src={homeIcon}
                        width={24}
                        height={24}
                        alt=""  className="mr-3 ico"/>Mujammah, Jeddah, Saudi Arabia</h6>
                        <h6><Image
                        src={chield}
                        width={28}
                        height={28}
                        alt=""  className="mr-3 ico" />Identity Verified</h6>
                        <div className="bio mt-3 mb-3">
                            <p>“Hello all!I am a global traveler from Saudi Arabia. I am a travel guide author and photographer who loves to discover the beautiful unknown places of this world.”</p>
                        </div>
                    </div>

                    <div className="travelStyle">
                        <h4 className="text-green">Travel Style</h4>
                        <ul>
                            <li>
                                <span className="badge badge-pill badge-light">History</span>
                            </li>
                            <li>
                                <span className="badge badge-pill badge-light">People & Culture</span>
                            </li>
                            <li>
                                <span className="badge badge-pill badge-light">Art</span>
                            </li>
                            <li>
                                <span className="badge badge-pill badge-light">Food</span>
                            </li>
                            <li>
                                <span className="badge badge-pill badge-light">Family</span>
                            </li>
                            <li>
                                <span className="badge badge-pill badge-light">Budget</span>
                            </li>
                        </ul>
                    </div>
                    <div className="travelStyle">
                        <h4 className="text-green">Destinations</h4>
                        <ul>
                            <li>
                                <span className="badge badge-pill badge-light">Jedda, Saudi Arabia</span>
                            </li>
                            <li>
                                <span className="badge badge-pill badge-light">Stepantsminda, Georgia</span>
                            </li>
                        </ul>
                    </div>

                    <div className="travelStyle">
                        <h4 className="text-green">Follow me </h4>
                        <ul>
                            <li>
                                <BsLinkedin />
                            </li>
                            <li>
                                <BsInstagram />
                            </li>
                        </ul>
                    </div>

                    <div className="travelStyle">
                        <h4 className="text-green">Travel Consultation call </h4>
                        <p className="fs-small">40 minute consultation call</p>

                        <p>A casual chat to  answer questions regarding your trip to Italy like: which regions or cities to visit, how</p>
                        {/* <div className="text-right"><Link href='profile' className="text-green">More details</Link><div></div> */}
                    </div>
                </div>
            </div>
            <div className="col-md-8 p-0">

                <div className="heroBanner lg-view">
                    <Image
                    src={Hero}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto', backgroundSize: 'cover' }}
                    alt="" />
                </div>
                {/* tab */}
                <div className="mystore mt-5">
                    <div className="container">
                        <h2 className="text-center">My store</h2>
                        <div className="">
                            <div className="trendSection">
                                <Trends />
                            </div>
                        </div>
                    </div>
                </div>
                {/* end */}
            </div>
        </div>
        </div>
    </Layout>
  );       
}
export default Homepage