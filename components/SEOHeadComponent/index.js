import Head from 'next/head';
export default function SEOHeadComponent({ title = 'Get Your College', metaContent = '' ,h1 }) {
    return (
        <>
        <Head>
            <title>{title}</title>
            <meta name="viewport" content={metaContent} />
        </Head>
        <div className='container'>
        <h1 data-aos="zoom-in-right"data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0" className="animate_charcter"> {h1}</h1>
        </div>
        </>
    )
}