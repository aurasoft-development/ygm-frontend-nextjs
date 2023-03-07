import { Container, Table } from "react-bootstrap";
import classes from "../../../styles/terms.module.css"
import TopBanner from "../../../components/TopBanner"
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import SEOHeadComponent from "../../../components/SEOHeadComponent";
import { isBrowser } from "../../../utils/utilsFunctions";
function ExamCategory({ examData, query }) {
    const type = query.type
    useEffect(() => {
        AOS.init();
    })

    return <>
        {/* <SEOHeadComponent title="My page title" metaContent="My page title"/> */}
        {
            query.category == "1" && <TopBanner imagPath={"/Image/Undergraduate.png"} />
        }
        {
            query.category == "2" && <TopBanner imagPath={"/Image/Postgraduate.png"} />
        }
        <div div className="p-3" >
            <h2 className='heading text-start'>
                {query.exam}
            </h2>
            <Container fluid className={`${classes.table}`} data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0">
                <Table striped="columns" >
                    <thead className={`${classes.table_body}`}>
                        <tr>
                            <th>S.No.</th>
                            <th>Exam Name</th>
                            <th>Conducting Body</th>
                            <th>Participating Institutes</th>
                            <th>Issue of Form</th>
                            <th>Last Date of Submission</th>
                            <th>Examination Date</th>
                            <th>Application Form Fee</th>
                            <th>Information Webpage</th>
                        </tr>
                    </thead>
                    <tbody  >
                        {
                            isBrowser() && examData.exams.length !== 0
                                ?
                                examData.exams.map((item, index) => {
                                    return <tr key={item.examid}>
                                        <td>{index + 1}</td>
                                        <td>{item.exam_name}</td>
                                        <td>{item.conduct_by}</td>
                                        <td>{item.participating_institute}</td>
                                        <td>{item.issue_form_date}</td>
                                        <td>{item.form_last_date}</td>
                                        <td>{item.exam_date}</td>
                                        <td>{window.atob(item.form_fee)}</td>
                                        <td><a href={item.web_url}>{item.web_url}</a> </td>
                                    </tr>
                                })
                                :
                                <tr>
                                    <h6 className='text-danger text-center'>There is no exam found </h6>
                                </tr>
                        }
                    </tbody>
                </Table>
            </Container>
        </div >
        <section className='px-md-5 px-2' data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0">
            <h5 className="heading  fs-32 ">Disclaimer</h5>
            <p className='px-md-5 px-0 mb-5 text-center'>
                “The above-mentioned dates are tentative and given as per previous trends of exams, these dates
                are subject to change as Exam Conducting Organization’s may deem fit. We do not claim any
                guarantee on such dates and conducting of exams”
            </p>
        </section>
    </ >
}
export default ExamCategory

export async function getServerSideProps(context) {
    const { query } = context;
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get_exams_by_category.php?category=${query.type}`)
    const data = await response.json()
    return {
        props: {
            examData: data,
            query
        }
    }
}