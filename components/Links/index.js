import React, { useEffect, useRef } from 'react';
import { Paper, styled } from '@mui/material';
import Link from "next/link"
import { Container } from 'react-bootstrap';
import { blueGrey } from '@mui/material/node/colors';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    background: Grey,
    padding: theme.spacing(-6),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Links({ }) {
    return (
        <div>
            <div className='p-3 Burger_Popup_container' data-aos="fade-left">
                <div className='row '>
                    <div className='col-md-6 inner_tab'>
                        <div className='inner_tab_Sec'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="blue" d="M2 19q-.425 0-.712-.288Q1 18.425 1 18V5q0-.425.288-.713Q1.575 4 2 4t.713.287Q3 4.575 3 5v9h8V8q0-.825.588-1.412Q12.175 6 13 6h6q1.65 0 2.825 1.175Q23 8.35 23 10v8q0 .425-.288.712Q22.425 19 22 19t-.712-.288Q21 18.425 21 18v-2H3v2q0 .425-.287.712Q2.425 19 2 19Zm5-6q-1.25 0-2.125-.875T4 10q0-1.25.875-2.125T7 7q1.25 0 2.125.875T10 10q0 1.25-.875 2.125T7 13Zm6 1h8v-4q0-.825-.587-1.413Q19.825 8 19 8h-6Zm-6-3q.425 0 .713-.288Q8 10.425 8 10t-.287-.713Q7.425 9 7 9t-.713.287Q6 9.575 6 10t.287.712Q6.575 11 7 11Zm0 0q-.425 0-.713-.288Q6 10.425 6 10t.287-.713Q6.575 9 7 9t.713.287Q8 9.575 8 10t-.287.712Q7.425 11 7 11Zm6-3h6q.825 0 1.413.587Q21 9.175 21 10v4h-8Z" /></svg>                                <Link href={"/accommodation"} className="desktop-link ">Accommodation </Link>
                        </div>
                    </div>
                    <div className='col-md-6 inner_tab'>
                        <div className='inner_tab_Sec'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="blue" fill-rule="blue" d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87z" /><circle cx="9" cy="8" r="4" fill="blue" fill-rule="blue" /><path fill="blue" fill-rule="blue" d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24a5.98 5.98 0 0 1 0 7.52c.42.14.86.24 1.33.24zm-6 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" /></svg>
                            <Link href="/gd">Group Discussion</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}