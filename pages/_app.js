import '../styles/globals.css'
import '../styles/about.css'
import '../styles/slider.css'
import '../styles/blog.css'
import '../styles/college.css'
import '../styles/popupform.css'
import '../components/SignUp/signUp.css';
import '../components/UserProfile/userProfile.css';
import 'bootstrap/dist/css/bootstrap.css'
import Layout from '../components/Layout';
import "remixicon/fonts/remixicon.css"
import "../styles/terms.module.css"
import "../styles/form.css"
import "../styles/header.css"
import { ToastContainer } from 'react-toastify'
import Router from 'next/router'
import { useEffect, useState } from 'react'
import Loader from "../components/Loader"
import Head from "next/head";
import Enquiry from "../components/Enquiry"
import Modal from 'react-bootstrap/Modal';
import ContactForm from '../components/ContactForm'
import WhatsappButton from '../components/WhatsappButton'
import ScrollTopButton from '../components/ScrollTopButton'
import AOS from 'aos';
import 'aos/dist/aos.css';
import SignUp from '../components/SignUp'
import { Provider } from 'react-redux';
import { store } from '../redux/store'
function MyApp({ Component, pageProps }) {
  const [Loading, setLoading] = useState(false)
  Router.events.on('routeChangeStart', (url) => {
    setLoading(true)
  })
  Router.events.on('routeChangeComplete', (url) => {
    setLoading(false)
  })

  // Enquiry Button
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  }
  const handleShow = () => {
    setShow(true);
  }
  useEffect(() => {
    AOS.init();
  }, [])
  return <>
    <Provider store={store}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="author" content="Syamlal CM" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>
        {Loading && <Loader />}
        
        <Enquiry setOpen={handleShow} />
        <Component {...pageProps} />
        <ToastContainer position="top-right" limit={1} />
        <Modal show={show} onHide={handleClose}>
          <ContactForm onCloseModel={handleClose} />
        </Modal>
        <WhatsappButton/>
        <ScrollTopButton/>
      </Layout>
    </Provider>
  </>
}

export default MyApp
