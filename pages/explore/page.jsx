"use client";
import Image from "next/image";
import {
    Layout,
    SearchBlock,
    Trends
} from "../../components/index";

import pin from "../../../../public/assets/images/icons/Map.svg";

const ExploreMe = () => {
    return (
        <Layout>
            <div className="mainWraper inner text-white">
                <div className="category">
                <div className="container">
                    <h1 className="d-flex align-items-center text-black pt-5 pb-5">
                        <Image 
                        src={pin}
                        width={55}
                        height={55}
                        className="mr-3"
                        alt=""
                        />
                        Italy</h1>
                    <div className="d-flex align-items-center">
                        <div className="col-md-5">
                            <SearchBlock />
                        </div>
                        <div className="border-start catTabs">
                            <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="pills-digital-tab" data-bs-toggle="pill" data-bs-target="#pills-digital" type="button" role="tab" aria-controls="pills-digital" aria-selected="true">Digital itiniraries</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-experiences-tab" data-bs-toggle="pill" data-bs-target="#pills-experiences" type="button" role="tab" aria-controls="pills-experiences" aria-selected="false">Guided experiences</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tabs">
                    
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-digital" role="tabpanel" aria-labelledby="pills-digital-tab">
                                <div className="trendSection">
                                    <Trends />
                                    <Trends />
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-experiences" role="tabpanel" aria-labelledby="pills-experiences-tab">
                                <div className="trendSection">
                                    <Trends />
                                    <Trends />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                </div>
                
            </div>
        </Layout>
    );
}

export default ExploreMe;