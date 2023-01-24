import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Header() {
    const [hidenav, setHideNav] = useState(false);
    const [lastScroll, setLastScroll] = useState(0);
    const [ugCourses, setUGCourses] = useState({})
    const [pgCourses, setPGCourses] = useState({})
    const [Coaching, setCoaching] = useState({})
    const [ugExams, setUGExams] = useState({})
    const [pgExams, setPGExams] = useState({})
    const [CoachingExam, setCoachingExam] = useState({})
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
        const getUGCourses = async () => {
            try {
                const response = await apiCall("get_courses.php?type=1", "get")
                setUGCourses(response.data)
            } catch (error) {
                console.log(error.message)

            }
        }
        getUGCourses()
    }, [])
    useEffect(() => {
        const getPGCourses = async () => {
            try {
                const response = await apiCall("get_courses.php?type=2", "get")
                setPGCourses(response.data)
            } catch (error) {
                console.log(error.message)
            }
        }
        getPGCourses()
    }, [])
    useEffect(() => {
        const getCoaching = async () => {
            try {
                const response = await apiCall("get_courses.php?type=3", "get")
                setCoaching(response.data)

            } catch (error) {
                console.log(error.message)
            }
        }
        getCoaching()
    }, [])
    // Exam API fetch =========================
    useEffect(() => {
        const getPGCourses = async () => {
            try {
                const response = await apiCall("get_exam_categories.php?type=1", "get")
                setUGExams(response.data)
            } catch (error) {
                console.log(error.message)
            }
        }
        getPGCourses()
    }, [])
    useEffect(() => {
        const getCoaching = async () => {
            try {
                const response = await apiCall("get_exam_categories.php?type=2", "get")
                setPGExams(response.data)
            } catch (error) {
                console.log(error.message)
            }
        }
        getCoaching()
    }, [])

    // Enquiry Button
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
    }

    useEffect(() => {
        AOS.init();
    }, [])

    return (

        <div className={`wrapper ${hidenav && "hide-navbar"} `}>
            <nav data-aos="zoom-in-right" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0">
                {/* <input type="checkbox" id="show-search" /> */}

                <input type="checkbox" id="show-menu" />
                <label htmlFor="show-menu" className="menu-icon"><i className="fas fa-bars" /></label>
                <div className="content ">
                    <div className="logo"><Link href="/"><Image src="/Image/logo/gyclogo.png" width="110px" height="90px" alt="logo" /></Link></div>
                    <div className='ms-auto container'>
                        <ul className="links" id='myDIV'>

                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li>
                                <div className="waviy">
                                    <span>
                                        <Link href={'/Institutions'} className="desktop-link dropdown-toggle " > Institutions</Link>
                                    </span>
                                </div>
                                <input type="checkbox" id="show-features" />
                                <label htmlFor="show-features Institutions" id='animate-charcter'>Institutions</label>
                                <ul>
                                    <li className='m-0 '>
                                        <Link href={"#"} className="desktop-link dropdown-toggle">UG (Undergraduate Prog)</Link>
                                        <input type="checkbox" id="show-items" />
                                        <label className='small' htmlFor="show-items">UG (Undergraduate Prog)</label>
                                        <ul>
                                            {ugCourses.courses && ugCourses.courses.map((course) => {
                                                return <li key={course.course_id}> <Link href={`/Institutions/collegebycourse/${course.course_slug}`} >{course.course_name}</Link></li>
                                            })}
                                        </ul>
                                    </li>
                                    <li className='m-0 '>
                                        <Link href="#" className="desktop-link dropdown-toggle">PG (Post Graduate Prog) </Link>
                                        <input type="checkbox" id="show-items" />
                                        <label className='small' htmlFor="show-items">PG (Post Graduate Prog)</label>
                                        <ul>
                                            {pgCourses.courses && pgCourses.courses.map((course) => {
                                                return <li key={course.course_id}><Link href={`/Institutions/collegebycourse/${course.course_slug}`} >{course.course_name}</Link></li>
                                            })}
                                        </ul>
                                    </li>
                                    <li className='m-0 '>
                                        <Link href="#" className="desktop-link dropdown-toggle">Coaching  </Link>
                                        <input type="checkbox" id="show-items" />
                                        <label className='small' htmlFor="show-items">Coaching</label>
                                        <ul>
                                            {Coaching.courses && Coaching.courses.map((course) => {
                                                return <li key={course.course_id}><Link href={`/Institutions/collegebycourse/${course.course_slug}?type=Coaching`} >{course.course_name}</Link></li>
                                            })}
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><Link href="/about">Scholarship</Link></li>
                            <li><Link href="/educationloan">Education Loan</Link></li>
                            <li>
                                <Link href="/exams" className="desktop-link dropdown-toggle exam">Exams</Link>
                                <input type="checkbox" id="show-features" />
                                <label htmlFor="show-features ">Exams</label>

                                <ul className='examUL'>
                                    <li className='m-0 '>
                                        <Link href={"#"} className="desktop-link dropdown-toggle">UG Exam</Link>
                                        <input type="checkbox" id="show-items" />
                                        <label className='small' htmlFor="show-items">UG Exam</label>
                                        <ul>
                                            {ugExams.exam_category && ugExams.exam_category.map((exam) => {
                                                return <li key={exam.category_id}><Link href={`/exams/examsbyname/${exam.category_id}?type=UG`} >{exam.category_name}</Link></li>
                                            })}
                                        </ul>
                                    </li>
                                    <li className='m-0 '>
                                        <Link href="#" className="desktop-link dropdown-toggle">PG Exam</Link>
                                        <input type="checkbox" id="show-items" />
                                        <label className='small' htmlFor="show-items">PG Exam</label>
                                        <ul>
                                            {pgExams.exam_category && pgExams.exam_category.map((exam) => {
                                                return <li key={exam.category_id}><Link href={`/exams/examsbyname/${exam.category_id}?type=PG`} >{exam.category_name}</Link></li>
                                                // return <li key={exam.category_id}><Link href={`/exams?exam=${exam.category_id}&type=${exam.course_type}`} >{exam.category_name}</Link></li>
                                            })}
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li onClick={handleShow} ><sapn className="Counselling">Need Counselling</sapn></li>
                            <li><Link href="/about">Foreign Education</Link></li>
                        </ul>
                    </div>
                </div>

            </nav >
        </div >

    )
}

export default Header
