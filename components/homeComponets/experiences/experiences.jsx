import Image from 'next/image';
import { useTranslations } from 'next-intl';


const Experiences = () => {
    const t = useTranslations('Index');

    const types = [
        {
            src: "/assets/images/av1.png",
            title: `${t("kreate")}`,
            
            description: `${t("use_our_uniquely_built_tool_to_build_a_flexible_experience")}`,
          },
          {
            src: "/assets/images/av2.png",
            title:  `${t("share")}`,
            description: `${t("share_content_with_your_followers_directly_through_your_social_media_accounts")}`,
          },
    ]
    return (
        <>
        <div className='container-fluid'>
        <div className='title text-center d-flex align-items-center justify-content-center'>
            <div className="col-md-6 my-auto">
                <h2>{t("digital_itinerary_vs_guided_experiences")}</h2>
                <p>{t("we_know_that_everyone")}</p>
            </div>
        </div>

        <div className="row">
            {types.map((type, index) => (
                <div className="col-md-6" data-aos="fade-up" key="index">
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
        </>
    );
}

export default Experiences;
