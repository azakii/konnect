import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import teams from "@/public/assets/images/team.png";
import { useTranslations } from 'next-intl';

const MeetourKreators = () => {
    const t = useTranslations('Index');
    return (
        <div className='meetourKreators'>
            <div className="container-fluid h-100">
                <div className="row align-items-center justify-content-center h-100">
                    <div className="col-md-5 text-center">
                        <h4 className='text-green'>{t("meet_our_kreators")}</h4>
                        <h3>{t("the_real_people_behind_konnect")}</h3>
                        <div className="mt-3 mb-3">
                            <p className='fw-light'>{t("the_only_way")}</p>
                        </div>
                        <div className="text-center mt-5">
                            <Link className="btn exploreMore" href="#">{t("explore_more")}</Link>
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
