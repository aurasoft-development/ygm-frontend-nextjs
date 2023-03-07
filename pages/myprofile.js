import React, { useEffect, useState } from 'react';
import classes from "../styles/terms.module.css"
import TopBanner from '../components/TopBanner';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProfileTabs from '../components/UserProfile/profiletab';
import { getItem } from '../utils/utilsFunctions';


function Terms({ props }) {
    const [userEmail, setUserEmail] = useState('No email');
    const [userName, setUserName] = useState('No Name');
    const [userImage, setUserImage] = useState('');
    const initDetails= () => {
        let localData = getItem("GYC_login_user_data");
        if (localData) {
            localData = JSON.parse(localData);
            if (localData?.student_email) setUserEmail(localData.student_email);
            if (localData?.student_name) setUserName(localData.student_name);
            if (localData?.image_path && localData?.profile_pic) setUserImage(localData.image_path + localData.profile_pic);
        }
    }
    useEffect(() => {
        AOS.init();
        initDetails();
    }, [])
    return (
        <>
            <section className='pt-5 '>
                <div className='container my_profile'>
                    <img img-fluid src={userImage ? userImage : '/Image/logo/gyclogo.png'}></img>
                    <div className='My_profile_text'>
                        <div>
                            <p className='My_profile_text name'><b>Name:-</b> <b className='Name'>{userName}</b></p><br></br>
                            <p className='My_profile_text mail'> <b>Email:-</b> <b className='Email'>{userEmail}</b> </p>
                        </div>
                        <hr className='my-2' />
                    </div>
                </div>
                <ProfileTabs initDetails={initDetails} />
            </section>
        </>
    );
}
export default Terms;