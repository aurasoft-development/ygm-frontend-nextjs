import React, { useEffect } from "react"
import Image from 'next/image'
import Router from 'next/router';

import AOS from 'aos';
import 'aos/dist/aos.css';


function Accommodation({ accommodation }) {
  function sendProps(item) {
    Router.push({
      pathname: "/accommodation/accommodationForm",
      query: {
        id: item
      }
    })
  }
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <section className="accommodation_list pb-5" data-aos="zoom-in-right"data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0">
        <div className="container ">
          <div className="row  s mx-auto">
            {
              accommodation.accommodation.length !== 0
                ?
                accommodation.accommodation.map((item, index) => {
                  return <div key={item.accommodation_id} className=" p-md-2 p-1 col-md-4 col-sm-6 col-12 m-auto" >
                    <div className="card acmd_card" >
                      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                        <Image layout='fill' loader={() => item.imagepath + item.image} src={item.imagepath + item.image} className="card-img-top" alt="profile Image" />
                      </div>
                      <div className="card-body">
                        {
                          item.accommodation_name &&
                          <h4 className="card-title acmd_name ">{item.accommodation_name}</h4>
                        }
                        {
                          item.address &&
                          <p className="card-text acmd_address"><i className="fas fa-map-marker-alt"></i> {item.address}</p>
                        }
                        {
                          item.contact &&
                          <p className="card-text acmd_contact"><span><i className="fas fa-phone"></i> mobile no : </span> {item.contact}</p>
                        }
                        <a className="btn btn-white btn-animate" onClick={() => sendProps(item.accommodation_id)}>Enquire Now</a>
                      </div>
                    </div>
                  </div>
                })
                :
                <h6 className="text-danger text-center">No data is available yet!</h6>
            }

          </div>
        </div>
      </section>
    </>
  )
}

export default Accommodation