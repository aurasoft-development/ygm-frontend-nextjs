import Link from "next/link";
import Blog from "../components/Blog";
import HomeSlider from "../components/HomeSlider"
import Testiminials from "../components/Testimonials"
import AssociatedInstitutions from "../components/AssociatedInstitutions"
import Videos from "../components/Videos";
import TopCollege from "../components/TopCollege";
import LatestNews from "../components/LatestNews"
import TopCities from "../components/TopCities"

import ExploreyourFuture from "../components/ExploreyourFuture"
import TopExams from "../components/TopExams";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import SEOHeadComponent from "../components/SEOHeadComponent";


function Home({ videos, LogosData, TestimonialsData, BlogData, LatestNewsData, CitiesData, ExploreCategory, Exams }) {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <HomeSlider />
      <LatestNews data={LatestNewsData.news} />
      <SEOHeadComponent title="Information of best colleges in India with fees, placement, exam, result" metaContent=" The best colleges in India include IIT Chennai, Christ University(Bangalore) for BBA & BCA, IIT (Delhi) for Science Courses & SRCC, Delhi for Commerce" h1=' Best Colleges in India with their specialized courses' />
      <ExploreyourFuture ExploreCategory={ExploreCategory} />
      <TopCities CitiesData={CitiesData} />
      <TopCollege data={ExploreCategory.CollegeCategoryData} />
      <TopExams data={Exams} />
      <Videos data={videos} />
      <AssociatedInstitutions data={LogosData} />
      <Testiminials data={TestimonialsData} />
      <Blog data={BlogData} />
    </>
  );
}

export async function getServerSideProps() {

  // featching Api for Video Componenet 
  let videoRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get_videos.php?page=home`)
  const VideoData = await videoRes.json();

  // featching Api for AssociatedInstitutions Componenet 
  let logosRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get_colleges.php`)
  const LogosData = await logosRes.json();

  // featching Api for Testiminials Componenet 
  let TestimonialsRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get_testimonials.php`)
  const TestimonialsData = await TestimonialsRes.json();

  // featching Api for Testiminials Componenet 
  let LatestNews = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get_news_feeds.php`)
  const LatestNewsData = await LatestNews.json();

  // featching Api for BlogData  Componenet 
  let BlogRes = await fetch(`https://getyourcollege.in/blog/wp-content/themes/astra/get_three_blogs.php`)
  const BlogData = await BlogRes.json();

  // featching Api for TopCitiesData  Componenet 
  let TopCitiesData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get_cities.php?limit=${process.env.TOP_CITIES_NUMBER_ON_SLIDER || 7}`)
  const CitiesData = await TopCitiesData.json();

  // featching Api for CollegeCategory  Componenet 
  let CollegeCategory = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get_college_category.php?type=1`)
  const CollegeCategoryData = await CollegeCategory.json();

  // featching Api for CollegeCategory  Componenet 
  let UG_Exams = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get_exam_categories.php?type=1`)
  const UG_Exams_Data = await UG_Exams.json();

  // featching Api for CollegeCategory  Componenet 
  let PG_Exams = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get_exam_categories.php?type=2`)
  const PG_Exams_Data = await PG_Exams.json();

  // featching Api for CollegeCategory  Componenet 
  let ExamCategory = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get_exam_categories.php`)
  const Exams = await ExamCategory.json();

  return {
    props: {
      videos: VideoData,
      LogosData: LogosData,
      TestimonialsData: TestimonialsData,
      BlogData: BlogData,
      LatestNewsData: LatestNewsData,
      CitiesData: CitiesData,
      ExploreCategory: { CollegeCategoryData, UG_Exams_Data, PG_Exams_Data},
      Exams: Exams
    }
  };
}

export default Home;