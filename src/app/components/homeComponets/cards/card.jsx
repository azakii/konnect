import Image from 'next/image';
import Link from 'next/link';

const Cards = (props) => {
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
                        <span>{days} Days</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="badge rounded-pill">Digital itineraries</span>
                        <span className='font-small'>| Adventure • Architecture • Art</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cards;
