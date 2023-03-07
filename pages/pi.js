import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Video from "../components/Videos/Video"
import classes from "../styles/gdpi.module.css"
import apiCall from "../utils/apiCall";
import Resume from "../components/Resume"
import TopBanner from "../components/TopBanner"
import AOS from 'aos';
import 'aos/dist/aos.css';
import SEOHeadComponent from "../components/SEOHeadComponent";
import { isBrowser } from "../utils/utilsFunctions";
const Pi = ({ PI }) => {
    // API Call for sample video slider
    const [data, setData] = useState({})
    useEffect(() => {
        const getData = async () => {
            const result = await apiCall("get_videos.php?page=PI", "get")
            setData(result.data)
        }
        getData()
    }, [])

    // created a function for Iframe
    const getiframe = (iframe) => {
        if (iframe && isBrowser()) {
            return {
                __html: window.atob(iframe)
            }
        } else {
            return;
        }
    }
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <TopBanner imagPath={"/Image/Privacy-Policy-Banner-New.png"} alt={"personal interview introduction"} />
            <SEOHeadComponent title=" Top 15 interview questions with tips to respond smartly" metaContent="Top interview tips: It's not what you respond but how you respond to the common interview questions. A Personal Interview aims to check your personality." h1="Know the Top interview cracking tips with common questions" />
            <Container data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0">
                <h2 className={`${classes.heading}`}>What is a Personal Interview?</h2>
                <p>A personal Interview is a foremost tool to judge the abilities of a person. In the face-to-face contact between the interviewer & interviewee, it is possible to record more than only verbal responses; which are often superficial. When human beings communicate directly with each other, much more information is communicated. The nature of words used, facial expressions & body language - together contribute to judging a person.</p>
                <h2 className={`${classes.heading}`}>Tips -</h2>
                <ol>
                    <li><p>Look Sharp.</p></li>
                    <li><p>Do the research.</p></li>
                    <li><p>Listen Carefully.</p></li>
                    <li><p>Show enthusiasm with body language.</p></li>
                    <li><p>Answer only what is asked.</p></li>
                    <li><p>Ask Questions.</p></li>
                </ol>
                {
                    PI && isBrowser() && PI.pi_question.map((item, index) => {
                        return (
                            <div key={item.id}>
                                <h2 className={`${classes.heading}`}>General Personal Interviews questions for Undergraduate students - </h2>
                                <div className="" id='' dangerouslySetInnerHTML={getiframe(item.ug_questions)}></div>

                                <h2 className={`${classes.heading}`}>Personal Interview questions for Postgraduate students -</h2>
                                <div className="" id='' dangerouslySetInnerHTML={getiframe(item.pg_questions)}></div>
                            </div>
                        )
                    })
                }
            </Container>
            <Container style={{ padding: "30px" }} data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0">
                <h4 className={`${classes.heading}`}>Sample Video</h4>
                <Video data={data} />
            </Container>
            <Container data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0">
                <Resume />
            </Container>
        </>
    )
}


export async function loadPosts() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get_pi_question.php`)
    const data = await res.json()
    return data
}



export async function getServerSideProps() {
    const PIData = await loadPosts()
    return {
        props: {
            PI: PIData,
        }
    }
}

export default Pi;