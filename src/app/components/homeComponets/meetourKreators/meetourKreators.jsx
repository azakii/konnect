import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import teams from "../../../../../public/assets/images/team.png";

const MeetourKreators = () => {
    return (
        <div className='meetourKreators'>
            <div className="container-fluid h-100">
                <div className="row align-items-center justify-content-center h-100">
                    <div className="col-md-5 text-center">
                        <h4 className='text-green'>Meet our Kreators</h4>
                        <h3>The real people behind Konnect</h3>
                        <div className="mt-3 mb-3">
                            <p className='fw-light'>The only way the Konnect community is possible is thorough a diverse group of amazing locals and travelers like <Link class="" href="#">Turki</Link>, Leslie, and <Link class="" href="#">Jason</Link> who are helping us drive change in the travel industry.</p>
                        </div>
                        <div class="text-center mt-5">
                            <Link class="btn exploreMore" href="#">Explore more</Link>
                        </div>
                    </div>
                </div>
                <Image 
                    src={teams} 
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '90%', height: 'auto', backgroundSize: 'cover' }}
                    data-aos="zoom-in"
                    alt=''
                />
            </div>
        </div>
    );
}

export default MeetourKreators;
