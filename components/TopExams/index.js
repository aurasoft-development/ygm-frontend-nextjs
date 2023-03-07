import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import index from '../Testimonials';
import apiCall from '../../utils/apiCall';
import { useEffect } from 'react';
import { useState } from 'react';
import Link from 'next/link';

import AOS from 'aos';
import 'aos/dist/aos.css';



export default function TopExams({ data }) {
    const [Exams, setExams] = useState({})
    const [cateogry, setCateogry] = useState("9")
    // ===========
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        const getExams = async () => {
            try {
                const response = await apiCall(`/get_exams_by_category.php?category=${cateogry ? cateogry : 2}`, "get")
                setExams(response.data)
            } catch (error) {
                console.log(error.message)
            }
        }
        getExams()
    }, [cateogry])
    // ============
    function TabPanel(props) {
        const { children, value, index, ...other } = props;
        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`vertical-tabpanel-${index}`}
                aria-labelledby={`vertical-tab-${index}`}
                {...other}
            >
                {value === index && props.children != "undefined" && cateogry != null && (
                    <div className='container Top_college_container_inner_box pb-2'>
                        <div className="row">
                            {
                                Exams.exams && Exams.exams.length == 0 && <div className='text-danger text-center p-3'>No data available for this exam!</div>
                            }
                            {
                                Exams.exams && Exams.exams.map(item => {
                                    return <div className="col-sm-4  mb-5 " key={item.examid}>
                                        <div className="card">
                                            <div className="card-body top_college_card">
                                                <h5 className="card-title ">{item.exam_name} exam for {item.course_name}</h5>
                                                <small>{item.issue_form_date} to {item.exam_date}</small><br />
                                                <small>{item.participating_institute}</small><br />
                                                <a href="#" className="btn BG_button mt-2"> <Link href={{ pathname: `/exams/examsbycategory/${item.slug}` }}> Read More</Link></a>
                                                {/* <Link href={`/exams/examsbycategory/${item.slug}?type=${item.category_id}`} >{item.category_name}</Link> */}
                                            </div>
                                        </div>
                                    </div>
                                })
                                //  : <Box sx={{ p: 3, color: "red" }} className="text-center m-auto">
                                //     No data available!
                                // </Box>
                            }
                        </div>
                    </div>
                )}
            </div>
        );
    }
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div className='container Top_college_container' data-aos="zoom-in-right" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0">
                <h3 className='heading'>Top Exams</h3> <br />
                <small>Exams cherry picked for you</small>
                <Box sx={{ mx: 'auto', maxWidth: 1400, my: "-2", bgcolor: 'background.paper' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                        TabIndicatorProps={{
                            sx: { backgroundColor: "#ffa500" }
                        }}
                    >
                        {
                            data.exam_category.map(item => {
                                return <Tab label={item.category_name} key={item.categoryID} onClick={() => { setCateogry(item.category_id) }} />
                            })
                        }
                    </Tabs>
                </Box>
                <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', width: "100%", height: 224 }}>
                    {
                        data.exam_category.map((item, index) => {
                            return <TabPanel value={value} index={index} key={item}></TabPanel>
                        })
                    }
                </Box>
            </div>
        </>
    );
}