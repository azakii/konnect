import Image from 'next/image';
import { useTranslation } from "react-i18next";

const HowItWorks = () => {
    const t = useTranslations('Index');
    const types = [
        {
            src: "/assets/images/av1.png",
            title: `${t("kreate")}`,
            description: `${t("use_our_uniquely_built_tool_to_build_a_flexible_experience")}`
          },
          {
            src: "/assets/images/av2.png",
            title: `${t("share")}`,
            description: `${t("share_content_with_your_followers_directly_through_your_social_media_accounts")}`
          },
          {
            src: "/assets/images/av3.png",
            title: `${t("earn")}`,
            description: `${t("sell_your_kreations_to_the_world")}`
          },
    ]
    return (
        <div className='container-fluid'>
            <div className='title text-center'>
                <h2>{t("how_does_it_work")}</h2>
            </div>
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
                            >{t("for_travelers")}</a>
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
                            >{t("for_kreators")}</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a
                            className="nav-link"
                            id="konnect-tab-3"
                            data-bs-toggle="tab"
                            href="#konnect-tabs-3"
                            role="tab"
                            aria-controls="konnect-tabs-3"
                            aria-selected="false"
                            >{t("earn_with_konnect")}</a>
                        </li>
                    </ul>
                    </div>
                    <div className="tab-content" id="ex1-content">
                            <div
                                className="tab-pane fade show active"
                                id="travelers-tabs-1"
                                role="tabpanel"
                                aria-labelledby="ex1-tab-1">
                                <div className="row">
                                {types.map((type, index) => (
                                    <div className="col-md-4" key={index}>
                                        <div className="p-5">
                                        <Image 
                                        src={type.src}
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: '100%', height: 'auto' }}
                                        className="card-img-top" 
                                        alt="src" />
                                        <div className="">
                                            <h2 className="text-green text-center">
                                                {type.title}
                                            </h2>
                                            <p className="text-left">
                                                {type.description}
                                            </p>
                                        </div>
                                        </div>
                                    </div>
                                ))}
                                </div>
                            </div>
                            <div className="tab-pane fade" id="kreators-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
                                <div className="row">
                                    <div className="col-md-4">
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="konnect-tabs-3" role="tabpanel" aria-labelledby="ex1-tab-3">
                                <div className="row">
                                    <div className="col-md-4">
                                        
                                    </div>
                                </div>
                            </div>
                    </div>
            </div>
        </div>
    );
}

export default HowItWorks;
