import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import s1 from '../IMG/s1.jpg'
import s2 from '../IMG/s2.jpg'
import s3 from '../IMG/s3.jpg'
import s4 from '../IMG/s4.jpg'
import s6 from '../IMG/s6.jpg'
import s7 from '../IMG/s7.jpg'
import Slider from "react-slick";
export default function Searchbycategory() {

    
    const settings = {
       arrows:false,
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 5,
        slidesToScroll: 1,
    };
    
    const slidesData = [
        {
            image: s1,
            name: 'Bushings & Mounts ',
            desc: 'Air Ride Kits',
            desc1: 'Shock and Struts',
            desc2: 'Air Management',
            desc3:'Ait Tank'
          
         
        },
        {
            image :s2,
            name: 'Static Suspension ',
            desc: 'Air Ride Kits',
            desc1: 'Shock and Struts',
            desc2: 'Air Management',
            desc3:'Ait Tank'
          
        },
        {
    
            image :s3,
            name: ' Chassis Reinforcement ',
            desc: 'Air Ride Kits',
            desc1: 'Shock and Struts',
            desc2: 'Air Management',
            desc3:'Ait Tank'
            
        }, {
            image :s4,
            name: 'Air Suspension',
            desc: 'Air Ride Kits',
            desc1: 'Shock and Struts',
            desc2: 'Air Management',
            desc3:'Ait Tank'
           
        }, {
      
            image :s6,
            name: 'Suspension Arms',
            desc: 'Air Ride Kits',
            desc1: 'Shock and Struts',
            desc2: 'Air Management',
            desc3:'Ait Tank'
          
        },
        {
            image :s7,
            name: 'Suspension',
            desc: 'Air Ride Kits',
            desc1: 'Shock and Struts',
            desc2: 'Air Management',
            desc3:'Ait Tank'
           
        },
      ];
    
    return (
        <div>
            <section className="searchbycategory">
                <div className="categoryheading ">
                    <h3>Shop By Category</h3>
                    <hr className="linehr"/>
                </div>
       

            <div className="">
                <div className="row">
                 
                    <div className="col">
                    <Slider {...settings} className="slickimg ">
                {slidesData.map((slide) =>
                    <div className="slick-slide">
                        <img src={slide.image} className="imggs" />
                        <p class="procutname">{slide.name}</p>
                        {/* <li id="lisdec">
                        <li>{slide.desc}</li>
                            <li>{slide.desc1}</li>
                            <li>{slide.desc2}</li>
                            <li>{slide.desc3}</li>
                      </li> */}
                    </div>
                )}
                            </Slider>
                            </div>
                    </div>
              
           </div>
           </section>
        </div>
    )
}
