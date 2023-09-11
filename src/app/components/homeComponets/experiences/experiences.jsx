import Image from 'next/image';
const Experiences = () => {
    const types = [
        {
            src: "/assets/images/av1.png",
            title: "Kreate",
            description: "Use our uniquely built tool to build a flexible experience, digital or guided."
          },
          {
            src: "/assets/images/av2.png",
            title: "Share",
            description: "Share content with your followers directly through your social media accounts."
          },
    ]
    return (
        <>
        <div className='container-fluid'>
        <div className='title text-center d-flex align-items-center justify-content-center'>
            <div className="col-md-6 my-auto">
                <h2>Digital Itinerary VS Guided Experiences</h2>
                <p>We know that everyone isn’t at the same writing level so we will try to help out with some creative editing and proofing.</p>
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
