import LatestNews from "../components/LatestNews";
function Home({LatestNewsData }) {
console.log('LatestNewsData :', LatestNewsData);
  return (
    <>
      <LatestNews data={LatestNewsData.news} />
    </>
  );
}

export async function getStaticProps() {
  // featching Api for Testiminials Componenet 
  let LatestNews = await fetch(`https://getyourcollege.in/gyc_admin/api/get_news_feeds.php`)
  const LatestNewsData = await LatestNews.json();
  return {
    props: {
      LatestNewsData: LatestNewsData,
     
    }
  };
}

export default Home;