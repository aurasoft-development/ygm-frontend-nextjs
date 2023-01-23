import Layout from '../components/Layout'
import '../styles/globals.css'
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';
import Router from 'next/router';
import Loader from '../components/Loader';
// This section is for new css import
import '../styles/WhatsappButton.css';
import '../styles/ScrollTopButton.css';
import '../styles/EnquiryButton.css';
import WhatsappButton from '../components/WhatsappButton';
import ScrollTopButton from '../components/ScrollTopButton';
import EnquiryButton from '../components/Enquiry';


function MyApp({ Component, pageProps }) {
  const [Loading, setLoading] = useState(true)
  Router.events.on('routeChangeStart', (url) => {
    setLoading(true)
  })
  Router.events.on('routeChangeComplete', (url) => {
    setLoading(false)
  })
  return <Layout>
    {Loading && <Loader />}
    <ToastContainer position="top-right" limit={1} />
    <Component {...pageProps} />
<EnquiryButton/>
<WhatsappButton/>
<ScrollTopButton/>
  </Layout>
}

export default MyApp
