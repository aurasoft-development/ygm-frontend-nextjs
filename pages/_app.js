import Layout from '../components/Layout'
import '../styles/globals.css'
import { ToastContainer } from 'react-toastify'
import { useState } from 'react'
import Router from 'next/router'
import Loader from '../components/Loader'

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
  </Layout>
}

export default MyApp
