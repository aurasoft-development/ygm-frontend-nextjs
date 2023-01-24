import Layout from '../components/Layout'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';
import Router from 'next/router';
// import Loader from '../components/Loader';
// This section is for new css import
import '../styles/WhatsappButton.css';
import '../styles/ScrollTopButton.css';
import '../styles/EnquiryButton.css';
import '../styles/slider.css';
import '../styles/header.css';
import '../styles/popupform.css';
import '../styles/contact.module.css';
import WhatsappButton from '../components/WhatsappButton';
import ScrollTopButton from '../components/ScrollTopButton';
import Enquiry from "../components/Enquiry";
import HomeSlider from '../components/HomeSlider';
import Modal from 'react-bootstrap/Modal';
import ContactForm from '../components/ContactForm';
import EnquiryButton from '../components/Enquiry';



function MyApp({ Component, pageProps }) {
  const [Loading, setLoading] = useState(true)
  Router.events.on('routeChangeStart', (url) => {
    setLoading(true)
  })
  Router.events.on('routeChangeComplete', (url) => {
    setLoading(false)
  })
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  }
  const handleShow = () => {
    setShow(true);
  }
  return <Layout>
    {/* {Loading && <Loader />} */}
    <HomeSlider />
    <Enquiry setOpen={handleShow} />
    <ToastContainer position="top-right" limit={1} />
    <Component {...pageProps} />
    <EnquiryButton />
    <WhatsappButton />
    <ScrollTopButton />
    <Modal show={show} onHide={handleClose}>
      <ContactForm onCloseModel={handleClose} />
    </Modal>
  </Layout>
}

export default MyApp
