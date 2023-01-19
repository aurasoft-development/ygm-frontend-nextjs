import { Icon } from '@iconify/react';
import React, { useEffect } from 'react'

function ScrollTopButton() {
    const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function scrollFunction() {
        if (
            document.body.scrollTop > 500 ||
            document.documentElement.scrollTop > 500
        ) {
            document.getElementById("Scroll_button").style.display = "block";
        } else {
            document.getElementById("Scroll_button").style.display = "none";
        }
    }

    useEffect(() => {
        window.onscroll = function () {
            scrollFunction();
        };
    }, [])
    return (
        <button className="Scroll_button" id='Scroll_button' onClick={() => scrollToTop({ top: 0, behavior: 'smooth' })}>
            <Icon className='scrollIcon' icon="ri:arrow-up-circle-fill" />
        </button>
    )
}

export default ScrollTopButton