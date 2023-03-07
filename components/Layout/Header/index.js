import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import MoreMenu from '../../MoreMenu.js/index.js';
import UserProfile from '../../UserProfile';
import SearchBar from './SearchBar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'next/router';
import Modal from 'react-bootstrap/Modal';
import SignUp from '../../SignUp';
import { getItem } from '../../../utils/utilsFunctions';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUGCourses } from '../../../redux/slices/courses/ugCoursesSlice';
import { fetchPGCourses } from '../../../redux/slices/courses/pgCoursesSlice';
import { fetchCoaching } from '../../../redux/slices/coaching/coachingSlice';
import { fetchUGExams } from '../../../redux/slices/exams/ugExamsSlice';
import { fetchPGExams } from '../../../redux/slices/exams/pgExamsSlice';
function Header() {
    let router = useRouter();
    const [hidenav, setHideNav] = useState(false);
    const [lastScroll, setLastScroll] = useState(0);
    const ugCourses = useSelector((state) => state.ugCourses.data );
    const pgCourses = useSelector((state) => state.pgCourses.data );
    const Coaching = useSelector((state) => state.Coaching.data );
    const ugExams = useSelector((state) => state.ugExams.data );
    const pgExams = useSelector((state) => state.pgExams.data );
    const dispatch = useDispatch();
    useEffect(() => {
        const handleNavbar = () => {
            if (lastScroll < window.scrollY && window.scrollY > 90) {
                setHideNav(true)
                setLastScroll(window.scrollY)
            } else {
                setHideNav(false)
                setLastScroll(window.scrollY)
            }
        }
        window.addEventListener('scroll', handleNavbar)
        return () => {
            window.removeEventListener("scroll", handleNavbar)
        }
    }, [hidenav, lastScroll])
    // Courses API fetch =========================
    useEffect(() => {
        dispatch(fetchUGCourses());
        dispatch(fetchPGCourses());
        dispatch(fetchCoaching());
        dispatch(fetchUGExams());
        dispatch(fetchPGExams());
    }, [])

    // Enquiry Button
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        checkUserLoginHandler();
    }
    const handleShow = () => {
        setShow(true);
    }
    useEffect(() => {
        AOS.init();
    }, [])
    const checkUserLoginHandler = async () => {
        let localData = await getItem("GYC_login_user_data");
        if (localData) {
            setIsLogIn(true);
        } else setIsLogIn(false);
    }
    const [isLogIn, setIsLogIn] = useState(false);
    const [activeTab, setActiveTab] = useState("");
    useEffect(() => {
        checkUserLoginHandler();
    });
    const goToPage = (page) => {
        setActiveTab(page);
        if (page && page !== 'home')
            router.push(`/${page}`);
        else router.push('/');
    }
    return (
        <div className={`wrapper ${hidenav && "hide-navbar"} `}>
        <nav data-aos="zoom-in-right" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0">
            <input type="checkbox" id="show-menu" />
            <label htmlFor="show-menu" className="menu-icon"><i className="fas fa-bars" /></label>
            <div className="content ">
                <div className="logo"><Link href="/"><Image src="/Image/logo/gyclogo.png" width="110px" height="90px" alt="logo" /></Link></div>
                <SearchBar />
                <div className='ms-auto container showTab'>
                    <ul className="links " id='myDIV'>

                        <li className={`active-tab ${activeTab === 'home' ? 'active' : ''}`}><span onClick={() => goToPage('home')}>Home</span></li>
                        <li className={`active-tab ${activeTab === 'about' ? 'active' : ''}`}><span onClick={() => goToPage('about')}>About</span></li>

                        <li className= {`active-tab ${activeTab === 'Institutions' ? 'active' : ''}`} ><span className='desktop-link dropdown-toggle' onClick={() => goToPage('Institutions')}>College Explore</span>

                            <div className="waviy">
                                {/* <span>
                                    <Link href={'/Institutions'} className=" desktop-link dropdown-toggle " > Institutions</Link>
                                </span> */}
                            </div>
                            <input type="checkbox" id="show-features" />
                            <label htmlFor="show-features Institutions" id='animate-charcter'>College Explore</label>
                            <ul className='institutionUl'>
                                <li className='m-0 '>
                                    <Link href="javascript:void(0);" className="desktop-link dropdown-toggle " style={{ pointerEvents:"none"}} >UG (Undergraduate Prog)</Link>
                                    <input type="checkbox" id="show-items" />
                                    <label className='small' htmlFor="show-items">UG (Undergraduate Prog)</label>
                                    <ul>
                                        {ugCourses && ugCourses.courses && ugCourses.courses.map((course) => {
                                            return <li key={course.course_id}> <Link className="" href={`/Institutions/collegebycourse/${course.course_slug}`} >{course.course_name}</Link></li>
                                        })}
                                    </ul>
                                </li>
                                <li className='m-0 '>
                                    <Link href="javascript:void(0);" className="desktop-link dropdown-toggle ">PG (Post Graduate Prog) </Link>
                                    <input type="checkbox" id="show-items" />
                                    <label className='small' htmlFor="show-items">PG (Post Graduate Prog)</label>
                                    <ul>
                                        {pgCourses && pgCourses.courses && pgCourses.courses.map((course) => {
                                            return <li key={course.course_id}><Link className="" href={`/Institutions/collegebycourse/${course.course_slug}`} >{course.course_name}</Link></li>
                                        })}
                                    </ul>
                                </li>
                                <li className='m-0 '>
                                    <Link href="javascript:void(0);" className="desktop-link dropdown-toggle ">Coaching  </Link>
                                    <input type="checkbox" id="show-items" />
                                    <label className='small' htmlFor="show-items">Coaching</label>
                                    <ul>
                                        {Coaching && Coaching.courses && Coaching.courses.map((course) => {
                                            return <li key={course.course_id}><Link className="" href={`/Institutions/collegebycourse/${course.course_slug}?type=Coaching`} >{course.course_name}</Link></li>
                                        })}
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className= {`active-tab ${activeTab === 'Scholarship' ? 'active' : ''}`} ><span onClick={() => goToPage('about')}>Scholarship </span></li>
                        {/* <li className='active-tab'><Link href="/educationloan">Education Loan</Link> */}
                        <li className= {`active-tab ${activeTab === 'educationloan' ? 'active' : ''}`} ><span onClick={() => goToPage('educationloan')}> Education Loan</span></li>
                        {/* <li className='active-tab'> */}
                            {/* <Link href="/exams" className="desktop-link dropdown-toggle exam ">Exams</Link> */}
                            <li className= {`active-tab ${activeTab === 'exams' ? 'active' : ''}`} ><span className="desktop-link dropdown-toggle" exam onClick={() => goToPage('exams')}> Exams</span>
                            <input type="checkbox" id="show-features" />
                            <label htmlFor="show-features ">Exams</label>

                            <ul className='examUL'>
                                <li className='m-0 '>
                                    <Link href="javascript:void(0);" className="desktop-link dropdown-toggle ">UG Exam</Link>
                                    <input type="checkbox" id="show-items" />
                                    <label className='small' htmlFor="show-items">UG Exam</label>
                                    <ul>
                                        {ugExams && ugExams.exam_category && ugExams.exam_category.map((exam) => {
                                            return <li key={exam.category_id}><Link href={`/exams/examsbyname/${exam.category_id}?type=UG`} >{exam.category_name}</Link></li>
                                        })}
                                    </ul>
                                </li>
                                <li className='m-0 '>
                                    <Link href="javascript:void(0);" className="desktop-link dropdown-toggle ">PG Exam</Link>
                                    <input type="checkbox" id="show-items" />
                                    <label className='small' htmlFor="show-items">PG Exam</label>
                                    <ul>
                                        {pgExams && pgExams.exam_category && pgExams.exam_category.map((exam) => {
                                            return <li key={exam.category_id}><Link href={`/exams/examsbyname/${exam.category_id}?type=PG`} >{exam.category_name}</Link></li>
                                            // return <li key={exam.category_id}><Link  href={`/exams?exam=${exam.category_id}&type=${exam.course_type}`} >{exam.category_name}</Link></li>
                                        })}
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        {!isLogIn && <li onClick={handleShow} ><sapn className="active-tab Counselling ">Need Counselling</sapn></li>}
                        {/* <li className='active-tab'><Link href="/about">Foreign Education</Link></li> */}
                        <li className= {`active-tab ${activeTab === 'Forign Education' ? 'active' : ''}`} ><span onClick={() => goToPage('about')}>Foreign Education </span></li>

                    </ul>
                </div>
                <MoreMenu ugCourses={ugCourses} pgCourses={pgCourses} Coaching={Coaching} ugExams={ugExams} pgExams={pgExams} />
                {
                    isLogIn && <UserProfile />
                }
            </div>
        </nav >
        <Modal show={show} onHide={handleClose}>
            <SignUp popupClose={handleClose} />
        </Modal> 
    </div >
    )
}

export default Header
