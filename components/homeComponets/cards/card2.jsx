import Image from 'next/image';
import Link from 'next/link';

const CitiesCards = (props) => {
    const {src, title, path } = props
    return (
        <>
            <div className="card"  data-aos="fade-up">
                <Link href={path}>
                    <Image 
                    src={src} 
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto', backgroundSize: 'cover' }}
                    className="card-img-top" 
                    alt="src" />
                </Link>
                <div className="card-body">
                    <h5 className="card-title"><Link href={path}>{title}</Link></h5>
                </div>
            </div>
        </>
    );
}

export default CitiesCards;
