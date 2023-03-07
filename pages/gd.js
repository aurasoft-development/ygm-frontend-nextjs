import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Video from "../components/Videos/Video"
import classes from "../styles/gdpi.module.css"
import apiCall from "../utils/apiCall";
import TopBanner from "../components/TopBanner"
import AOS from 'aos';
import 'aos/dist/aos.css';
import SEOHeadComponent from "../components/SEOHeadComponent";
import { isBrowser } from "../utils/utilsFunctions";
const GD = ({ GD }) => {

    // API Call for sample video slider
    const [data, setData] = useState({})
    useEffect(() => {
        const getData = async () => {
            const result = await apiCall("get_videos.php?page=gd", "get")
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
            <TopBanner imagPath={"/Image/GroupDiscussion.png"} />
            <SEOHeadComponent title="Types of GD with SSC GD results, tips and most repeated questions."  metaContent="SSC GD refers to Staff Selection Committee General Duty, The key tips to crack SSC GD exam include the practice of previous year questions and mock tests." h1='What are the types of GD? SSC GD and related information'/>
            <Container data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0">
                <h2 className={`${classes.heading}`}>What is Group Discussion?  </h2>
                <p>Group Discussion or GD is a type of discussion that involves people sharing ideas or activities. People in the group discussion are connected with one basic idea. Based on that idea, everyone in the group represents his/her perspective.</p>
                <p>GD is a discussion that tests the candidate&apos;s skills, such as leadership skills, communication skills, social skills and behaviour, politeness, teamwork, listening ability, General awareness, confidence, problem-solving skills, etc.</p>
                <p>The Group Discussion is generally the next level after the entrance exam to pursue a professional degree. In the case of recruitments, Group Discussion can be the starting or at the end, depending on different companies or organizations.</p>
                <p>It is not fixed that the group discussion is always performed around the table. People can sit in any arrangement, but everyone should be able to see every face. It is not only the usual discussion, but it is also a discussion with knowledge and facts.</p>
                <h2 className={`${classes.heading}`}>Process of Group Discussion</h2>
                <ol>
                    <li><p>The process of a Group Discussion starts with the announcement of the topic. The given topic could be technical, factual, or case study.</p></li>
                    <li><p>Before beginning the discussion, a preparation time of 3 minutes is given. The time can also extend in the case of a long case statement.</p></li>
                    <li><p>Any participant in the group can initiate the discussion. After the lead participant, anyone in the group can continue the discussion. Similarly, everyone gets the chance to speak. One after another, participants in the group express their views on the given topic.</p></li>
                    <li><p>It ends when the panellist stops the discussion or may ask one or more than one participant to summarize the GD. Whenever you are asked for the summary, remember to cover the discussed points. The summary cannot include the words that were not part of the discussion. The participants that were quite among the discussion are generally asked to summarize it, which is a good opportunity to present their views. But, it does not mean that everyone should be quiet. The summary should include the essential discussed points and the conclusion of the discussion.</p></li>
                    <li><p>The final scores are calculated. Based on the performance of each participant, the panellist gives the scores. The panellists are usually four to five to judge the performance of candidates in the Group Discussion.</p></li>
                </ol>
                {
                    GD.gd_topics[0] && isBrowser() &&
                    <>
                        <h3 className={`${classes.heading}`}>Current GD topics</h3>
                        <div className="" id='' dangerouslySetInnerHTML={getiframe(GD.gd_topics[0].current_topic)}></div>

                        <h3 className={`${classes.heading}`}>Past GD topics</h3>
                        <div className="" id='' dangerouslySetInnerHTML={getiframe(GD.gd_topics[0].past_topic)}></div>
                    </>
                }
            </Container>
            <Container style={{ padding: "30px" }} data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0">
                <h4 className={`${classes.heading}`}>Sample Video</h4>
                <Video data={data} />
            </Container>
        </>
    )
}
export async function loadPosts() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get_gd_topics.php`)
    const data = await res.json()
    return data
}



export async function getServerSideProps() {
    const response = await loadPosts()
    return { props: { GD: response } }
}

export default GD;