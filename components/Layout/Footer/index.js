import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import apiCall from '../../../utils/appiCall'
import classes from "./footer.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Icon } from '@iconify/react';

const Nav_Link = [
    { title: "Careers", path: "/careers" },
    { title: "Contact Us", path: "/contact" },
    { title: "Privacy policy", path: "/privacypolicy" },
    { title: "Terms", path: "/terms" },
]
const Footer = () => {
    const [choching, setChoching] = useState({})
    const [cities, setCities] = useState({})
    const [exams, setExams] = useState({})
    const [college, setCollege] = useState({})

    useEffect(() => {
        const getdata = async () => {
            try {
                const result = await apiCall("get_college_category.php?type=2", "get")
                setChoching(result.data)
            } catch (error) {
                console.log(error.message)
            }
        }
        getdata()
    }, [])
    useEffect(() => {
        const getdata = async () => {
            try {
                const result = await apiCall("get_cities.php", "get")
                setCities(result.data)
            } catch (error) {
                console.log(error.message)
            }
        }
        getdata()
    }, [])
    useEffect(() => {
        const getdata = async () => {
            try {
                const result = await apiCall("get_exam_categories.php", "get")
                setExams(result.data)
            } catch (error) {
                console.log(error.message)
            }
        }
        getdata()
    }, [])
    useEffect(() => {
        const getdata = async () => {
            try {
                const result = await apiCall("get_college_category.php?type=1", "get")
                setCollege(result.data)
            } catch (error) {
                console.log(error.message)
            }
        }
        getdata()
    }, [])


    useEffect(() => {
        AOS.init();
      })

    return (
        <section className={`${classes.Footer_section}`}>
            <Container data-aos="zoom-in-right" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0">
                <Row className='my-3'>
                    <Col md="3" >
                        <h2 className={`${classes.Foo_heading}`}>Head Office</h2>
                        <ul className={`${classes.ul}`} style={{ paddingLeft: 0 }}>
                            <li><span className={`${classes.Foo_contant}`}>302, Balaji Corporate House, Above ICICI Bank,</span></li>
                            <li><span className={`${classes.Foo_contant}`}>Zanzeerwala Square, New Palasia, Indore,</span></li>
                            <li><span className={`${classes.Foo_contant}`}>Madhya Pradesh</span></li>
                            <li><span className="icon icon-phone" /><span className={`${classes.Foo_contant}`}>Phone : <a href="tel://0731-4904343">0731-4904343</a>,</span></li>
                            <li><span className="icon icon-phone" /><span className={`${classes.Foo_contant}`}>Mobile : <a href="tel://7089434343"> +91 7089434343</a></span></li>
                        </ul>
                    </Col>
                    <Col md="3">
                        <h2 className={`${classes.Foo_heading}`}>Branch Office</h2>
                        <ul className={`${classes.ul}`} style={{ paddingLeft: 0 }}>
                            <li><span className="icon icon-phone" /><span className={`${classes.Foo_contant}`}>Contact Person: Reema Jain</span></li>
                            <li><span className="icon icon-phone" /><span className={`${classes.Foo_contant}`}>Mobile: <a href="tel://7737080773"> +91 7737080773</a> </span></li>
                        </ul>
                    </Col>
                    <Col md="3">
                        <h2 className={`${classes.Foo_heading}`}>Quick Links</h2>
                        <ul className={`${classes.ul}`} style={{ paddingLeft: 0 }}  >
                            {
                                Nav_Link.map((item, index) => (<li key={index}><Link href={item.path}><a>{item.title}</a></Link></li>))
                            }
                        </ul>
                    </Col>
                    <Col md="3">
                        <h2 className={`${classes.Foo_heading}`}>Connect With Us</h2>
                        <ul className={`${classes.ul}`} style={{ paddingLeft: 0 }}>
                            {/* <li  className={`${classes.li}`}><a  data-aos="zoom-out-up"href={process.env.NEXT_PUBLIC_FACEBOOK_URL} target="_blank" rel="noopener noreferrer"><i className="ri-facebook-fill"></i></a></li>
                            <li  className={`${classes.li}`} ><a data-aos="zoom-out-up" href={process.env.NEXT_PUBLIC_YOUTUBE_URL} target="_blank" rel="noopener noreferrer"> <i className="ri-youtube-line"></i></a></li>
                            <li  className={`${classes.li}`}><a  data-aos="zoom-out-up"href={process.env.NEXT_PUBLIC_INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"><span className="icon-instagram" /> <i className="ri-instagram-line"></i></a></li> */}
                        </ul>
                    </Col>
                </Row>
                <hr></hr>
                <p id='dill'>
                    Your Global Mentors  © {new Date().getFullYear()} All rights reserved |
                    Made with  <Icon icon="fluent-emoji-flat:red-heart" /> by <a href={process.env.NEXT_PUBLIC_AURASOFT_URL} target="_blank" rel="noreferrer">Aurasoft</a>
                </p>
            </Container>
        </section>
    )
}


export default Footer