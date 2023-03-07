import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import classes from "../../styles/exam.module.css"
import aos from 'aos';
import 'aos/dist/aos.css';
import SEOHeadComponent from '../../components/SEOHeadComponent';
import { isBrowser } from '../../utils/utilsFunctions';
import Pagination from '../../components/Pagination';

function Exams(exam) {
    const totalPages = exam.totalPages;
    const currentPage = exam.currentPage;
    const type = ""
    useEffect(() => {
        aos.init();
    }, [])

    return (
        <>
            <SEOHeadComponent title="Last date of IGNOU Exam form, Neet and MBA Exams dates 2022" metaContent="The 2023 Neet exams will be held in the first week of July. The Ignou Exam forms submission date-1st to 3rd week of June. MBA Exam registration begins in March." h1=" IGNOU Exam forms Date 2022, Neet Exam & MBA Exam Date 2022" />
            <div className="p-3">
                <h2 className='heading text-start'>
                    {type === "UG" ? "UG Exams " : type === "PG" ? "PG Exams " : "All Exams "}
                </h2>
                <Container fluid className={`${classes.table}`} data-aos="zoom-in-right" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0">
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
                                isBrowser() && exam.exam.exams.length !== 0
                                    ?
                                    exam.exam.exams.map((item, index) => {
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
                                        <td>
                                            <h6 className='text-danger text-center d-flex justify-contant-center'>There is no exam found </h6>
                                        </td>
                                    </tr>
                            }
                        </tbody>
                    </Table>
                </Container>
                {totalPages > 1 && <div className='mt-1'><Pagination totalPages={totalPages} pageName={`exams`} currentPage={currentPage} /></div>}

                <section className='px-md-5 px-2' data-aos="zoom-in-right" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0">
                    <h5 className="heading  fs-32 ">Disclaimer</h5>
                    <p className='px-md-5 px-0 mb-5 text-center'>
                        “The above-mentioned dates are tentative and given as per previous trends of exams, these dates
                        are subject to change as Exam Conducting Organization’s may deem fit. We do not claim any
                        guarantee on such dates and conducting of exams”
                    </p>
                </section>
            </div>
        </>

    )
}

export async function getServerSideProps({ query }) {
    const page = Number(query.page || 1);
    let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get_exams.php?&currentpage=${page}`)
    response = await response.json();
    return {
        props:
        {
            exam: response,
            totalPages: response?.totalpages || 1,
            currentPage: page,
        }
    };
}

export default Exams