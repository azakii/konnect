"use client";
// import Link from "next/link";
import Image from "next/image";
import {Layout} from "@/app/components/index";
import Hero from "../../../../public/assets/images/board.png";
import Stars from "../../../../public/assets/images/stars.png";
import profileimg from "../../../../public/assets/images/profileimg.png";

import chield from "../../../../public/assets/images/chield.png";
import homeIcon from "../../../../public/assets/images/hhome.png";
import { BsLinkedin, BsInstagram } from "react-icons/bs";


const Homepage = () => {
  return (
    <Layout>
        <div className="heroBanner">
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
            <div className="col-md-4 lightGreen">
                <div className="profile d-flex justify-content-center flex-column text-center">
                    <Image
                    src={profileimg}
                    width={250}
                    height={250}
                    className="my-auto"
                    alt="" />
                    <h1 className="text-center">sami khiary</h1>
                    <p className="text-center">Certified tour guide in KSA</p>
                    <Image
                    src={Stars}
                    width={0}
                    height={0}
                    alt="" />
                </div>
                <div className="info">
                    <h6>
                    <Image
                    src={homeIcon}
                    width={24}
                    height={24}
                    alt=""  className="mr-3"/>Mujammah, Jeddah, Saudi Arabia</h6>
                    <h6><Image
                    src={chield}
                    width={28}
                    height={28}
                    alt=""  className="mr-3" />Identity Verified</h6>
                </div>

                <div className="travelStyle">
                    <h2 className="text-green">Travel Style</h2>
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
                    <h2 className="text-green">Destinations</h2>
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
                    <h2 className="text-green">Follow me </h2>
                    <ul>
                        <li>
                            <BsLinkedin />
                        </li>
                        <li>
                            <BsInstagram />
                        </li>
                    </ul>
                </div>
                <div className="text-center mt-5 mb-5"><a className="btn exploreMore fs-6" href="#">Book a consultation call with me</a></div>
            </div>
            <div className="col-md-8">
                {/* tab */}
                <div className="tabs mt-5">
                <div className="container">
                <ul className="nav nav-tabs mb-3 col-md-8 m-auto justify-content-center" id="ex1" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a
                            className="nav-link active"
                            id="travelers-tab-1"
                            data-bs-toggle="tab"
                            href="#travelers-tabs-1"
                            role="tab"
                            aria-controls="travelers-tabs-1"
                            aria-selected="true"
                            >My store</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a
                            className="nav-link"
                            id="kreators-tab-2"
                            data-bs-toggle="tab"
                            href="#kreators-tabs-2"
                            role="tab"
                            aria-controls="kreators-tabs-2"
                            aria-selected="false"
                            >About</a>
                        </li>
                    </ul>
                    </div>
                    <div className="tab-content" id="ex1-content">
                            <div
                                className="tab-pane fade show active"
                                id="travelers-tabs-1"
                                role="tabpanel"
                                aria-labelledby="ex1-tab-1">
                                        <h3>About Sami</h3>
                                        <h6>Hello all! I am a global traveler from Saudi Arabia. I am a travel guide author and photographer who loves to discover the beautiful unknown places of this world. In my travel guides I have specialized in the United States, having visited all the states several times on over thirty trips. After living in Oman for a while, I was also able to explore the beauties of Saudi Arabia and its neighboring countries on trips through the Kingdom. I am here to share with you personal and authentic travel stories and to introduce you to the untouched nature, historical sites and modern progress of the desert state.</h6>
                            </div>
                            <div className="tab-pane fade" id="kreators-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
                            <h3>ahmed zaki</h3>
                                        <h6>Hello all! I am a global traveler from Saudi Arabia. I am a travel guide author and photographer who loves to discover the beautiful unknown places of this world. In my travel guides I have specialized in the United States, having visited all the states several times on over thirty trips. After living in Oman for a while, I was also able to explore the beauties of Saudi Arabia and its neighboring countries on trips through the Kingdom. I am here to share with you personal and authentic travel stories and to introduce you to the untouched nature, historical sites and modern progress of the desert state.</h6>
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