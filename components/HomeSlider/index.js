import React from 'react'
import Image from "next/image";
import Carousel from 'react-bootstrap/Carousel';
export default function HomeSlider() {
    return (
        <>
            {/* -----------------------------------------------
            ============== Carousel Start ===================
            ----------------------------------------------- */}
            <Carousel className='Home_Slider'>
                <Carousel.Item>
                <Image loader={() => '/Image/home/sliders1.png'}  src={'/Image/home/sliders1.png'} width="1920" height="810" alt='get your college information'></Image>
                    {/* <img layout='fill' loader={() => '/Image/home/sliders1.png'}  src="/Image/home/sliders1.png" width="120px" height="120px"  alt="get your college information" /> */}
                </Carousel.Item>
                <Carousel.Item>
                    <Image  loader={() => '/Image/home/sliders2.png'}  src={"/Image/home/sliders2.png"} width="1920" height="810"  alt="leading universities and colleges"></Image> 
                </Carousel.Item>
                <Carousel.Item>
                    <Image  loader={() => '/Image/home/sliders3.png'}  src={"/Image/home/sliders3.png"} width="1920" height="810" alt="Get your college services" ></Image>
                </Carousel.Item>
                <Carousel.Item>
                    <Image  loader={() => '/Image/home/sliders4.png'}  src={"/Image/home/sliders4.png"} width="1920" height="810"  alt="best carrer guid and mentors"></Image>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

