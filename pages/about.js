import Image from 'next/image'
import React, { useEffect } from 'react'
import Testimonials from "../components/Testimonials"
import AOS from 'aos';
import 'aos/dist/aos.css';
import SEOHeadComponent from '../components/SEOHeadComponent';

function About({ TestimonialsData }) {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <SEOHeadComponent title='About Get Your College' metaContent='It aims to “bridge the gap between the aspirants and the institutions, which they desire and deserve.” We are young and passionate #Edupreneurs, having a base in Indore and a global mindset.' />
            <div className="About_Top">
                <div className="background-container">
                    <div className="bg-1"></div>
                    <div className="bg-2" ></div>
                </div>
                <div className="about-container" >
                    <div className="text-container">
                        <div className='hed'>
                            <h2 data-aos="zoom-out-left" className='page_main_heading mb-0'>GET YOUR COLLEGE</h2>
                            <h3 data-aos="zoom-out-left" className="heading_45">Bridging the gap between Dream & Destiny</h3>
                        </div>
                        <p data-aos="zoom-in" data-aos-duration="800">GET YOUR COLLEGE (GYC) is an initiative, steered by Mr Atul Jain & Mrs Alisha Jain who have combined experience and expertise in the field of educational consultancies, for over 11 years now. It aims to “bridge the gap between the aspirants and the institutions, which they desire and deserve.” We are young and passionate #Edupreneurs, having a base in Indore and a global mindset. With alumni from Mumbai University, Symbiosis Institute of Management and Devi Ahilya Vishwavidhyalaya as our founding members, we understand the significance of quality education and its impact on young minds and their careers. Our idea and aim is to become the leaders in the field of student counselling, in India, upholding honesty and integrity, above all. We nurture your dreams with utmost sincerity.</p>
                        <p data-aos="zoom-in" data-aos-duration="800">Through the pan-India reach we have, our objective is to provide the students, with multitudinous options to choose from, among the most prominent colleges, in India. It’s our attempt to make the distance between the aspirants and the colleges, a little shorter. We thrive to achieve this by outreaching the virtual boundaries and designing the most appropriate study programme for you, available nationally.</p>
                        <p data-aos="zoom-in">Like we believe and often say, “You’ve got your dreams, and we’ve got your back,” It’s our pleasure to serve the achievers in the fields of commerce and design.</p>
                    </div>
                </div>
            </div>
            <div className='container-fluid p-md-5 Director'>
                <h3 className="heading_46">ABOUT THE PROTAGONISTS</h3>
                <div className="card container " >
                    <div className="row g-0 my-4 " >
                        <div className="col-md-4 text-center" >
                            <div className='A-img '>
                                <Image loader={() => '/Image/about/Atulsir.png'} src="/Image/about/Atulsir.png" width="300px" height="350px" alt='best career counsellor atul sir'></Image>
                            </div>
                        </div>
                        <div className="col-md-8 text d-flex  align-items-center">
                            <div className="card-body p-0 m-auto ">
                                <h4 data-aos="fade-right" data-aos-duration="500" className="card-title">ATUL JAIN <span> (CEO & Founder)</span></h4>
                                <p data-aos="fade-right" data-aos-duration="500" className="card-text">An educationist by heart and an edupreneur by choice. He has counselled and shaped the careers of more than 25,000 students over the years. An alumnus from <b>Mumbai University</b>, and a <b>Gold Medallist in MBA</b>, he has worked for the most renowned companies and organisations, gaining valuable experience in the field of educational consultancy and management and operation, like<b> Dale Carnegie</b>, <b>EduRiser</b> (A Videocon Group Company). He has also <b>steered EduBirds</b> (One of Indore’s most successful commerce and competitive exam coaching with over 1000+ students annually  in 6 Centres)  and overall <b>15 years</b> of <b>Experience in coaching and counselling domain</b>.</p>
                                <h4>
                                    <ul>
                                        <li data-aos="flip-left" data-aos-duration="500"><a href={process.env.NEXT_PUBLIC_CEO_INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"> <i className="ri-instagram-line fa-brands"></i></a></li>
                                        <li data-aos="flip-left" data-aos-duration="500"> <a href={process.env.NEXT_PUBLIC_CEO_TWITTER_URL} target="_blank" rel="noopener noreferrer"><i className="ri-twitter-line fa-brands"></i></a> </li>
                                        <li data-aos="flip-left" data-aos-duration="500"> <a href={process.env.NEXT_PUBLIC_CEO_FACEBOOK_URL} target="_blank" rel="noopener noreferrer"><i className="ri-facebook-fill fa-brands"></i></a> </li>
                                        <li data-aos="flip-left" data-aos-duration="500"> <a href={process.env.NEXT_PUBLIC_CEO_LINKEDIN_URL} target="_blank" rel="noopener noreferrer"><i className="ri-linkedin-fill fa-brands"></i></a> </li>
                                    </ul>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card container my-md-4 my-3" >
                    <div className="row g-0 flex-row   flex-md-row-reverse">
                        <div className="col-md-4 text-center" >
                            <div className='A-img'>
                                <Image loader={() => '/Image/about/AlishaJain.png'} src="/Image/about/AlishaJain.png" width="350px" height="350px" alt='director of getyourcollege and counsellor'></Image>
                            </div>
                        </div>
                        <div className="col-md-8 d-flex  text align-items-center">
                            <div className="card-body p-0 m-auto ">
                                <h4 data-aos="fade-left" data-aos-duration="500" className="card-title">Alisha Jain <span>(Director)</span></h4>
                                <p data-aos="fade-left" data-aos-duration="500" className="card-text">A <b>Symbiosis Alumnus</b> with <b>7+ Years</b> of Experience as a <b>counsellor</b>, she has been conducting <b>training</b>, <b>workshops</b>, <b>lectures</b>, <b>presentations</b>, and other events to develop career planning and employability skills for students. She plays a <b>crucial role</b> in providing the best-suited opportunities to students from all walks of life and has vast knowledge and passion for this field. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card container ">
                    <div className="row g-0 my-4 " >
                        <div className="col-md-4 text-center" >
                            <div className='img '>
                                <Image loader={() => '/Image/about/ReemaJain.png'} src="/Image/about/ReemaJain.png" width="300px" height="350px" alt='reema jain gyc'></Image>
                            </div>
                        </div>
                        <div className="col-md-8 text d-flex  align-items-center">
                            <div className="card-body p-0 m-auto ">
                                <h4 data-aos="fade-right" data-aos-duration="500" className="card-title">Reema Jain <span> (Branch Head, Jaipur)</span></h4>
                                <p data-aos="fade-right" data-aos-duration="500" className="card-text"><b>Ms. Reema Jain</b> is an excellent teacher, professional speaker, counsellor and mentor who has <b>10+ years experience</b> in teaching and counselling students. She has done <b>B.Sc</b> in Maths from Vikram University, <b>MBA</b> and <b>LLB</b> (Hons)from <b>DAVV</b> Indore. She has been the <b>Asst. Prof and Head</b> of Admissions in renowned college of Indore. She is an accomplished academician and counsellor who paves paths for students to excel in their careers. She has assisted more than 4000 students over the years. She is an outstanding orator who has addressed more than 8000 students and motivated them to do better in their lives.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section id='Our_Process' data-aos="zoom-in"
                data-aos-duration="500">
                <div className='container'><h3 className="heading_46 ">OUR PROCESS </h3></div>
                <div className=' Our_Process' data-aos="zoom-out-down">
                    <div className='Our_Process_card'>
                        <div className='Our_Process_text'>
                            <h4>1. Psychometric Testing</h4>
                        </div>
                    </div>
                    <div className='Our_Process_card'>
                        <div className='Our_Process_text'>
                            <h4>2. Course Selection </h4>
                        </div>
                    </div>
                    <div className='Our_Process_card'>
                        <div className='Our_Process_text'>
                            <h4>3. College Selection  </h4>
                        </div>
                    </div>
                    <div className='Our_Process_card'>
                        <div className='Our_Process_text'>
                            <h4>4. Exam Form </h4>
                        </div>
                    </div>
                    <div className='Our_Process_card'>
                        <div className='Our_Process_text'>
                            <h4>5. Preparation Support </h4>
                        </div>
                    </div>
                    <div className='Our_Process_card'>
                        <div className='Our_Process_text'>
                            <h4>6. Admission Form </h4>
                        </div>
                    </div>
                    <div className='Our_Process_card'>
                        <div className='Our_Process_text'>
                            <h4>7. Documentation </h4>
                        </div>
                    </div>
                    <div className='Our_Process_card'>
                        <div className='Our_Process_text'>
                            <h4> 8. GD & PI Preparation  </h4>
                        </div>
                    </div>
                    <div className='Our_Process_card'>
                        <div className='Our_Process_text'>
                            <h4>9. Education Loan Support </h4>
                        </div>
                    </div>
                    <div className='Our_Process_card'>
                        <div className='Our_Process_text'>
                            <h4>10. Accommodation Support</h4>
                        </div>
                    </div>
                    <div className='Our_Process_card'>
                        <div className='Our_Process_text'>
                            <h4>11. Vocational Courses & Skill enhancement Course Support </h4>
                        </div>
                    </div>
                </div>
            </section>
            <div className='container'><h3 className="heading_46 "> BENEFITS FOR STUDENTS </h3></div>
            <section id='Benefites' className=''>
                {/* <ul > */}
                <li data-aos="zoom-out-right" className='new_li my-2 fw-600 odd'>Highly dedicated and experienced team of professionals, who value the student’s talent and their parent’s hard-earned money.</li>
                <li data-aos="zoom-out-left" className='new_li my-2 ms-auto fw-600 even'>We have tie-ups with well-equipped Universities, Schools, Colleges, Coaching Centres, Hostels, Online Course providers, and other Institutions, with exclusive service packages, catering to the needs of diverse student pools.</li>
                <li data-aos="zoom-out-right" className='new_li my-2  fw-600 odd'>We offer guidance and support throughout the process of admission that is from career counseling and all way through the completion of the admission process, with value-added services of hostel and mess recommendations.</li>
                <li data-aos="zoom-out-left" className='new_li my-2 ms-auto fw-600 even'> We are a one-stop solution in respect to providing career counseling, document assessment, telephonic consultation, case filing and representation during admissions in the college.</li>
                <li data-aos="zoom-out-right" className='new_li my-2 fw-600 odd'>We are driven by the principle of honesty and integrity, so that we can guide the students in their career path, with the utmost candour.</li>
                <li data-aos="zoom-out-left" className='new_li my-2 ms-auto fw-600 even'>Cost-effective solution to your career confusion.</li>
                <li data-aos="zoom-out-right" className='new_li my-2 fw-600 odd'>We are distinctive in our field, ‘Not for what we do, but the way we execute it!”</li>
                {/* </ul> */}
            </section>
            <section id='Counseling_courses' data-aos="zoom-in"
                data-aos-duration="500">
                <div className='Counseling_courses p-1'>
                    <h3 className="heading_46">Get Complete Counseling on Courses like</h3><br></br>
                    <div>1.	Management (MBA & BBA)</div>
                    <div>2.	Law (BA LLB, BBA LLB, B.Com LLB, LLB, LLM)</div>
                    <div>3.	Engineering (B.E. & B.Tech & M.Tech)</div>
                    <div>4.	Medical</div>
                    <div>5.	CA</div>
                    <div>6.	CS</div>
                    <div>7.	Nursing</div>
                    <div>8.	Physiotherapy</div>
                    <div>9.	Pharma (B.Pharm & D.Pharm)</div>
                    <div>10.	Design (B.Des & M.Des)</div>
                    <div>11.	Mass Communication & Journalism</div>
                    <div>12.	Hotel Management</div>
                    <div>13.	Event Management</div>
                    <div>14.	Commerce  (B.Com & B.Com Hons)</div>
                    <div>15.	Architecture</div>
                    <div>16.	Liberal Studies</div>
                    <div>17.	Sports Management</div>
                    <div>18.	Public Administration & Policy Making</div>
                    <div>19.	Aviation</div>
                    <div>20.	Food & Agriculture</div>
                    <div>21.	Civil services</div>
                    <div>22.	Banking</div>
                    <div>23.	Psychology</div>
                    <div>24.	Digital Marketing</div>
                    <div>25.	Data analytics</div>
                    <div>26.	Animation & Visual Effects</div>

                </div>
            </section>
            <section id="Sister_Concerns " data-aos="zoom-in"
                data-aos-duration="500">
                <div className="Sister_Concerns container px-md-0">
                    <div className='container'> <h3 className="heading_46">About Sister Concerns </h3></div>
                    <div className='row '>

                        <div className='col-md-6 text-center' data-aos="zoom-out-right">
                            <Image loader={() => '/Image/logo/ygm.png'} src="/Image/logo/ygm.png" width="200px" height="170px" alt='your global mentors logo'></Image>
                            <p> <b className='main-heading'> Your Global Mentors :-</b> We are a foreign education
                                consultancy who provides quality & overall services for students
                                and parents seeking consultancy for overseas education services.
                                We offer guidance and support throughout the process of admission
                                from career counselling to completion of admission process. Having
                                tie-ups with well equipped Universities and working places and
                                offices in 3 different continents, our network is diverse and
                                student friendly. Highly dedicated and experienced team which
                                values student’s talent and their parent’s hard earned money.
                                Providing End to End services to students form Course Selection,
                                University applications to documentation and pre-departure
                                briefing. We are a one stop solution w.r.t providing counseling,
                                document assessment, telephonic consultation, case filing and
                                representation, pre-departure briefing and post landing services.</p>
                            <b>Go to the website :-</b>  <a href={process.env.NEXT_PUBLIC_YGM_URL}>Click Here</a>
                        </div>
                        <div className='col-md-6 text-center' target="_blank" rel="noopener noreferrer" data-aos="zoom-out-left">
                            <Image loader={() => '/Image/logo/cbalogo.png'} src="/Image/logo/cbalogo.png" width="165px" height="170px" alt='cbalogo'></Image>
                            <p> <b className='main-heading'>	Counseling By Atul  :-</b>At Counseling by Atul, we strongly believe that ‘ Happiness comes in doing what you love’. We take active steps to empower students towards the right career path for a happy and successful future. For the same, we put in our thorough research, experience, knowledge, and expertise to help students realize their potential and maximize it in the right direction.</p>
                            <p>We love shaping innovators of tomorrow!</p>
                            <p>Over time, we have noticed that students and professionals often end up compromising on their careers due to a lack of guidance or because they find themselves confused with the wide variety of options available. Counseling by Atul was started with an aim to guide such youthful adults in the right direction and throw light on the available solutions available for their career paths.</p>
                            <b>Go to the website :-</b>  <a href='https://counselingbyatul.com/'>Click Here</a>
                        </div>
                    </div>
                </div>
            </section>
            <Testimonials data={TestimonialsData} />
        </>
    )
}
export async function loadPosts() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get_testimonials.php`)
    const data = await res.json()
    return data
}



export async function getServerSideProps() {
    const TestimonialsData = await loadPosts()
    return { props: { TestimonialsData } }
}

export default About