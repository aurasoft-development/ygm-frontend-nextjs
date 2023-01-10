import React, { Fragment } from 'react'
import Footer from "./Footer";
import Header from "./Header";
export default function Layout(props) {
    return (
        <Fragment>
            <Header />
            <div className="header_height"></div>
            <div>{props.children}</div>
            <Footer />
        </Fragment>
    )
}