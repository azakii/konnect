import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const Cards = (props) => {
    const { t } = useTranslations();
    const {src, title, path, location, days, profileImg, price, hover, profilePath } = props
    return (
        <>
            <div className="card withHover">
                <div className='info'>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="userImgProfile" data-aos="zoom-in">
                            <Link href={`${profilePath}`}>
                                <Image 
                                src={profileImg} 
                                width={50} 
                                height={50} 
                                className="card-img-top"
                                alt="src" />
                            </Link>
                        </div>
                        <div className="aa">
                            <span className="badge rounded-pill bg-light text-dark">${price}</span>
                        </div>
                    </div>
                </div>
                <Link href={`${path}`}>
                <Image 
                    src={src} 
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto', backgroundSize: 'cover' }}
                    className="card-img-bottom" 
                    alt="src" />

                <Image 
                    src={hover} 
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto', backgroundSize: 'cover' }}
                    className="card-img-hover" 
                    alt="src" />
                    
                </Link>
                <div className="card-body">
                    <h5 className="card-title"><Link href={path}>{title}</Link></h5>
                    <div className="card-text d-flex justify-content-between">
                        <span>{location}</span> 
                        <span>{days} {t("days")}</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="badge rounded-pill">{t("digital_itineraries")}</span>
                        <span className='font-small'>| {t("adventure_architecture_art")}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cards;
